export const siteData = {
    name: "ProgVision",
    description: "Engineering Elite Digital Products with Security-First Mindset",
    email: "support@progvision.online",
    phones: ["+91 7814201332"],
    socials: {
        whatsapp: "https://wa.me/918374622779",
        linkedin: "https://linkedin.com/in/pganeshkrishnareddy",
        twitter: "#",
        github: "https://github.com/ganeshkrishnareddy"
    }
}

export const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Our Work', path: '/work' },
    { name: 'Insights', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
]

export const servicesData = [
    {
        slug: "website-development",
        title: "Website Development",
        focus: ["Business Websites", "Startup & Company Websites", "High-performance builds"],
        description: "We design and develop fast, scalable, and conversion-focused websites that represent your brand professionally and perform reliably in production.",
        target: "Businesses and startups looking for a professional, SEO-ready online presence.",
        problems: ["Slow loading times", "Poor mobile responsiveness", "Difficult to maintain legacy systems"],
        delivery: ["Requirement Analysis", "Design & Prototype", "Development & Testing", "Secure Deployment"],
        tools: ["React/Next.js", "Tailwind CSS", "Headless CMS", "Node.js"]
    },
    {
        slug: "app-development",
        title: "App Development",
        focus: ["Android Applications", "Cross-platform Apps", "Performance & Usability"],
        description: "We build robust mobile applications with clean architecture, smooth user experience, and long-term maintainability.",
        target: "Startups and companies needing a functional, reliable mobile presence.",
        problems: ["Inconsistent user experience", "Performance bottlenecks", "High maintenance costs"],
        delivery: ["UX/UI Design", "Cross-platform Development", "API Integration", "Store Publication"],
        tools: ["React Native", "Firebase", "REST APIs", "Node.js"]
    },
    {
        slug: "ios-development",
        title: "iOS Development",
        focus: ["Native iOS Apps", "Apple Ecosystem Best Practices", "UI/UX Optimization"],
        description: "Native iOS applications engineered for performance, security, and seamless integration with Apple’s ecosystem.",
        target: "Clients requiring high-end, native performance for iPhone and iPad users.",
        problems: ["Lack of native feel", "System integration issues", "Poor performance on Apple hardware"],
        delivery: ["Swift/Native Design", "System Capability Integration", "Performance Tuning", "App Store Compliance"],
        tools: ["Swift", "SwiftUI", "CoreData", "CloudKit"]
    },
    {
        slug: "web-security-audit",
        title: "Web Security Audit",
        focus: ["Vulnerability Assessment", "Security Reviews", "OWASP Top 10 Checks"],
        description: "We identify vulnerabilities, misconfigurations, and security risks in web applications and provide clear remediation guidance.",
        target: "Organizations wanting to ensure their web platforms are secure from common threats.",
        problems: ["Hidden vulnerabilities", "Configuration errors", "Compliance risks"],
        delivery: ["Dynamic Scanning", "Manual Review", "Reporting & Documentation", "Remediation Support"],
        tools: ["Burp Suite", "OWASP ZAP", "Static Analysis Tools", "Custom Scripts"]
    }
]

export const workEngagements = [
    {
        slug: "flowmatch-ai",
        client: "FlowMatch AI",
        region: "Global",
        url: "https://flowmatch.tech",
        service: "AI Workflow Platform",
        type: "Completed",
        description: "An advanced AI-powered platform for intelligent workflow matching and optimization.",
        impact: "Automating and accelerating business processes through intelligent routing and execution.",
        technologies: ["Next.js", "React", "Node.js", "Google Gemini API", "Tailwind CSS"],
        stages: ["Architecture Design", "AI Model Integration", "Platform Engineering", "Deployment"],
        deliverables: [
            "AI-powered matching engine",
            "Workflow management dashboard",
            "Scalable platform infrastructure"
        ],
        capabilities: [
            "AI Integration",
            "Process Automation",
            "Enterprise Architecture"
        ]
    },
    {
        slug: "zeropdf-suite",
        client: "ZeroPDF",
        region: "Global",
        url: "https://pixopdf.online",
        service: "Document Processing Suite",
        type: "Completed",
        description: "A comprehensive online suite for seamless PDF manipulation, editing, and conversion.",
        impact: "Simplifying document management workflows for everyday users and businesses.",
        technologies: ["React", "Express", "PDF.js", "Tailwind CSS"],
        stages: ["UI/UX Design", "Core Processing Engine Build", "Frontend Implementation", "Quality Assurance"],
        deliverables: [
            "Online PDF editor",
            "Format conversion tools",
            "Document management interface"
        ],
        capabilities: [
            "Document Processing",
            "Client-side Execution",
            "High-performance Web Apps"
        ]
    },
    {
        slug: "biograph",
        client: "BioGraph",
        region: "Global",
        url: "https://biographbrand.web.app/",
        service: "Brand E-commerce",
        type: "Completed",
        description: "A minimal, text-led menswear brand platform focusing on editorial aesthetics, neutral tones, and strong typography hierarchy.",
        impact: "Establishing a distinct digital identity for a premium menswear label.",
        technologies: ["React", "Firebase", "CSS Modules", "Vite"],
        stages: ["Brand Identity Translation", "UI/UX Design", "Frontend Implementation", "Content Strategy"],
        deliverables: [
            "Editorial-style product pages",
            "Minimalist aesthetic interface",
            "Responsive brand platform"
        ],
        capabilities: [
            "Digital Branding",
            "E-commerce UI",
            "Visual Storytelling"
        ]
    },
    {
        slug: "sarathi-ai",
        client: "Sarathi AI",
        region: "India",
        url: "https://sarathi-sbi.web.app",
        service: "SBI Customer Concierge",
        type: "Completed",
        description: "Agentic customer acquisition and onboarding concierge for State Bank of India (SBI) featuring multi-agent qualification and strict compliance checks.",
        impact: "Automated financial lead generation and compliance screening for retail banking customers.",
        technologies: ["React", "Vite", "Express", "Tailwind CSS", "Google Gemini API", "Firebase"],
        stages: ["Banking Flow Auditing", "Compliance Guardrails Design", "Multi-agent System Setup", "Dynamic Onboarding UI"],
        deliverables: [
            "Qualified lead generation form",
            "Compliance verification dashboard",
            "SBI-aligned product matching engine"
        ],
        capabilities: [
            "Fintech Security",
            "Agentic Lead Qualification",
            "Strict Compliance Guardrails"
        ]
    },
    {
        slug: "kamal-radios",
        client: "Kamal Radios",
        region: "India",
        url: "https://kamal-radios.web.app",
        service: "Premium E-commerce & DJ Store",
        type: "Completed",
        description: "E-commerce showcase for a premium professional audio and DJ equipment store operating since 1970 in Chhattisgarh, India.",
        impact: "Digitized a legacy physical store into a modern high-performance catalog and customer engagement hub.",
        technologies: ["React", "Vite", "Tailwind CSS", "Motion", "Lucide React", "Firebase"],
        stages: ["Inventory Mapping", "Product Catalog Design", "Search & Filter Logic Development", "Hosting Configuration"],
        deliverables: [
            "Digital inventory catalog",
            "Dynamic filters",
            "Interactive audio setup estimator"
        ],
        capabilities: [
            "Legacy Digitization",
            "Retail Inventory Systems",
            "Premium Audio Consulting UI"
        ]
    },
    {
        slug: "instademox",
        client: "InstaDemoX",
        region: "Global",
        url: "https://instademox.web.app",
        service: "AI Website Generator",
        type: "Completed",
        description: "An instant personalized website demo generator powered by Gemini API, translating prompts into responsive web interfaces in seconds.",
        impact: "Accelerated sales cycle for agencies and freelancers by generating high-quality live mockups on demand.",
        technologies: ["React", "Vite", "Express", "Tailwind CSS", "Google Gemini API", "Firebase"],
        stages: ["Concept & UX Wireframing", "Gemini API Prompt Engineering", "Dynamic Component Generation", "Firebase Deployment"],
        deliverables: [
            "Interactive playground UI",
            "Server-side website builder API",
            "Editable site previews"
        ],
        capabilities: [
            "Generative UI",
            "Multi-agent Web Construction",
            "On-demand Code Compilation"
        ]
    },
    {
        slug: "zentoja",
        client: "Zentoja",
        region: "Global",
        url: "#",
        service: "Family Safety & Empowerment Super App",
        type: "Ongoing",
        description: "AI-powered family safety and wellness application featuring real-time emergency SOS, transit monitoring, geofencing, and senior care alerts.",
        impact: "Engineered a unified ecosystem for real-time geolocation tracking and threat assessment to ensure domestic peace of mind.",
        technologies: ["React", "Vite", "Express", "Tailwind CSS", "Google Gemini API", "Geolocation API", "Webcam API"],
        stages: ["Architecture Blueprint", "Real-time Geofencing Logic", "Emergency SOS System Integration", "State Synchronization Engine"],
        deliverables: [
            "SOS Trigger System",
            "Interactive geo-fencing map",
            "Senior health & wellness assessment interface"
        ],
        capabilities: [
            "Real-time Location Services",
            "Multi-device Synchrony",
            "Proactive Threat Detection"
        ]
    },
    {
        slug: "sentinelmind",
        client: "SentinelMind",
        region: "Global",
        url: "#",
        service: "AI Security Layer & SOC Dashboard",
        type: "Completed",
        description: "An autonomous threat guardian and SOC dashboard for multi-agent AI systems, evaluating actions against prompt injection, privilege escalation, and exfiltration vectors.",
        impact: "Establishing zero-trust security and real-time interception for agentic execution environments.",
        technologies: ["Next.js", "React", "Recharts", "TypeScript", "Tailwind CSS"],
        stages: ["Architecture Design", "Risk Scoring Engine Build", "Telemetry UI Development", "Policy Engine Implementation"],
        deliverables: [
            "Real-time interceptor gateway",
            "Enterprise security dashboard",
            "Immutable audit logging"
        ],
        capabilities: [
            "AI System Firewalls",
            "Threat Vector Scoring",
            "Zero-Trust Policy Automation"
        ]
    },
    {
        slug: "technova",
        client: "TechNova AG",
        region: "Europe",
        url: "https://www.technovaworld.com/",
        service: "Web Development",
        type: "Completed",
        description: "Delivered scalable web platforms with long-term maintainability and performance in mind.",
        impact: "Foundational technical oversight for sustainable growth.",
        technologies: ["React", "REST APIs", "Node.js", "PostgreSQL"],
        stages: ["Architecture Review", "API Integration", "Core Platform Build", "Quality Assurance"],
        deliverables: [
            "Scalable platform architecture",
            "Maintainable codebase",
            "Performance reporting"
        ],
        capabilities: [
            "Platform Engineering",
            "API Management",
            "Long-term System Planning"
        ],
        invoices: ["GNS-INV-26-0004.pdf"]
    },
    {
        slug: "weblink-solutions",
        client: "WebLink Solutions",
        region: "Asia",
        url: "https://www.weblink.co.in/",
        service: "Website Development",
        type: "Completed",
        description: "Business website development with responsive design and secure deployment.",
        impact: "Reliable web presence across regional markets.",
        technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
        stages: ["Requirement Gathering", "Database Setup", "Backend Logic", "Deployment"],
        deliverables: [
            "Business website implementation",
            "Secure deployment pipeline",
            "Responsive mobile view"
        ],
        capabilities: [
            "Full-stack Web Dev",
            "Cross-browser support",
            "Regional Market Readiness"
        ],
        invoices: ["GNS-INV-26-0003.pdf"]
    },
    {
        slug: "pixelmorph",
        client: "PixelMorph",
        region: "Australia",
        url: "https://pixelmorph.io/",
        service: "Website Development",
        type: "Completed",
        description: "Brand-focused website development emphasizing performance and visual clarity.",
        impact: "Stronger brand identity through high-performance web delivery.",
        technologies: ["Three.js", "React Three Fiber", "Tailwind CSS"],
        stages: ["Visual Concept Design", "Performance Audit", "Frontend Code", "Optimization"],
        deliverables: [
            "Brand-aligned website design",
            "Performance tuning",
            "Clean frontend implementation"
        ],
        capabilities: [
            "High-end Visual Effects",
            "Frontend Performance Optimization",
            "Brand Strategy Alignment"
        ],
        invoices: ["GNS-INV-26-0002.pdf"]
    },
    {
        slug: "zenith-cloud",
        client: "Zenith Cloud Solutions",
        region: "USA",
        url: "https://www.zenithcloudsolution.com/",
        service: "Website Development & Platform Support",
        type: "Completed",
        description: "Development of business and platform websites with a focus on performance, secure deployment, and long-term technical support.",
        impact: "High-performance digital foundation with secure delivery pipelines.",
        technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "AWS"],
        stages: ["Requirements Analysis", "UI/UX Design", "Development", "Security Testing", "Deployment"],
        deliverables: [
            "High-performance business website",
            "Secure hosting & deployment setup",
            "SEO-ready architecture",
            "Long-term technical support framework"
        ],
        capabilities: [
            "Production-grade web engineering",
            "Secure deployment workflows",
            "Scalable architecture planning"
        ],
        invoices: ["GNS-INV-25-0012.pdf", "GNS-INV-26-0001.pdf"]
    },
    {
        slug: "ak-hot-chips",
        client: "A K Hot Chips",
        region: "India",
        url: "https://akhotchips.web.app/#/",
        service: "E-commerce Platform",
        type: "Completed",
        description: "A comprehensive e-commerce solution for a traditional snack brand, featuring detailed product showcases and seamless ordering.",
        impact: "Expanded reach from local store to online direct-to-consumer sales.",
        technologies: ["React", "Node.js", "Payment Gateway Integration", "Cloud Hosting"],
        stages: ["Market Analysis", "Platform Design", "Payment Integration", "Launch"],
        deliverables: [
            "Full-featured e-commerce site",
            "Product catalog management",
            "Secure checkout process"
        ],
        capabilities: [
            "E-commerce Development",
            "Payment Solutions",
            "Product Presentation"
        ]
    },
    {
        slug: "dalls-investments",
        client: "Dalls Investments",
        region: "Singapore",
        url: "https://www.dallasvc.com/",
        service: "Investment Platform",
        type: "Completed",
        description: "Secure and centralized investment and financial management portal with strict adherence to data security standards.",
        impact: "Streamlined operational efficiency and enhanced client data protection.",
        technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
        stages: ["Architecture Design", "Frontend Implementation", "Security Hardening", "Launch"],
        deliverables: [
            "Financial dashboard interface",
            "Secure system integrations",
            "Scalable infrastructure"
        ],
        capabilities: [
            "Secure Systems",
            "Data Visualization",
            "Financial Technologies"
        ],
        invoices: ["GNS-INV-24-0002.pdf", "GNS-INV-25-0010.pdf"]
    },
    {
        slug: "brahmana-vantillu",
        client: "Brahmana Vantillu",
        region: "India",
        url: "https://www.brahmanavantillu.in/",
        service: "E-commerce Website",
        type: "Completed",
        description: "Online commerce platform designed for traditional Indian food services with a focus on authentic brand representation.",
        impact: "Expanded audience reach and simplified ordering workflow in regional markets.",
        technologies: ["React", "Tailwind CSS", "Next.js"],
        stages: ["Brand Discovery", "Platform Development", "Payment Integration", "Launch"],
        deliverables: [
            "Modern e-commerce site",
            "Product catalog",
            "Secure checkout flow"
        ],
        capabilities: [
            "Local Market Expertise",
            "E-commerce UI",
            "Brand Strategy Alignment"
        ],
        invoices: ["GNS-INV-25-0009.pdf"]
    },
    {
        slug: "nexatech",
        client: "NexaTech",
        region: "Europe",
        url: "https://nexatech.dz/",
        service: "Custom Web Development",
        type: "Completed",
        description: "Built scalable web solutions aligned with business workflows and long-term growth.",
        impact: "Modular and maintainable digital infrastructure supporting growth.",
        technologies: ["Node.js", "MongoDB", "Express.js", "Vue.js"],
        stages: ["Workflow Audit", "Scalability Planning", "Custom Module Build", "Performance Tuning"],
        deliverables: [
            "Custom web features",
            "Modular architecture",
            "Maintainable codebase"
        ],
        capabilities: [
            "Custom Software Engineering",
            "Database Design",
            "Growth-oriented Architecture"
        ],
        invoices: ["GNS-INV-25-0007.pdf"]
    },
    {
        slug: "altcode-technologies",
        client: "AltCode Technologies",
        region: "Canada",
        url: "https://altcode.co/en/",
        service: "Website Development",
        type: "Completed",
        description: "Designed and delivered a modern, responsive company website with optimized UI and SEO structure.",
        impact: "Clean UI/UX with high search engine visibility.",
        technologies: ["Next.js", "Headless CMS", "Framer Motion"],
        stages: ["Brand Discovery", "Prototype Design", "SEO Strategy", "Feature Development", "Final Delivery"],
        deliverables: [
            "Responsive corporate website",
            "SEO-optimized structure",
            "Clean UI/UX"
        ],
        capabilities: [
            "Responsive Web Design",
            "Technical SEO Integration",
            "Creative UI Development"
        ],
        invoices: ["GNS-INV-25-0006.pdf"]
    },
    {
        slug: "sakura-web",
        client: "Sakura Mobile / Sakura Web Services",
        region: "Japan",
        url: "https://www.sakuramobile.jp/",
        service: "Website Development",
        type: "Completed",
        description: "International collaboration delivering performance-focused websites with cross-region support.",
        impact: "Seamless international project delivery and coordination.",
        technologies: ["Next.js", "Vercel", "GraphQL"],
        stages: ["Cross-region coordination", "Localization Strategy", "Build and Test"],
        deliverables: [
            "Performance-focused website",
            "International project delivery",
            "Cross-regional support framework"
        ],
        capabilities: [
            "Global Collaboration",
            "High-performance delivery",
            "Localization Expertise"
        ],
        invoices: ["GNS-INV-25-0001.pdf"]
    },
    {
        slug: "dallas-vc",
        client: "Dallas Venture Capital",
        region: "USA",
        url: "https://www.dallasvc.com/",
        service: "Web Applications",
        type: "Completed",
        description: "Implemented modern web applications to support business operations with secure handling of financial data.",
        impact: "Streamlined business operations with secure data management.",
        technologies: ["React", "Firebase", "Cloud Functions", "Material UI"],
        stages: ["Business Logic Review", "Architecture Design", "Frontend Implementation", "Security Hardening", "Launch"],
        deliverables: [
            "Custom web application interfaces",
            "Secure data handling practices",
            "Performance-focused architecture"
        ],
        capabilities: [
            "Business application development",
            "Secure system design",
            "Reliability under real-world usage"
        ]
    },
    {
        slug: "aditya-law",
        client: "Aditya Law Firm",
        region: "India",
        url: "https://aadityalegal.shop/",
        service: "Website Development",
        type: "Completed",
        description: "Professional legal website with secure content handling and trust-focused design.",
        impact: "Credible and secure online legal presence.",
        technologies: ["WordPress", "Custom CSS", "Secure Forms"],
        stages: ["Design Review", "Secure Data Flow Plan", "Final Launch"],
        deliverables: [
            "Professional legal website",
            "Secure content handling",
            "Trust-focused interface"
        ],
        capabilities: [
            "Trust-driven UX",
            "Content Protection",
            "Local Market Expertise"
        ],
        invoices: ["GNS-INV-24-0001.pdf"]
    }
]

export const productsData = [
    {
        slug: 'flowmatch',
        name: 'FlowMatch',
        tagline: 'Workflow Discovery & Matching Engine',
        url: 'https://flowmatch.tech/',
        description: 'Find your perfect automation workflow. Describe what you want to automate and FlowMatch searches 5,000+ n8n workflows to find the closest templates for your tools and process.',
        features: ['5,000+ n8n workflow library', 'Tool & process matching', 'Instant template discovery'],
        status: 'Live Product',
        icon: 'workflow'
    },
    {
        slug: 'instademox',
        name: 'InstaDemoX',
        tagline: 'Next-Gen AI Website Builder',
        url: 'https://instademox.space/',
        description: 'We already designed your website. Just tell us your business name — InstaDemoX generates a complete, personalized website instantly with AI.',
        features: ['AI-generated websites in seconds', 'Business-name-driven builds', 'Editable live previews'],
        status: 'Live Product',
        icon: 'sparkles'
    },
    {
        slug: 'launchwise',
        name: 'LaunchWise',
        tagline: 'Student Careers & Perks Platform',
        url: 'https://launchwise.tech/',
        description: 'Everything students need to launch their career. LaunchWise brings verified jobs, internships, exclusive student discounts, AI tools, and cloud credits together in one trusted platform used by 50,000+ students.',
        features: ['Verified jobs & internships board', '1,500+ verified student offers across 250+ brands', 'AI tools, cloud credits & learning resources', 'Trusted by 50,000+ students globally'],
        status: 'Live Product',
        icon: 'graduation'
    },
    {
        slug: 'pixopdf',
        name: 'PixoPDF',
        tagline: 'Privacy-First Online PDF Tools',
        url: 'https://pixopdf.online/',
        description: 'Free online PDF toolkit that processes files entirely in your browser. Merge, split, compress, edit, sign and convert PDFs with zero uploads, no signup, and no watermarks.',
        features: ['34 free PDF tools in one place', '100% browser processing — files never leave your device', 'No signup, no watermarks', 'Merge, split, compress, edit, sign & convert'],
        status: 'Live Product',
        icon: 'file'
    },
    {
        slug: 'automation',
        name: 'Automation Development',
        tagline: 'We Also Develop Automation',
        url: '/contact',
        description: 'Beyond our products, ProgVision engineers custom automation: business workflows, n8n integrations, AI agents, and system integrations that remove manual work and accelerate growth.',
        features: ['Workflow & process automation (n8n)', 'AI agents & intelligent routing', 'CRM, email & system integrations', 'Custom automation consulting'],
        status: 'Custom Service',
        icon: 'bot'
    }
]

export const careersData = [
    {
        slug: "full-stack-app-developer",
        title: "Full Stack & App Developer",
        type: "Full-time",
        category: "Engineering",
        experience: "Fresher / Final Year",
        location: "Remote / Hybrid",
        isClosed: true,
        description: "Zero experience required. We are looking for eager learners who want to become Full Stack & App Developers. Final year students are welcome.",
        responsibilities: [
            "Learn to build scalable web applications using Next.js/React and Node.js.",
            "Assist in building mobile apps using React Native.",
            "Work on database schemas under guidance.",
            "Write clean code and learn industry best practices.",
            "Ensure application security and performance best practices."
        ],
        requirements: [
            "No prior experience required.",
            "Basic understanding of JavaScript, React, or Node.js.",
            "Passion for coding and willingness to learn.",
            "Final year student or fresh graduate.",
            "Problem-solving mindset."
        ]
    },
    {
        slug: "web-security-architect",
        title: "Web Security Architect",
        type: "Full-time",
        category: "Security",
        experience: "Fresher / Final Year",
        location: "Remote",
        isClosed: true,
        description: "Zero experience needed. If you are passionate about cybersecurity, we will train you to become a Web Security Architect.",
        responsibilities: [
            "Learn to conduct security assessments and penetration testing.",
            "Study secure access controls and data protection.",
            "Monitor security logs under supervision.",
            "Assist in code reviews for security flaws.",
            "Stay curious about the latest threats."
        ],
        requirements: [
            "No experience required.",
            "Basic knowledge of networking or web security concepts.",
            "Interest in OWASP Top 10 and ethical hacking.",
            "Relevant certifications (CEH) are a plus but not mandatory.",
            "Strong desire to learn cybersecurity."
        ]
    },
    {
        slug: "digital-marketer",
        title: "Digital Marketer",
        type: "Full-time",
        category: "Marketing",
        experience: "Fresher / Final Year",
        location: "Remote",
        description: "No experience needed. We are looking for creative minds to join our Digital Marketing team. Fresh graduates and students are welcome.",
        responsibilities: [
            "Assist in executing digital marketing strategies.",
            "Help manage social media profiles (LinkedIn, Twitter, Instagram).",
            "Draft engaging content for posts and blogs.",
            "Learn to analyze campaign performance metrics.",
            " bring fresh, creative ideas to the table."
        ],
        requirements: [
            "No prior experience required.",
            "Basic understanding of social media platforms.",
            "Good written and verbal communication skills.",
            "Creativity and willingness to experiment.",
            "Eagerness to learn SEO and marketing tools."
        ]
    },
    {
        slug: "business-development-executive",
        title: "Business Development Executive (BDE) ⭐ Highest Priority",
        type: "Full-time",
        category: "Business",
        experience: "Fresher / Experienced",
        location: "Remote (100%)",
        description: "High-priority role focused on identifying potential clients, executing targeted outreach campaigns, and scheduling strategic meetings with prospective leads to drive our growth.",
        responsibilities: [
            "Identify and engage potential clients on LinkedIn, Upwork, Fiverr, Clutch, and other directories.",
            "Send personalized outreach messages and cold emails.",
            "Schedule meetings for the engineering and management teams.",
            "Guide prospects through the sales pipeline with regular, timely follow-ups."
        ],
        requirements: [
            "Eligibility: Open to both freshers and experienced candidates with a passion for sales and technology.",
            "Language Skills: Excellent verbal and written communication in English and local regional languages.",
            "Salary Package: ₹3,000,000 to ₹6,000,000 (3 to 6 LPA) based on performance & incentives (minimal targets).",
            "Training: Includes a mandatory 7 Days Paid Training period to get onboarded with our technical solutions.",
            "Self-motivated, target-driven, and comfortable with cold outreach."
        ]
    },
    {
        slug: "lead-generation-specialist",
        title: "Lead Generation Specialist",
        type: "Full-time",
        category: "Business",
        experience: "Fresher / Experienced",
        location: "Remote (100%)",
        description: "Focus on building prospect databases, collecting high-quality contact details, and researching companies needing website development, app development, cybersecurity, or digital marketing services.",
        responsibilities: [
            "Build and verify high-quality prospect databases.",
            "Collect verified emails, LinkedIn profiles, and company details.",
            "Maintain CRM sheets cleanly.",
            "Research companies needing websites, apps, cybersecurity, or digital marketing services."
        ],
        requirements: [
            "Eligibility: Graduate in any discipline (B.Tech, BBA, BSC, etc.). Freshers with strong research skills are welcome.",
            "Language Skills: Good communication in English and local languages.",
            "Salary Package: ₹3,000,000 to ₹6,000,000 (3 to 6 LPA) based on performance & incentives.",
            "Training: 7 Days Paid Training provided.",
            "Excellent web research, data mining, and familiarity with spreadsheets or CRM tools."
        ]
    },
    {
        slug: "sales-intern",
        title: "Sales Intern",
        type: "Internship",
        category: "Business",
        experience: "Student / Fresh Graduate",
        location: "Remote (100%)",
        description: "Kickstart your career in sales! Support our core BDE team with outreach campaigns, manage follow-ups, handle direct communications, and update lead tracking pipelines.",
        responsibilities: [
            "Conduct cold calling to potential leads and businesses.",
            "Perform WhatsApp outreach and follow-up messaging.",
            "Provide regular updates to CRM sheets.",
            "Support BDEs to reduce manual tasks and optimize the sales pipeline."
        ],
        requirements: [
            "Eligibility: Final year students or fresh graduates looking for hands-on business development experience.",
            "Language Skills: Good fluency in English and local languages.",
            "Stipend: ₹10,000 fixed monthly stipend.",
            "Training: 7 Days Paid Training included.",
            "Enthusiastic attitude, quick learner, and strong persistence."
        ]
    },
    {
        slug: "business-development-associate",
        title: "Business Development Associate (BDA)",
        type: "Full-time",
        category: "Business",
        experience: "Fresher / Experienced",
        location: "Remote (100%)",
        description: "Take charge of late-stage lead conversions. Meet with prospects, discuss technical proposals, negotiate pricing, close deals, and upsell premium services to grow client accounts.",
        responsibilities: [
            "Conduct client meetings and present tailored digital solutions.",
            "Pitch and negotiate proposal terms.",
            "Close deals and secure long-term client partnerships.",
            "Upsell additional services (security audits, app maintenance, marketing packages)."
        ],
        requirements: [
            "Eligibility: Prior client-facing sales experience or exceptional business communication skills.",
            "Language Skills: Professional fluency in English and local languages.",
            "Salary Package: ₹3,000,000 to ₹6,000,000 (3 to 6 LPA) based on performance & incentives.",
            "Training: 7 Days Paid Training provided.",
            "Strong negotiation, relationship building, and basic technical project understanding."
        ]
    },
    {
        slug: "web-dev-intern",
        title: "Web Development Intern",
        type: "Internship",
        category: "Engineering",
        experience: "Fresh Graduate",
        location: "Remote",
        isClosed: true,
        description: "Kickstart your career with our Web Development Internship. You will work alongside experienced developers, learning modern web technologies and contributing to real-world projects.",
        responsibilities: [
            "Assist in developing UI components using React/Next.js.",
            "Fix bugs and improve code quality.",
            "Collaborate with the team on new feature implementations.",
            "Participate in code reviews and learning sessions.",
            "Document technical processes."
        ],
        requirements: [
            "Final year student or fresh graduate in CS/IT or related field.",
            "Basic understanding of HTML, CSS, and JavaScript.",
            "Familiarity with React is a plus.",
            "Eagerness to learn and ability to work in a team.",
            "Strong communication skills."
        ]
    },
    {
        slug: "app-dev-intern",
        title: "App Development Intern",
        type: "Internship",
        category: "Engineering",
        experience: "Fresh Graduate",
        location: "Remote",
        isClosed: true,
        description: "Explore the world of mobile apps with our App Development Internship. Gain hands-on experience in building cross-platform applications.",
        responsibilities: [
            "Support the development of mobile features using React Native.",
            "Test applications on different devices and report issues.",
            "Assist in optimizing app performance.",
            "Learn mobile development best practices.",
            "Contribute to project documentation."
        ],
        requirements: [
            "Final year student or fresh graduate interested in mobile development.",
            "Knowledge of JavaScript basics.",
            "Interest in React Native or mobile frameworks.",
            "Basic problem-solving skills.",
            "Proactive attitude and willingness to learn."
        ]
    }
]
