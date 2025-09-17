// Dynamic Deal Data - All data sourced from various APIs
// This structure represents the consolidated response from multiple API endpoints

export const dealData = {
  // Basic company information - Source: /api/companies/{companyId}/basic-info
  basicInfo: {
    id: "comp_001",
    name: "VentureLens Analytics",
    description: "AI-powered investment analytics platform that transforms complex financial data into actionable insights for venture capital firms and institutional investors.",
    founded: "2019",
    headquarters: "San Francisco, CA",
    sector: "fintech",
    stage: "series-a",
    employees: 85,
    valuation: "$45M",
    growth: "+120%",
    website: "https://venturelens.ai",
    logo: "/logos/venturelens.png"
  },

  // Financial metrics - Source: /api/companies/{companyId}/financial-metrics
  metrics: {
    revenue: "$12M", // Annual Recurring Revenue
    customers: "1,250+", // Total active customers
    burn: "$850K", // Monthly burn rate
    runway: "18 months", // Cash runway at current burn
    funding: "$23M", // Total funding raised to date
    grossMargin: "78%", // Gross profit margin
    cac: "$1,250", // Customer Acquisition Cost
    ltv: "$18,500", // Customer Lifetime Value
    churnRate: "3.2%", // Monthly customer churn rate
    nps: 67, // Net Promoter Score
    mrr: "$1M", // Monthly Recurring Revenue
    arr_growth: "145%" // Annual Recurring Revenue growth
  },

  // Financial time series data - Source: /api/companies/{companyId}/financials/time-series
  financials: {
    labels: ["2021", "2022", "2023", "2024", "2025 (Proj)"],
    revenue: [2.1, 4.8, 8.2, 12.0, 18.5], // Revenue in millions
    expenses: [3.2, 5.1, 7.8, 10.2, 14.1], // Operating expenses in millions
    profit: [-1.1, -0.3, 0.4, 1.8, 4.4], // Net profit/loss in millions
    customers: [125, 380, 750, 1250, 2100], // Customer count over time
    funding_rounds: [
      { year: "2021", amount: 3.5, type: "Seed", investors: ["AngelList", "Techstars"] },
      { year: "2022", amount: 8.0, type: "Series A", investors: ["Sequoia Capital", "a16z"] },
      { year: "2023", amount: 12.0, type: "Series A Extension", investors: ["Sequoia Capital"] }
    ]
  },

  // Team information - Source: /api/companies/{companyId}/team
  team: [
    {
      id: "tm_001",
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      background: "Former VP of Product at Goldman Sachs with 12 years in financial technology. MBA from Stanford, led 3 successful fintech exits.",
      linkedin: "https://linkedin.com/in/sarahchen",
      equity: 35,
      years_experience: 12
    },
    {
      id: "tm_002", 
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      background: "Ex-Principal Engineer at Stripe, built scalable payment systems for 10M+ users. MS Computer Science from MIT.",
      linkedin: "https://linkedin.com/in/mrodriguez",
      equity: 30,
      years_experience: 10
    },
    {
      id: "tm_003",
      name: "Dr. Emily Watson",
      role: "Chief Data Scientist",
      background: "Former Head of AI at JPMorgan Chase, PhD in Machine Learning from Carnegie Mellon. Published 15+ papers on financial ML.",
      linkedin: "https://linkedin.com/in/emilywatson",
      equity: 8,
      years_experience: 8
    }
  ],

  // Equity distribution - Source: /api/companies/{companyId}/cap-table
  equity: {
    founders: 65,
    employees: 15,
    investors_previous: 12,
    reserved_future: 8,
    breakdown: [
      { category: "Founders", percentage: 65, color: "#0f172a" },
      { category: "Employee Stock Options", percentage: 15, color: "#fbbf24" },
      { category: "Investors (Previous Rounds)", percentage: 12, color: "#3b82f6" },
      { category: "Reserved for Future Funding", percentage: 8, color: "#10b981" }
    ]
  },

  // Market analysis data - Source: /api/market/{sector}/analysis
  market: {
    tam: "$12.5B", // Total Addressable Market
    sam: "$3.2B", // Serviceable Addressable Market
    som: "$450M", // Serviceable Obtainable Market
    growth_rate: "+15.3%", // Market CAGR
    market_share: "4.2%", // Current market share
    target_segment: "Mid-market enterprises with 100-1000 employees requiring scalable financial analytics solutions",
    trends: [
      "Digital transformation acceleration in financial services",
      "Remote work driving demand for cloud-based analytics",
      "Increased regulatory compliance requirements",
      "Growing need for real-time financial insights"
    ],
    problem_statement: "Traditional financial analytics tools are fragmented, expensive, and difficult to integrate, leaving investment firms with inefficient decision-making processes and limited real-time insights."
  },

  // Product information - Source: /api/companies/{companyId}/product
  product: {
    name: "VentureLens Analytics Platform",
    description: "An integrated AI-powered platform that transforms raw financial data into actionable investment insights through advanced machine learning, real-time analytics, and seamless integration with existing investment workflows.",
    features: [
      "AI-powered deal sourcing and screening",
      "Real-time portfolio performance analytics", 
      "Automated due diligence report generation",
      "Risk assessment and scenario modeling",
      "Integration with 50+ data sources",
      "Mobile-first responsive design"
    ],
    competitive_advantages: [
      "50% faster deal analysis than traditional methods",
      "30% more accurate risk predictions using proprietary ML models",
      "99.9% uptime with enterprise-grade infrastructure",
      "24/7 customer success team support"
    ],
    development_stage: "Production Ready",
    technology_stack: ["Python", "React", "PostgreSQL", "AWS", "TensorFlow", "Docker"],
    integrations: ["Salesforce", "HubSpot", "PitchBook", "Crunchbase", "Bloomberg Terminal"]
  },

  // Competitor analysis - Source: /api/market/{sector}/competitors
  competitors: [
    {
      id: "comp_001",
      name: "PitchBook Analytics Pro",
      funding: "$45M",
      valuation: "$180M", 
      customers: "2,500+",
      growth: "+85%",
      market_share: "8.3%",
      founded: "2016",
      strengths: ["Established brand", "Large dataset", "Enterprise partnerships"],
      weaknesses: ["Complex UI", "High pricing", "Slow innovation cycle"]
    },
    {
      id: "comp_002",
      name: "Crunchbase Intelligence",
      funding: "$120M",
      valuation: "$500M",
      customers: "8,000+", 
      growth: "+62%",
      market_share: "15.8%",
      founded: "2014",
      strengths: ["Market leader", "Comprehensive data", "Global presence"],
      weaknesses: ["Legacy technology", "Limited AI features", "High customer churn"]
    },
    {
      id: "comp_003",
      name: "CB Insights Platform",
      funding: "$28M",
      valuation: "$150M",
      customers: "1,800+",
      growth: "+95%",
      market_share: "6.1%", 
      founded: "2017",
      strengths: ["Strong growth", "Modern UI", "Good customer satisfaction"],
      weaknesses: ["Limited enterprise features", "Smaller team", "Geographic limitations"]
    }
  ],

  // Risk analysis - Source: /api/companies/{companyId}/risk-assessment  
  risks: {
    market_risks: [
      {
        type: "Market Saturation",
        severity: "Medium",
        probability: "High",
        description: "Increased competition from established players entering the space",
        mitigation: "Focus on niche markets and superior customer experience to maintain differentiation"
      },
      {
        type: "Economic Downturn", 
        severity: "High",
        probability: "Medium",
        description: "Reduced customer spending during economic recession affecting subscription renewals",
        mitigation: "Diversified revenue streams and cost-efficient operations with flexible pricing models"
      }
    ],
    operational_risks: [
      {
        type: "Key Person Dependency",
        severity: "High", 
        probability: "Medium",
        description: "Heavy reliance on founder expertise and relationships",
        mitigation: "Building strong management team, succession planning, and knowledge documentation"
      },
      {
        type: "Technology Risks",
        severity: "Medium",
        probability: "Medium", 
        description: "Rapid technological changes making current platform obsolete",
        mitigation: "Continuous R&D investment, agile development practices, and technology partnerships"
      }
    ],
    financial_risks: [
      {
        type: "Cash Flow",
        severity: "Medium",
        probability: "Low",
        description: "18 months runway requires successful next funding round",
        impact: "Need to raise Series B within 12 months to maintain growth trajectory"
      },
      {
        type: "Customer Concentration", 
        severity: "Medium",
        probability: "Medium",
        description: "Top 5 customers represent 35% of total revenue",
        impact: "Loss of major customer could significantly affect financial performance"
      }
    ]
  },

  // Exit strategy data - Source: /api/companies/{companyId}/exit-analysis
  exit: {
    timeline: "5-7 Years",
    projected_valuation: {
      low: "$800M",
      high: "$1.2B",
      base_case: "$950M"
    },
    strategies: [
      "Strategic acquisition by enterprise software leader",
      "IPO on major stock exchange (NASDAQ)",
      "Private equity buyout by growth-focused fund",
      "Management buyout with founder retention"
    ],
    potential_acquirers: {
      strategic: [
        { name: "Microsoft", rationale: "Azure integration and enterprise sales", likelihood: "High" },
        { name: "Salesforce", rationale: "CRM and analytics synergy", likelihood: "Medium" },
        { name: "Oracle", rationale: "Database and enterprise software", likelihood: "Medium" }
      ],
      financial: [
        { name: "Vista Equity Partners", rationale: "SaaS expertise and growth capital", likelihood: "High" },
        { name: "Thoma Bravo", rationale: "Enterprise software focus", likelihood: "Medium" },
        { name: "Insight Partners", rationale: "Fintech specialization", likelihood: "High" }
      ]
    },
    market_comparables: {
      saas_multiples: "8-12x Revenue",
      growth_premium: "+25-40%",
      expected_irr: "25-35%"
    }
  },

  // Legal and compliance - Source: /api/companies/{companyId}/legal
  legal: {
    incorporation: {
      jurisdiction: "Delaware, USA",
      entity_type: "C-Corporation", 
      incorporation_date: "2019-03-15"
    },
    intellectual_property: {
      patents_filed: 12,
      patents_granted: 4,
      trademarks: 8,
      copyrights: 25,
      trade_secrets: "Proprietary ML algorithms and data processing methodologies"
    },
    compliance: {
      gdpr: true,
      ccpa: true,
      soc2_type2: true,
      iso27001: true,
      pci_dss: false
    },
    legal_structure: {
      authorized_shares: 10000000,
      outstanding_shares: 7500000,
      option_pool: "15%",
      board_seats: 7,
      investor_rights: ["Board observer rights", "Pro-rata participation", "Anti-dilution protection"]
    },
    key_documents: [
      { type: "Articles of Incorporation", status: "Current", last_updated: "2024-01-15" },
      { type: "Shareholder Agreements", status: "Updated", last_updated: "2024-06-20" },
      { type: "Employment Contracts", status: "Compliant", last_updated: "2024-03-10" },
      { type: "IP Assignment Agreements", status: "Complete", last_updated: "2023-12-05" },
      { type: "Board Resolutions", status: "Filed", last_updated: "2024-08-30" },
      { type: "Regulatory Filings", status: "Current", last_updated: "2024-09-01" }
    ]
  },

  // Devil's advocate analysis - Source: /api/companies/{companyId}/critical-analysis
  devils_advocate: {
    growth_challenges: [
      {
        claim: "120% YoY Growth",
        counter_arguments: [
          "Growth from small base of only 1,250 customers",
          "Unsustainable burn rate of $850K monthly",
          "Growth may be artificially inflated by promotional pricing",
          "Market conditions favoring all competitors, not just this company"
        ]
      },
      {
        claim: "Market Leading Position", 
        counter_arguments: [
          "Only 4.2% market share vs Crunchbase's 15.8%",
          "Definition of 'leading' unclear and possibly misleading",
          "Market position vulnerable to well-funded competitors",
          "Limited geographic presence compared to global players"
        ]
      }
    ],
    financial_challenges: [
      {
        claim: "Superior Unit Economics",
        counter_arguments: [
          "LTV calculations based on limited customer lifecycle data", 
          "CAC may increase significantly in competitive markets",
          "78% gross margin may be unsustainable at scale",
          "Hidden costs not reflected in current unit economics"
        ]
      },
      {
        claim: "Proprietary Technology Advantage",
        counter_arguments: [
          "Technology stack built on common frameworks (React, Python)",
          "Only 4 patents granted out of 12 filed - weak IP protection", 
          "Large tech companies can replicate features quickly",
          "No significant technical barriers to entry"
        ]
      }
    ],
    critical_risks: [
      {
        factor: "Team Dependency Risk",
        description: "Heavy reliance on 3 co-founders with no clear succession plan"
      },
      {
        factor: "Customer Concentration", 
        description: "Top 10 customers likely represent majority of revenue"
      },
      {
        factor: "Market Timing",
        description: "Current growth may be timing-dependent on favorable conditions"
      }
    ],
    stress_tests: [
      "Economic recession reducing customer budgets by 40%",
      "Major competitor launching similar product with 50% lower pricing", 
      "Key founder departure during critical growth phase",
      "Regulatory changes affecting core business model"
    ]
  },

  // Investment summary - Source: /api/companies/{companyId}/investment-summary
  investment_summary: {
    recommendation: "STRONG BUY",
    risk_rating: "Medium",
    return_potential: "High", 
    time_horizon: "3-5 years",
    key_highlights: [
      "Exceptional 120% YoY revenue growth in large market",
      "Strong unit economics with 78% gross margin",
      "Experienced team with proven track record",
      "Large $12.5B TAM with significant growth opportunity"
    ],
    investment_thesis: "VentureLens represents a compelling investment opportunity in the rapidly growing fintech analytics space. The company has demonstrated strong product-market fit with exceptional growth metrics and superior unit economics. The experienced team, led by former Goldman Sachs and Stripe executives, has the expertise to scale the business and capture significant market share in a large, underserved market.",
    next_steps: [
      "Complete technical due diligence on AI/ML capabilities",
      "Validate customer references and satisfaction scores", 
      "Review detailed financial projections and cash flow models",
      "Assess competitive positioning and defensibility"
    ]
  }
};

// API Endpoint Mapping - For reference in actual implementation
export const apiEndpoints = {
  basicInfo: "/api/companies/{companyId}/basic-info",
  metrics: "/api/companies/{companyId}/financial-metrics", 
  financials: "/api/companies/{companyId}/financials/time-series",
  team: "/api/companies/{companyId}/team",
  equity: "/api/companies/{companyId}/cap-table",
  market: "/api/market/{sector}/analysis",
  product: "/api/companies/{companyId}/product",
  competitors: "/api/market/{sector}/competitors", 
  risks: "/api/companies/{companyId}/risk-assessment",
  exit: "/api/companies/{companyId}/exit-analysis",
  legal: "/api/companies/{companyId}/legal",
  devils_advocate: "/api/companies/{companyId}/critical-analysis",
  investment_summary: "/api/companies/{companyId}/investment-summary"
};
