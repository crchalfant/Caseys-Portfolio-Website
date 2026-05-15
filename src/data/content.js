export const content = {
  nav: {
    name: "Home",
  },

  hero: {
    name: "Casey Chalfant",
    tagline: "Bridging Technology and Product",
  },

  about: {
    headline: "Hello! I'm Glad You're Here!",
    bio: [
      "I'm a first-generation college graduate born in rural North Carolina, now a product leader based in the Raleigh area. Early in my career at Deutsche Bank I had the opportunity to work as a QA tester, engineer, and business analyst, which gave me a unique perspective on the full software development lifecycle. That background means I can write requirements that developers and QAs actually need, communicate technical details to non-technical stakeholders, and spot problems early before they become expensive.",
    ],
    bioHeading: "How I got to where I am today",
    sections: [
      {
        heading: "What I'm working on now",
        text: "At Jenius Bank I played a hybrid Product Manager and Product Owner role, owning the Authentication, Dashboard, and Account Onboarding customer journeys from ideation all the way through delivery. I'm currently helping wind down operations there, and it's an odd feeling closing something you built from the ground up, but I'm excited about what comes next.",
      },
      {
        heading: "What's on my bucket list:",
        items: [
          "Hike through the entirety of the 2,198 miles of the Appalachian Trail.",
          "Travel at least once to every continent in the world.",
          "Attend a Carolina Hurricanes away game at every NHL stadium.",
        ],
      },
    ],
    openTo: "Product Manager and Product Owner positions. I'm only considering opportunities in a remote environment or the Raleigh, NC area.",
    cards: [
      {
        icon: "Briefcase",
        title: "Resume",
        description: "My work history and how I operate",
        href: "#resume",
      },
      {
        icon: "Wrench",
        title: "Products",
        description: "Career works and personal projects",
        href: "#products",
      },
    ],
  },

  resume: {
    heading: "Experience",
    descriptor: "12+ years across digital banking, fintech, and regulated environments.",
    experience: {
      heading: "Work History",
      roles: [
        {
          company: "Jenius Bank",
          period: "February 2022 – Present",
          title: "Senior Product Manager",
          description: "Launched a digital banking loans and deposits platform from concept to market, scaling from 56K to 225K customers in a regulated environment.",
          bullets: [
            "Launched a digital banking loans and deposits platform from concept to market, shaping key user journeys and workflows across authentication, onboarding, dashboard, and account management on web and mobile",
            "Led end-to-end design, development, and agile delivery in a regulated environment, partnering with Legal, Risk, and Compliance to scale the platform from 56K to 225K customers, driving 300%+ growth",
            "Reduced operating costs by leveraging behavior analysis and customer feedback to remove friction in the login customer experience, resulting in $1.3M in annual operational savings and a 37% reduction in support calls",
            "Defined KPIs and monitored post-launch performance using Google Analytics, identifying abandonment drivers in authentication and onboarding, increasing customer satisfaction by 18% and conversion rate by 24%",
            "Elevated delivery team quality and execution by establishing clearer acceptance standards and clarifying requirements across Development and QA, reducing critical defects by 19% and production incidents by 60%",
            "Leveraged AI tools like Claude and Copilot to break down customer feedback and behavioral data into wireframes and requirements cutting the time from discovery to ready for engineering in half",
          ],
        },
        {
          company: "RBC Bank",
          period: "May 2020 – February 2022",
          title: "Digital Product Manager",
          description: "Owned product strategy and roadmap for a net-new digital banking initiative, defining core banking capabilities to align the platform vision with business goals.",
          bullets: [
            "Owned product strategy and roadmap for a net-new digital banking initiative, defining core banking capabilities to align the platform vision with business goals",
            "Authored 20+ product requirement documents and 300+ user stories with acceptance criteria using Jira and Confluence, managing stakeholders and vendors to deliver requirements on time and with low defect rates",
            "Managed a cross-functional team of 8 designers, engineers, and QA partners to release high-impact, scalable features, reducing customer complaints by 30% YoY",
            "Led product discovery with Research and Voice of the Customer teams, uncovered customer pain points, and designed a 6-month prioritized backlog aligned with strategic initiatives",
          ],
        },
        {
          company: "First Citizens Bank",
          period: "August 2019 – May 2020",
          title: "Business Systems Analyst II (Contract)",
          description: "Established testing strategy for SOAP-to-REST API migrations and developed data mapping documents to support migration efforts.",
          bullets: [
            "Established testing strategy for SOAP-to-REST API migrations, creating 80+ test cases and partnering with product teams to drive cross-functional buy-in on feasibility and tradeoffs",
            "Developed 15+ source-to-target data mapping documents to support migration efforts, which contributed to a 30–40% improvement in average API response times",
          ],
        },
        {
          company: "Deutsche Bank",
          period: "August 2014 – August 2019",
          title: "Business Analyst",
          description: "Supported a large-scale trade processing and settlements platform handling 500,000+ trades daily, ensuring compliance with FCA, FINRA, and SEC regulations.",
          bullets: [
            "Supported a large-scale trade processing and settlements platform handling 500,000+ trades daily, ensuring compliance with FCA, FINRA, and SEC regulations",
            "Leveraged SQL and data analysis to diagnose system and data quality issues, producing 150+ ad hoc regulatory reports to support stakeholder requests and regulatory submissions",
            "Produced 400+ user stories by breaking down high-level business requirements into functional requirements, while owning UAT strategy and execution",
          ],
        },
      ],
    },
    education: {
      heading: "Education",
      school: "Appalachian State University",
      degree: "Bachelor of Science in Business Administration: Computer Information Systems",
      year: "August 2012 – May 2014",
      location: "Boone, NC",
    },
    skills: {
      heading: "My Skillset",
      columns: [
        {
          label: "STRONG",
          items: [
            "Stakeholder Management",
            "Digital Banking",
            "Digital Identity & Authentication",
            "Digital Onboarding",
            "Core Banking",
            "Roadmap Strategy",
            "Product Requirements Definition",
            "Sprint Planning",
            "Backlog Management",
            "User Story Writing",
            "Acceptance Criteria",
            "UAT Leadership",
            "Data Analysis",
            "Customer Journey Mapping",
            "Product Strategy",
            "KYC & AML Compliance",
          ],
        },
        {
          label: "MODERATE",
          items: [
            "SQL",
            "Vendor Management",
            "Cost Benefit Analysis",
            "User Research",
            "A/B Testing",
            "KPI Definition & Monitoring",
            "Prototyping with AI Tools",
            "API Integration",
            "Vibe Coding",
          ],
        },
        {
          label: "SKILLS I'M IMPROVING",
          items: [
            "Payments Rails & Infrastructure",
            "Direct Report Management",
            "AI-Assisted Product Workflows",
            "Web and Mobile Development",
            "UX/UI Design",
            "Mentoring",
            "Go-to-Market Strategy",
            "Financial Modeling",
            "Pricing Strategies",
          ],
        },
      ],
    },
  },

  project: {
    items: [
      {
        heading: "Jenius Bank - Authentication User Journey",
        techLabel: "USER EXPERIENCE EXAMPLES",
        type: "career",
        description: "One of my core ownership areas at Jenius Bank was Identity and Authentication, specifically the customer login experience across web and mobile and the full password reset flow. I owned this end to end, which meant I had a hand in everything you see on screen: the copy, the design flow, and every user experience decision along the way. One of the details I'm most proud of is the dynamic green checkboxes on the password reset flow, which came directly from customer research and support call analysis showing that users didn't understand what made a valid password. Making those requirements visible in real time was a small change that had an outsized impact on customer frustration and support volume.",
        tabs: [
          {
            label: "Web Login",
            images: [
              { src: "/web-login-1.webp", alt: "Jenius Bank web login screen 1" },
              { src: "/web-login-2.webp", alt: "Jenius Bank web login screen 2" },
              { src: "/web-login-3.webp", alt: "Jenius Bank web login screen 3" },
              { src: "/web-login-4.webp", alt: "Jenius Bank web login screen 4" },
            ],
          },
          {
            label: "Mobile Login",
            images: [
              { src: "/mobile-login-1.webp", alt: "Jenius Bank mobile login screen 1" },
              { src: "/mobile-login-2.webp", alt: "Jenius Bank mobile login screen 2" },
              { src: "/mobile-login-4.webp", alt: "Jenius Bank mobile login screen 4" },
              { src: "/mobile-login-3.webp", alt: "Jenius Bank mobile login screen 3" },
            ],
          },
          {
            label: "Password Reset",
            images: [
              { src: "/password-reset-1.webp", alt: "Jenius Bank password reset screen 1" },
              { src: "/password-reset-2.webp", alt: "Jenius Bank password reset screen 2" },
              { src: "/password-reset-3.webp", alt: "Jenius Bank password reset screen 3" },
              { src: "/password-reset-4.webp", alt: "Jenius Bank password reset screen 4" },
            ],
          },
        ],
      },
      {
        heading: "Job Search Autopilot",
        techLabel: "PYTHON / CLAUDE AI",
        type: "github",
        description: "I built this tool because I was tired of scrolling through multiple job boards every morning. The Autopilot runs automatically every day, searches 13+ job sources, rates every listing using Claude AI, and emails you a curated list of roles that match your background, typically 30 to 50 jobs daily. It skips roles you're not qualified for so you spend your time focusing on the right jobs. This was my first vibe coding project, and I built it with beginners in mind - it comes with prompts you can customize to fit your specific job search.",
        image: "/autopilot-dashboard.webp",
        imageAlt: "Job Search Autopilot dashboard showing job tracking pipeline",
        link: { label: "GitHub", href: "https://github.com/crchalfant/Job-Search-Autopilot" },
      },
      {
        heading: "Tailwind",
        techLabel: "NEXT.JS / CLAUDE AI",
        type: "github",
        description: "A two-minute economic briefing built for small business owners. Pick your sector and get current market conditions, recent industry news with sentiment analysis, and an AI-generated summary that ties it all together. Built with real-time market data and Claude-generated insights, Tailwind was designed as a proof of concept for the digital banking space, a feature a bank could embed directly into the small business experience to help their customers make smarter decisions.",
        image: "/tailwind-dashboard.webp",
        imageAlt: "Tailwind economic intelligence dashboard showing sector performance",
        link: { label: "GitHub", href: "https://github.com/crchalfant/Tailwind" },
      },
    ],
  },

  contact: {
    linkedin: "https://www.linkedin.com/in/casey-chalfant/",
    github: "https://github.com/crchalfant",
    location: "Raleigh, NC",
  },
};
