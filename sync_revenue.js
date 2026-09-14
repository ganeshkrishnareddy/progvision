const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const invoicesDir = path.join(__dirname, 'INVOICE_17489_25.03.2026');
const REVENUE_FILE = path.join(__dirname, 'revenue_report.json');

async function syncInvoices() {
  if (!fs.existsSync(invoicesDir)) {
    console.error("Invoice directory not found!");
    return;
  }

  const files = fs.readdirSync(invoicesDir).filter(f => f.endsWith('.pdf'));
  const report = [];

  for (const file of files) {
    const dataBuffer = fs.readFileSync(path.join(invoicesDir, file));
    try {
      const data = await pdf(dataBuffer);
      const text = data.text;
      
      // Improved Extraction Logic
      const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      
      // Simple Regex to find amounts (e.g. $1,200.00 or INR 5000)
      const amountMatch = text.match(/(?:[\$]|INR|Rs\.)\s?(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/i);
      const dateMatch = text.match(/(\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4})/);
      
      report.push({
        fileName: file,
        client: lines[0], // Assuming first line is client or brand
        amount: amountMatch ? amountMatch[1] : "Unknown",
        date: dateMatch ? dateMatch[0] : "Unknown",
        extractedAt: new Date().toISOString()
      });
      
      console.log(`Processed: ${file} | Client: ${lines[0]} | Amount: ${amountMatch ? amountMatch[1] : '?'}`);
    } catch (e) {
      console.error(`Error reading ${file}:`, e);
    }
  }

  fs.writeFileSync(REVENUE_FILE, JSON.stringify(report, null, 2));
  console.log(`\nRevenue report synced to ${REVENUE_FILE}`);
}

syncInvoices();
