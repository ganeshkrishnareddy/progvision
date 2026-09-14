// Service Lead API - Collects B2B leads from ProgVision and LaunchWise
// Add this to progvision functions/server.js or as a Firebase function

import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function submitServiceLead(req, res) {
  try {
    const { name, email, business, phone, service, budget, timeline, source = "progvision" } = req.body;
    
    if (!name || !email || !business || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Lead scoring for B2B
    let score = 40; // Base score
    
    // Service value scoring
    if (service === "Custom Software") score += 20;
    else if (service === "E-commerce Platform") score += 15;
    else if (service === "App Development") score += 15;
    else if (service === "Website Development") score += 10;
    else if (service === "Web Security Audit") score += 15;
    
    // Budget scoring
    if (budget === "$50k+") score += 20;
    else if (budget === "$30k - $50k") score += 15;
    else if (budget === "$15k - $30k") score += 10;
    
    // Timeline urgency
    if (timeline === "Immediate") score += 10;
    
    const lead = {
      name,
      email,
      business,
      phone,
      service,
      budget,
      timeline,
      source,
      lead_score: score,
      lead_tier: score >= 70 ? "hot" : score >= 50 ? "warm" : "cold",
      created_at: serverTimestamp(),
      nurtured: false,
      converted: false
    };

    // Save to Firestore
    await addDoc(collection(getFirestore(), "service_leads"), lead);

    // Send to Google Forms for backup
    // (Similar to existing InstaDemoX flow)
    
    // Notify agency via WhatsApp
    if (process.env.AGENCY_WHATSAPP && process.env.CALLMEBOT_APIKEY) {
      const message = `New Service Lead! 🔥

${source === "progvision" ? "ProgVision" : "LaunchWise"}: ${name} from ${business}
Service: ${service}
Budget: ${budget || "Undisclosed"}
Timeline: ${timeline}

Contact: ${phone}`;
      
      await fetch(
        `https://api.callmebot.com/whatsapp.php?phone=${process.env.AGENCY_WHATSAPP}&text=${encodeURIComponent(message)}&apikey=${process.env.CALLMEBOT_APIKEY}`
      );
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Service lead submission error:", error);
    res.status(500).json({ error: error.message });
  }
}