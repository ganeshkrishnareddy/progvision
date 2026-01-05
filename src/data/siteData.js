export const siteData = {
    name: "ProgVision",
    description: "Engineering Elite Digital Products with Security-First Mindset",
    email: "progvisionsite@gmail.com",
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
    { name: 'Our Work', path: '/work' },
    { name: 'Insights', path: '/blog' },
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
        ]
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
        ]
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
        ]
    },
    {
        slug: "pixelmorph",
        client: "PixelMorph",
        region: "Australia",
        url: "https://pixelmorph.com.au/home/",
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
        ]
    },
    {
        slug: "technova",
        client: "TechNova AG",
        region: "Europe",
        url: "https://www.technovaag.com/",
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
        ]
    },
    {
        slug: "weblink-solutions",
        client: "WebLink Solutions",
        region: "Asia",
        url: "https://www.weblinksolutions.in/",
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
        ]
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
        ]
    },
    {
        slug: "aditya-law",
        client: "Aditya Law Firm",
        region: "India",
        url: "#",
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
        ]
    }
]
