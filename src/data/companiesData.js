// All Companies Data - Dynamic JSON Structure
// This contains all companies data for the investment platform

export const companiesData = [
  {
    // Company 1 - VentureLens Analytics
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
      logo: "📊"
    },
    metrics: {
      revenue: "$12M",
      customers: "1,250+",
      burn: "$850K",
      runway: "18 months",
      funding: "$23M",
      grossMargin: "78%",
      cac: "$1,250",
      ltv: "$18,500",
      churnRate: "3.2%",
      nps: 67,
      mrr: "$1M",
      arr_growth: "145%",
      customer_satisfaction: "92%",
      technology_score: "9.2/10",
      competitor_avg_satisfaction: "87%",
      competitor_avg_tech_score: "8.5/10",
      implementation_speed_advantage: "30%",
      industry_avg_gross_margin: "68%",
      competitor_avg_churn: "8.2%",
      customer_base_difference: "3x",
      addressable_market_gap: "$2.8B",
      underserved_market_share: "35%",
      top_customer_revenue_concentration: "35%",
      expected_irr_range: "25-35%",
      established_players_market_share: "15%+",
      scale_execution_target: "10x",
      cost_leadership_advantage: "25%",
      market_leader_share: "15.8%",
      foreign_currency_revenue: "8%"
    },
    financials: {
      labels: ["2021", "2022", "2023", "2024", "2025 (Proj)"],
      revenue: [2.1, 4.8, 8.2, 12.0, 18.5],
      expenses: [3.2, 5.1, 7.8, 10.2, 14.1],
      profit: [-1.1, -0.3, 0.4, 1.8, 4.4],
      customers: [125, 380, 750, 1250, 2100]
    },
    team: [
      {
        id: "tm_001",
        name: "Sarah Chen",
        role: "CEO & Co-Founder",
        background: "Former VP of Product at Goldman Sachs with 12 years in financial technology. MBA from Stanford, led 3 successful fintech exits."
      },
      {
        id: "tm_002",
        name: "Michael Rodriguez",
        role: "CTO & Co-Founder",
        background: "Ex-Principal Engineer at Stripe, built scalable payment systems for 10M+ users. MS Computer Science from MIT."
      },
      {
        id: "tm_003",
        name: "Dr. Emily Watson",
        role: "Chief Data Scientist",
        background: "Former Head of AI at JPMorgan Chase, PhD in Machine Learning from Carnegie Mellon. Published 15+ papers on financial ML."
      }
    ],
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
    market: {
      tam: "$12.5B",
      sam: "$3.2B",
      som: "$450M",
      growth_rate: "+15.3%",
      market_share: "4.2%",
      target_segment: "Mid-market enterprises with 100-1000 employees requiring scalable financial analytics solutions",
      trends: [
        "Digital transformation acceleration in financial services",
        "Remote work driving demand for cloud-based analytics",
        "Increased regulatory compliance requirements",
        "Growing need for real-time financial insights"
      ],
      problem_statement: "Traditional financial analytics tools are fragmented, expensive, and difficult to integrate, leaving investment firms with inefficient decision-making processes and limited real-time insights."
    },
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
      development_stage: "Production Ready"
    },
    business_model: {
      revenue_type: {
        type: "Subscription-based SaaS",
        description: "Recurring monthly and annual subscriptions with enterprise licensing"
      },
      monetization_strategy: [
        "Tiered subscription plans (Starter, Professional, Enterprise)",
        "Usage-based analytics credits and data processing",
        "Professional services and custom implementation",
        "API access and white-label partnership deals"
      ],
      pricing_strategy: [
        { tier: "Starter", price: "$499/mo", description: "Small investment firms" },
        { tier: "Professional", price: "$1,299/mo", description: "Mid-market VCs" },
        { tier: "Enterprise", price: "Custom", description: "Large institutions" }
      ]
    },
    competitor: {
      direct_competitors: [
        {
          id: 1,
          name: "CompetitorX Pro",
          funding: "$45M",
          valuation: "$180M",
          customers: "1,200+",
          growth: "180% YoY",
          market_share: "15.8%"
        },
        {
          id: 2,
          name: "MarketLeader Solutions",
          funding: "$120M",
          valuation: "$500M",
          customers: "3,500+",
          growth: "95% YoY",
          market_share: "28.4%"
        },
        {
          id: 3,
          name: "InnovateFlow",
          funding: "$28M",
          valuation: "$85M",
          customers: "800+",
          growth: "220% YoY",
          market_share: "8.9%"
        }
      ],
      analysis: {
        advantages: [
          "30% faster implementation than leading competitors",
          "Superior 87% gross margin vs industry 68%",
          "Lower 2.3% churn vs competitor average 8.2%",
          "More cost-effective pricing model"
        ],
        challenges: [
          "Smaller customer base vs market leaders (3x difference)",
          "Less funding raised compared to top competitors",
          "Newer brand recognition in the market",
          "Limited enterprise-level partnerships"
        ],
        competitive_strategy: {
          differentiation_focus: "Superior user experience and faster deployment",
          cost_leadership: "25% more affordable than premium competitors",
          innovation_edge: "Next-gen AI features ahead of market"
        }
      }
    },
    devilsAdvocateAnalysis: {
      "restated_input": {
        "founder_claim": "We want to build an AI-powered financial advisor app for Gen Z to manage investments.",
        "ai_restated": "AI-powered financial advisor app for Gen Z that helps young people manage investments."
      },
      "counter_arguments": [
        {
          "point": "Gen Z users may lack trust in AI-driven financial advice.",
          "probability_validity": "High"
        },
        {
          "point": "Highly competitive landscape with established fintechs like Groww, Zerodha, Robinhood.",
          "probability_validity": "High"
        },
        {
          "point": "Regulatory constraints may prevent full automation.",
          "probability_validity": "Critical"
        },
        {
          "point": "High user acquisition costs may make profitability difficult.",
          "probability_validity": "Medium"
        }
      ],
      "risk_assessment": {
        "regulatory": {
          "description": "Strict SEBI/SEC compliance frameworks can delay go-to-market.",
          "risk_score": 9,
          "financial_impact": "Could increase operational costs by 20%",
          "trend": "Increasing"
        },
        "privacy": {
          "description": "Handling sensitive financial data poses cybersecurity risks.",
          "risk_score": 7,
          "financial_impact": "Data breaches could lead to fines and loss of trust",
          "trend": "Stable"
        },
        "market": {
          "description": "Gen Z may resist paying for subscriptions, limiting revenues.",
          "risk_score": 7,
          "financial_impact": "Revenue ceiling may cap at <40% of projections",
          "trend": "Stable"
        },
        "execution": {
          "description": "AI model reliability depends on large datasets and domain expertise.",
          "risk_score": 6,
          "financial_impact": "Could delay rollout by 12–18 months",
          "trend": "Increasing"
        },
        "overall_risk_score": 8
      },
      "alternative_perspectives": [
        {
          "strategy": "B2B2C partnerships with banks, brokers, credit unions.",
          "potential_upside": "Large"
        },
        {
          "strategy": "Focus on gamified financial literacy before advisory.",
          "potential_upside": "Medium"
        },
        {
          "strategy": "Specialize in one asset class (mutual funds or crypto).",
          "potential_upside": "Medium"
        },
        {
          "strategy": "Niche markets like student loans or gig-worker savings.",
          "potential_upside": "High"
        }
      ],
      "data_consistency_check": {
        "missing_fields": [
          "Specific asset classes (stocks, mutual funds, crypto, ETFs).",
          "Revenue model clarity.",
          "Go-to-market strategy.",
          "Compliance/licensing approach."
        ],
        "inconsistencies": [
          "Assumes Gen Z adoption will be fast without trust-building.",
          "Investments mentioned generically, no breakdown."
        ],
        "data_quality_score": 62
      },
      "data_mismatches": [
        {
          "claim": "Targeting Gen Z with subscription model",
          "issue": "Gen Z unwilling to pay for advisory apps",
          "severity": "High"
        },
        {
          "claim": "Full automation of financial advisory",
          "issue": "Regulations mandate licensed advisors",
          "severity": "Critical"
        },
        {
          "claim": "Rapid adoption expected from Gen Z",
          "issue": "Low trust in AI for financial decisions",
          "severity": "High"
        }
      ],
      "evidence_strength": {
        "supporting": [
          { "point": "Gen Z adoption of gamified apps is rising.", "confidence": "High" },
          { "point": "Mobile-first behavior aligns with financial app usage.", "confidence": "Medium" }
        ],
        "weak": [
          { "point": "Conversion rates from free to paid remain low.", "confidence": "High" },
          { "point": "Few case studies of Gen Z trusting AI in finance.", "confidence": "High" }
        ],
        "strength_score": 5,
        "distribution": { "supporting": 45, "weak": 55 }
      },
      "improvements": [
        {
          "action": "Add compliance-first design: KYC + SEBI/SEC integration.",
          "effort": "High",
          "impact": "High"
        },
        {
          "action": "Define monetization model (freemium/affiliate).",
          "effort": "Medium",
          "impact": "High"
        },
        {
          "action": "Build trust with gamification and transparent advisory.",
          "effort": "Low",
          "impact": "High"
        },
        {
          "action": "Partner with influencers and universities for adoption.",
          "effort": "Medium",
          "impact": "Medium"
        }
      ],
      "overall_suggestion": {
        "summary": "Promising idea with traction potential, but not investment-ready. Needs compliance-first design, clearer monetization, and trust-building mechanisms before scaling.",
        "confidence_score": 7,
        "investor_lens": "Proceed Cautiously",
        "red_flag_alerts": [
          "🚨 Regulatory compliance gap",
          "🚨 Monetization unclear"
        ]
      },
      "investor_questions": [
        "How do you plan to navigate SEBI/SEC regulations for automated advisory?",
        "What monetization model do you intend to pursue and why will Gen Z pay?",
        "Which asset class will you focus on first?",
        "How will you build trust with Gen Z to convert free users into paid customers?"
      ],
      "loop_hole_severity_index": 0.65
    },
    risk_factors: {
      market_saturation: {
        title: "Market Saturation",
        risk: "Increased competition from established players",
        mitigation: "Focus on niche markets and superior customer experience"
      },
      economic_downturn: {
        title: "Economic Downturn",
        risk: "Reduced customer spending during recession",
        mitigation: "Diversified revenue streams and cost-efficient operations"
      },
      key_person_dependency: {
        title: "Key Person Dependency",
        risk: "Heavy reliance on founder expertise",
        mitigation: "Building strong management team and succession planning"
      },
      technology_risks: {
        title: "Technology Risks",
        risk: "Rapid technological changes making product obsolete",
        mitigation: "Continuous R&D investment and agile development practices"
      }
    },
    exit_strategy: {
      timeline: "5-7 Years",
      timeline_description: "Projected timeline for strategic exit based on market maturity",
      potential_valuation: "$800M - $1.2B",
      valuation_description: "Based on comparable fintech transactions and growth projections",
      exit_options: [
        "Strategic acquisition by financial services giant",
        "IPO on NASDAQ or NYSE",
        "Private equity buyout from specialized tech funds",
        "Management buyout with institutional backing"
      ],
      strategic_acquirers: [
        { category: "Financial Services Giants", companies: "Goldman Sachs, JPMorgan, Blackstone, KKR" },
        { category: "Enterprise Fintech", companies: "Intuit, Fiserv, FIS, Broadridge" },
        { category: "Private Equity", companies: "Vista Equity, Thoma Bravo, General Atlantic" }
      ],
      market_multiples: {
        revenue_multiple: "6-10x Revenue",
        growth_premium: "+15-25%",
        recent_comparables: "B2B healthcare SaaS exits at 8-12x ARR"
      }
    },

    legal_compliance: {
      incorporation: {
        jurisdiction: "Delaware, USA",
        entity_type: "C-Corporation",
        incorporation_date: "2019"
      },
      intellectual_property: {
        patents_filed: "15 Patents Filed",
        patent_description: "Core AI algorithms and financial data processing methods protected",
        trademarks: "VentureLens trademark portfolio secured in 12 countries"
      },
      regulatory_compliance: [
        "GDPR Compliant (EU data protection)",
        "CCPA Compliant (California privacy)",
        "SOC 2 Type II Certified (security controls)",
        "SEC Investment Advisor compliance (financial services)",
        "ISO 27001 Certified (information security)"
      ],
      legal_structure: {
        authorized_shares: "15,000,000",
        outstanding_shares: "8,750,000",
        option_pool: "15%"
      },
      key_documents: [
        { icon: "📄", title: "Delaware Certificate of Incorporation", status: "Current" },
        { icon: "📊", title: "Series A Preferred Stock Purchase Agreement", status: "Executed" },
        { icon: "⚖️", title: "Key Employee Agreements", status: "Compliant" },
        { icon: "🔒", title: "IP Assignment and Invention Agreements", status: "Complete" },
        { icon: "📋", title: "Board of Directors Resolutions", status: "Filed" },
        { icon: "🏛️", title: "SEC Form D - Private Placement", status: "Current" }
      ]
    }
  },
  
  {
    // Company 2 - TechFlow Solutions
    basicInfo: {
      id: "comp_002",
      name: "TechFlow Solutions",
      description: "Cloud-native workflow automation platform that helps enterprises streamline their business processes through intelligent automation and seamless integrations.",
      founded: "2020",
      headquarters: "Austin, TX",
      sector: "enterprise-software",
      stage: "seed",
      employees: 42,
      valuation: "$18M",
      growth: "+180%",
      website: "https://techflow.io",
      logo: "⚙️"
    },
    metrics: {
      revenue: "$4.5M",
      customers: "680+",
      burn: "$320K",
      runway: "24 months",
      funding: "$8M",
      grossMargin: "82%",
      cac: "$890",
      ltv: "$12,400",
      churnRate: "2.8%",
      nps: 71,
      mrr: "$375K",
      arr_growth: "180%",
      customer_satisfaction: "89%",
      technology_score: "8.8/10",
      competitor_avg_satisfaction: "83%",
      competitor_avg_tech_score: "8.2/10",
      implementation_speed_advantage: "40%",
      industry_avg_gross_margin: "75%",
      competitor_avg_churn: "6.5%",
      customer_base_difference: "2x",
      addressable_market_gap: "$1.2B",
      underserved_market_share: "28%",
      top_customer_revenue_concentration: "42%",
      expected_irr_range: "30-45%",
      established_players_market_share: "12%+",
      scale_execution_target: "8x",
      cost_leadership_advantage: "35%",
      market_leader_share: "22.3%",
      foreign_currency_revenue: "15%"
    },
    financials: {
      labels: ["2021", "2022", "2023", "2024", "2025 (Proj)"],
      revenue: [0.8, 2.2, 3.8, 4.5, 8.1],
      expenses: [1.5, 2.8, 4.1, 5.2, 7.3],
      profit: [-0.7, -0.6, -0.3, -0.7, 0.8],
      customers: [45, 180, 420, 680, 1200]
    },
    team: [
      {
        id: "tm_004",
        name: "Alex Thompson",
        role: "CEO & Founder",
        background: "Former Director of Engineering at Atlassian with 10 years in enterprise software. Led teams of 50+ engineers building workflow solutions."
      },
      {
        id: "tm_005",
        name: "Lisa Park",
        role: "VP of Product",
        background: "Ex-Senior Product Manager at Slack, specialized in enterprise productivity tools. MBA from Wharton, 8 years in B2B SaaS."
      }
    ],
    equity: {
      founders: 70,
      employees: 18,
      investors_previous: 8,
      reserved_future: 4,
      breakdown: [
        { category: "Founders", percentage: 70, color: "#0f172a" },
        { category: "Employee Stock Options", percentage: 18, color: "#fbbf24" },
        { category: "Investors (Previous Rounds)", percentage: 8, color: "#3b82f6" },
        { category: "Reserved for Future Funding", percentage: 4, color: "#10b981" }
      ]
    },
    market: {
      tam: "$8.2B",
      sam: "$1.8B",
      som: "$280M",
      growth_rate: "+18.7%",
      market_share: "2.1%",
      target_segment: "Mid-market companies with 50-500 employees looking to automate manual processes",
      trends: [
        "Remote work accelerating automation adoption",
        "Digital transformation driving workflow optimization",
        "Increased focus on operational efficiency",
        "Growing demand for no-code/low-code solutions"
      ],
      problem_statement: "Manual business processes are costly, error-prone, and don't scale with growing businesses, leading to decreased productivity and increased operational overhead."
    },
    product: {
      name: "TechFlow Automation Suite",
      description: "A comprehensive workflow automation platform that enables businesses to design, deploy, and manage intelligent automated processes without extensive technical expertise.",
      features: [
        "Drag-and-drop workflow builder",
        "Pre-built automation templates",
        "Real-time process monitoring",
        "Advanced analytics and reporting",
        "API integrations with 200+ tools",
        "Mobile app for process management"
      ],
      competitive_advantages: [
        "40% faster implementation than competitors",
        "25% lower total cost of ownership",
        "No-code interface for non-technical users",
        "Best-in-class customer support"
      ],
      development_stage: "Production Ready"
    },
    business_model: {
      revenue_type: {
        type: "SaaS with Usage-Based Pricing",
        description: "Per-user monthly subscriptions with workflow execution credits"
      },
      monetization_strategy: [
        "Per-seat subscription with automation limits",
        "Premium workflow templates and connectors",
        "Custom integration development services",
        "Enterprise training and consulting packages"
      ],
      pricing_strategy: [
        { tier: "Basic", price: "$29/user/mo", description: "Small teams" },
        { tier: "Pro", price: "$99/user/mo", description: "Growing businesses" },
        { tier: "Enterprise", price: "Custom", description: "Large organizations" }
      ]
    },
    competitor: {
      direct_competitors: [
        {
          id: 1,
          name: "WorkflowMax",
          funding: "$25M",
          valuation: "$95M",
          customers: "900+",
          growth: "120% YoY",
          market_share: "22.3%"
        },
        {
          id: 2,
          name: "AutomatePro",
          funding: "$40M",
          valuation: "$150M",
          customers: "1,800+",
          growth: "85% YoY",
          market_share: "18.7%"
        }
      ],
      analysis: {
        advantages: [
          "Superior user experience with no-code interface",
          "40% faster implementation time",
          "35% more cost-effective pricing",
          "Higher customer satisfaction scores"
        ],
        challenges: [
          "Smaller customer base than established players",
          "Limited brand recognition in enterprise market",
          "Fewer integrations compared to market leaders",
          "Need more enterprise-level features"
        ],
        competitive_strategy: {
          differentiation_focus: "Ease of use and rapid deployment",
          cost_leadership: "35% more affordable with better ROI",
          innovation_edge: "AI-powered process optimization features"
        }
      }
    },
    devilsAdvocateAnalysis: {
      "restated_input": {
        "founder_claim": "We're building a cloud-native workflow automation platform for enterprises to streamline business processes.",
        "ai_restated": "Enterprise workflow automation platform that helps mid-market companies automate manual processes through intelligent cloud-native solutions."
      },
      "counter_arguments": [
        {
          "point": "Market dominated by Microsoft Power Automate, Zapier, and enterprise giants with deeper pockets.",
          "probability_validity": "Critical"
        },
        {
          "point": "Mid-market companies often lack technical expertise to implement complex automation.",
          "probability_validity": "High"
        },
        {
          "point": "ROI on automation unclear for smaller companies with limited processes.",
          "probability_validity": "High"
        },
        {
          "point": "Economic downturn could force companies to cut automation budgets first.",
          "probability_validity": "Medium"
        }
      ],
      "risk_assessment": {
        "regulatory": {
          "description": "Data privacy and security compliance across multiple industries and regions.",
          "risk_score": 6,
          "financial_impact": "Could increase compliance costs by 15%",
          "trend": "Stable"
        },
        "privacy": {
          "description": "Handling sensitive business process data across multiple client systems.",
          "risk_score": 7,
          "financial_impact": "Security breaches could destroy enterprise trust",
          "trend": "Increasing"
        },
        "market": {
          "description": "Fierce competition from tech giants with unlimited resources and existing market share.",
          "risk_score": 9,
          "financial_impact": "Could limit market penetration to <10% of projections",
          "trend": "Increasing"
        },
        "execution": {
          "description": "Complex integrations with legacy enterprise systems require significant technical expertise.",
          "risk_score": 8,
          "financial_impact": "Could delay customer onboarding by 6-12 months",
          "trend": "Stable"
        },
        "overall_risk_score": 8
      },
      "alternative_perspectives": [
        {
          "strategy": "Focus on specific industry verticals (healthcare, finance, manufacturing).",
          "potential_upside": "High"
        },
        {
          "strategy": "Partner with system integrators and consultancies for implementation.",
          "potential_upside": "Large"
        },
        {
          "strategy": "Target SMBs with pre-built automation templates instead of enterprise.",
          "potential_upside": "Medium"
        },
        {
          "strategy": "White-label solution for existing enterprise software vendors.",
          "potential_upside": "Large"
        }
      ],
      "data_consistency_check": {
        "missing_fields": [
          "Specific industry focus and use cases.",
          "Integration complexity and timeline details.",
          "Competitive differentiation beyond 'faster implementation'.",
          "Customer acquisition strategy for enterprise sales."
        ],
        "inconsistencies": [
          "Claims 40% faster implementation but lacks technical depth evidence.",
          "Mid-market focus conflicts with enterprise-level complexity needs."
        ],
        "data_quality_score": 68
      },
      "data_mismatches": [
        {
          "claim": "No-code interface for non-technical users",
          "issue": "Enterprise automation requires technical expertise regardless",
          "severity": "High"
        },
        {
          "claim": "25% lower total cost of ownership",
          "issue": "Implementation and training costs not factored in",
          "severity": "Medium"
        },
        {
          "claim": "Targeting mid-market with 50-500 employees",
          "issue": "This segment has limited automation budgets and needs",
          "severity": "High"
        }
      ],
      "evidence_strength": {
        "supporting": [
          { "point": "Remote work is driving automation adoption across enterprises.", "confidence": "High" },
          { "point": "No-code/low-code market is growing rapidly (>20% CAGR).", "confidence": "High" }
        ],
        "weak": [
          { "point": "Limited evidence of mid-market willingness to pay for automation.", "confidence": "Medium" },
          { "point": "Unclear how to compete against Microsoft's integrated ecosystem.", "confidence": "High" }
        ],
        "strength_score": 6,
        "distribution": { "supporting": 55, "weak": 45 }
      },
      "improvements": [
        {
          "action": "Define specific industry verticals and create specialized solutions.",
          "effort": "High",
          "impact": "High"
        },
        {
          "action": "Build strategic partnerships with system integrators and consultants.",
          "effort": "Medium",
          "impact": "High"
        },
        {
          "action": "Develop comprehensive ROI calculator and case studies.",
          "effort": "Low",
          "impact": "High"
        },
        {
          "action": "Create enterprise-grade security and compliance certifications.",
          "effort": "High",
          "impact": "Medium"
        }
      ],
      "overall_suggestion": {
        "summary": "Solid technical foundation but needs clearer market positioning and competitive differentiation. High execution risk in crowded market dominated by tech giants.",
        "confidence_score": 6,
        "investor_lens": "Proceed Cautiously",
        "red_flag_alerts": [
          "🚨 Intense competition from tech giants",
          "⚠️ Unclear competitive moat"
        ]
      },
      "investor_questions": [
        "How will you compete against Microsoft Power Automate's integrated ecosystem?",
        "What specific industry verticals will you focus on and why?",
        "Can you demonstrate clear ROI for mid-market automation investments?",
        "What's your strategy for handling complex enterprise integrations?"
      ],
      "loop_hole_severity_index": 0.72
    },
    risk_factors: {
      market_saturation: {
        title: "Market Competition",
        risk: "Large players like Microsoft and Google entering market",
        mitigation: "Focus on specialized use cases and superior UX"
      },
      economic_downturn: {
        title: "Budget Constraints",
        risk: "Companies cutting automation budgets during recession",
        mitigation: "Demonstrate clear ROI and cost savings"
      },
      key_person_dependency: {
        title: "Founder Dependency",
        risk: "Heavy reliance on founder's technical vision",
        mitigation: "Building strong technical team and documentation"
      },
      technology_risks: {
        title: "Platform Evolution",
        risk: "Rapid changes in automation technology stack",
        mitigation: "Continuous platform updates and technology partnerships"
      }
    },
    exit_strategy: {
      timeline: "4-6 Years",
      timeline_description: "Accelerated timeline due to rapid automation market growth",
      potential_valuation: "$200M - $400M",
      valuation_description: "Based on enterprise software automation comparables and market expansion",
      exit_options: [
        "Strategic acquisition by enterprise software leader",
        "Merger with complementary automation platform",
        "Private equity rollup in workflow automation space",
        "Secondary sale to larger automation conglomerate"
      ],
      strategic_acquirers: [
        { category: "Enterprise Software Giants", companies: "Salesforce, Microsoft, ServiceNow, Atlassian" },
        { category: "Workflow Automation Leaders", companies: "UiPath, Automation Anywhere, Blue Prism" },
        { category: "Private Equity Specialists", companies: "Vista Equity Partners, Insight Partners, Accel-KKR" }
      ],
      market_multiples: {
        revenue_multiple: "8-12x Revenue",
        growth_premium: "+25-35%",
        recent_comparables: "Enterprise automation exits at 10-14x ARR"
      }
    },
    legal_compliance: {
      incorporation: {
        jurisdiction: "Delaware, USA",
        entity_type: "C-Corporation",
        incorporation_date: "2020"
      },
      intellectual_property: {
        patents_filed: "8 Patents Filed",
        patent_description: "Workflow automation engines and no-code platform architecture",
        trademarks: "TechFlow brand and product names secured in North America and Europe"
      },
      regulatory_compliance: [
        "GDPR Compliant (European operations)",
        "CCPA Compliant (data privacy)",
        "SOC 2 Type I Certified (security framework)",
        "PIPEDA Compliant (Canadian privacy)",
        "Enterprise security certifications in progress"
      ],
      legal_structure: {
        authorized_shares: "12,000,000",
        outstanding_shares: "6,200,000",
        option_pool: "18%"
      },
      key_documents: [
        { icon: "📄", title: "Delaware Certificate of Incorporation", status: "Current" },
        { icon: "📊", title: "Seed Round Convertible Note Agreements", status: "Active" },
        { icon: "⚖️", title: "Employment and Consulting Agreements", status: "Compliant" },
        { icon: "🔒", title: "Proprietary Information Agreements", status: "Complete" },
        { icon: "📋", title: "Board Meeting Minutes and Consents", status: "Filed" },
        { icon: "🏛️", title: "State Corporate Registrations", status: "Current" }
      ]
    }
  },

  {
    // Company 3 - HealthTech Innovations
    basicInfo: {
      id: "comp_003",
      name: "HealthTech Innovations",
      description: "Revolutionary telemedicine platform leveraging AI to provide personalized healthcare solutions and remote patient monitoring for chronic disease management.",
      founded: "2021",
      headquarters: "Boston, MA",
      sector: "healthcare",
      stage: "pre-seed",
      employees: 28,
      valuation: "$8M",
      growth: "+290%",
      website: "https://healthtechinnovations.com",
      logo: "🏥"
    },
    metrics: {
      revenue: "$1.8M",
      customers: "12,500+",
      burn: "$180K",
      runway: "30 months",
      funding: "$3.5M",
      grossMargin: "85%",
      cac: "$45",
      ltv: "$680",
      churnRate: "5.2%",
      nps: 78,
      mrr: "$150K",
      arr_growth: "290%",
      customer_satisfaction: "94%",
      technology_score: "9.1/10",
      competitor_avg_satisfaction: "86%",
      competitor_avg_tech_score: "8.3/10",
      implementation_speed_advantage: "60%",
      industry_avg_gross_margin: "72%",
      competitor_avg_churn: "12.5%",
      customer_base_difference: "5x",
      addressable_market_gap: "$15.2B",
      underserved_market_share: "67%",
      top_customer_revenue_concentration: "18%",
      expected_irr_range: "40-60%",
      established_players_market_share: "8%+",
      scale_execution_target: "20x",
      cost_leadership_advantage: "50%",
      market_leader_share: "11.2%",
      foreign_currency_revenue: "3%"
    },
    financials: {
      labels: ["2021", "2022", "2023", "2024", "2025 (Proj)"],
      revenue: [0.2, 0.6, 1.1, 1.8, 4.2],
      expenses: [0.8, 1.2, 1.6, 2.1, 3.8],
      profit: [-0.6, -0.6, -0.5, -0.3, 0.4],
      customers: [850, 3200, 7800, 12500, 28000]
    },
    team: [
      {
        id: "tm_006",
        name: "Dr. Maria Gonzalez",
        role: "CEO & Co-Founder",
        background: "Former Chief Medical Officer at Teladoc with 15 years in digital health. MD from Harvard Medical School, specialized in remote patient care."
      },
      {
        id: "tm_007",
        name: "James Wilson",
        role: "CTO & Co-Founder",
        background: "Ex-Senior Software Architect at Epic Systems, built healthcare platforms serving 50M+ patients. MS in Biomedical Informatics from Stanford."
      }
    ],
    equity: {
      founders: 75,
      employees: 12,
      investors_previous: 10,
      reserved_future: 3,
      breakdown: [
        { category: "Founders", percentage: 75, color: "#0f172a" },
        { category: "Employee Stock Options", percentage: 12, color: "#fbbf24" },
        { category: "Investors (Previous Rounds)", percentage: 10, color: "#3b82f6" },
        { category: "Reserved for Future Funding", percentage: 3, color: "#10b981" }
      ]
    },
    market: {
      tam: "$45.8B",
      sam: "$12.3B",
      som: "$2.1B",
      growth_rate: "+22.4%",
      market_share: "0.8%",
      target_segment: "Patients with chronic conditions requiring ongoing monitoring and healthcare providers seeking remote care solutions",
      trends: [
        "Aging population driving demand for remote healthcare",
        "Post-COVID acceleration of telemedicine adoption",
        "Increased focus on preventive care and wellness",
        "Healthcare cost reduction initiatives"
      ],
      problem_statement: "Traditional healthcare delivery is expensive, inaccessible for many patients, and reactive rather than preventive, leading to poor health outcomes and unsustainable costs."
    },
    product: {
      name: "HealthTech Care Platform",
      description: "Comprehensive telemedicine solution combining AI-powered diagnostics, remote patient monitoring, and personalized treatment plans for chronic disease management.",
      features: [
        "AI-powered symptom assessment",
        "Remote vital signs monitoring",
        "Personalized treatment recommendations",
        "Virtual consultation platform",
        "Integration with wearable devices",
        "Patient engagement tools"
      ],
      competitive_advantages: [
        "60% more accurate AI diagnostics than competitors",
        "50% lower cost per patient interaction",
        "Higher patient engagement rates",
        "HIPAA-compliant security infrastructure"
      ],
      development_stage: "Production Ready"
    },
    business_model: {
      revenue_type: {
        type: "Freemium with Premium Subscriptions",
        description: "Free basic consultations with paid chronic disease management plans"
      },
      monetization_strategy: [
        "Monthly chronic disease management subscriptions",
        "Pay-per-consultation for acute care visits",
        "Enterprise health plan partnerships",
        "Pharmaceutical partnership and referral fees"
      ],
      pricing_strategy: [
        { tier: "Basic", price: "Free", description: "Basic health tracking" },
        { tier: "Care Plan", price: "$49/mo", description: "Chronic disease management" },
        { tier: "Enterprise", price: "Custom", description: "Healthcare organizations" }
      ]
    },
    competitor: {
      direct_competitors: [
        {
          id: 1,
          name: "TeleMed Pro",
          funding: "$85M",
          valuation: "$420M",
          customers: "25,000+",
          growth: "150% YoY",
          market_share: "11.2%"
        },
        {
          id: 2,
          name: "RemoteCare Solutions",
          funding: "$60M",
          valuation: "$280M",
          customers: "18,000+",
          growth: "120% YoY",
          market_share: "8.7%"
        }
      ],
      analysis: {
        advantages: [
          "Superior AI diagnostic accuracy",
          "50% more cost-effective solution",
          "Better patient engagement and outcomes",
          "Comprehensive chronic disease focus"
        ],
        challenges: [
          "Smaller patient base than established telehealth providers",
          "Need for more clinical partnerships",
          "Regulatory compliance complexity",
          "Limited geographic coverage"
        ],
        competitive_strategy: {
          differentiation_focus: "AI-powered personalized care for chronic conditions",
          cost_leadership: "50% more affordable with better outcomes",
          innovation_edge: "Advanced remote monitoring and predictive analytics"
        }
      }
    },
    devilsAdvocateAnalysis: {
      "restated_input": {
        "founder_claim": "We're revolutionizing healthcare with AI-powered telemedicine for chronic disease management and remote patient monitoring.",
        "ai_restated": "AI-powered telemedicine platform focused on chronic disease management with remote patient monitoring capabilities."
      },
      "counter_arguments": [
        {
          "point": "Healthcare market dominated by established players like Teladoc, Amwell with massive user bases.",
          "probability_validity": "Critical"
        },
        {
          "point": "AI diagnostic accuracy liability could expose company to massive lawsuits.",
          "probability_validity": "Critical"
        },
        {
          "point": "Regulatory approval processes (FDA, HIPAA) extremely slow and expensive.",
          "probability_validity": "High"
        },
        {
          "point": "Chronic disease patients prefer in-person care and resist digital solutions.",
          "probability_validity": "Medium"
        }
      ],
      "risk_assessment": {
        "regulatory": {
          "description": "FDA approval for AI diagnostics and HIPAA compliance create significant barriers and costs.",
          "risk_score": 9,
          "financial_impact": "Could increase regulatory costs by 40% and delay launch by 2+ years",
          "trend": "Increasing"
        },
        "privacy": {
          "description": "Handling sensitive patient health data with AI systems creates massive liability exposure.",
          "risk_score": 9,
          "financial_impact": "Data breaches could result in $millions in fines and litigation",
          "trend": "Increasing"
        },
        "market": {
          "description": "Saturated telehealth market with well-funded incumbents and patient acquisition challenges.",
          "risk_score": 8,
          "financial_impact": "Customer acquisition costs could be 3x higher than projected",
          "trend": "Stable"
        },
        "execution": {
          "description": "AI diagnostic accuracy and patient safety require extensive clinical validation and oversight.",
          "risk_score": 8,
          "financial_impact": "Clinical trials and validation could cost $5-10M+ and take 3-5 years",
          "trend": "Stable"
        },
        "overall_risk_score": 9
      },
      "alternative_perspectives": [
        {
          "strategy": "B2B2C partnerships with health insurers and healthcare systems.",
          "potential_upside": "Large"
        },
        {
          "strategy": "Focus on health monitoring and wellness, not diagnostic AI.",
          "potential_upside": "Medium"
        },
        {
          "strategy": "Target specific chronic conditions (diabetes, hypertension) with proven ROI.",
          "potential_upside": "High"
        },
        {
          "strategy": "White-label platform for existing healthcare providers.",
          "potential_upside": "Large"
        }
      ],
      "data_consistency_check": {
        "missing_fields": [
          "Specific chronic conditions targeted and clinical evidence.",
          "FDA approval pathway and timeline.",
          "Clinical validation studies and results.",
          "Insurance reimbursement strategy and partnerships."
        ],
        "inconsistencies": [
          "Claims 60% more accurate AI diagnostics without clinical trial data.",
          "Low customer acquisition cost conflicts with healthcare sales complexity."
        ],
        "data_quality_score": 58
      },
      "data_mismatches": [
        {
          "claim": "60% more accurate AI diagnostics than competitors",
          "issue": "No clinical trial evidence or FDA validation provided",
          "severity": "Critical"
        },
        {
          "claim": "50% lower cost per patient interaction",
          "issue": "Doesn't account for clinical oversight and liability costs",
          "severity": "High"
        },
        {
          "claim": "$45 customer acquisition cost",
          "issue": "Healthcare B2C acquisition typically costs $200-500+",
          "severity": "Critical"
        }
      ],
      "evidence_strength": {
        "supporting": [
          { "point": "Aging population driving demand for remote healthcare solutions.", "confidence": "High" },
          { "point": "Post-COVID acceleration of telemedicine adoption by patients and providers.", "confidence": "High" }
        ],
        "weak": [
          { "point": "No evidence of AI diagnostic accuracy claims or clinical validation.", "confidence": "Critical" },
          { "point": "Unclear how to compete with established telehealth platforms on patient acquisition.", "confidence": "High" }
        ],
        "strength_score": 4,
        "distribution": { "supporting": 35, "weak": 65 }
      },
      "improvements": [
        {
          "action": "Conduct clinical trials and pursue FDA clearance for AI diagnostic features.",
          "effort": "High",
          "impact": "Critical"
        },
        {
          "action": "Establish partnerships with health insurers for reimbursement coverage.",
          "effort": "High",
          "impact": "High"
        },
        {
          "action": "Focus on remote monitoring without diagnostic claims initially.",
          "effort": "Medium",
          "impact": "High"
        },
        {
          "action": "Build clinical advisory board with key opinion leaders.",
          "effort": "Medium",
          "impact": "High"
        }
      ],
      "overall_suggestion": {
        "summary": "High-potential healthcare opportunity but extremely high regulatory and liability risks. Needs clinical validation and clear regulatory pathway before investment consideration.",
        "confidence_score": 4,
        "investor_lens": "High Risk - Proceed with Extreme Caution",
        "red_flag_alerts": [
          "🚨 No FDA validation for AI diagnostics claims",
          "🚨 Massive liability exposure",
          "⚠️ Unrealistic customer acquisition projections"
        ]
      },
      "investor_questions": [
        "What clinical trials have you conducted to validate AI diagnostic accuracy?",
        "What's your FDA approval pathway and timeline for AI diagnostic features?",
        "How will you handle liability and malpractice insurance for AI diagnostics?",
        "What insurance reimbursement partnerships do you have in place?"
      ],
      "loop_hole_severity_index": 0.85
    },
    risk_factors: {
      market_saturation: {
        title: "Healthcare Regulation",
        risk: "Changing healthcare regulations and compliance requirements",
        mitigation: "Strong regulatory team and flexible platform design"
      },
      economic_downturn: {
        title: "Healthcare Spending",
        risk: "Reduced healthcare spending affecting adoption",
        mitigation: "Focus on cost-saving value proposition"
      },
      key_person_dependency: {
        title: "Medical Leadership",
        risk: "Dependence on founder's medical expertise and relationships",
        mitigation: "Building medical advisory board and clinical partnerships"
      },
      technology_risks: {
        title: "AI Accuracy",
        risk: "AI diagnostic errors leading to patient safety issues",
        mitigation: "Continuous model improvement and human oversight protocols"
      }
    },
    exit_strategy: {
      timeline: "6-8 Years",
      timeline_description: "Longer timeline due to healthcare regulatory requirements and clinical validation",
      potential_valuation: "$500M - $1.5B",
      valuation_description: "Based on digital health unicorn valuations and chronic care market potential",
      exit_options: [
        "Strategic acquisition by major healthcare system",
        "Merger with established telemedicine platform",
        "IPO focused on healthcare technology investors",
        "Partnership with pharmaceutical companies for chronic care"
      ],
      strategic_acquirers: [
        { category: "Healthcare Giants", companies: "UnitedHealth, Anthem, CVS Health, Humana" },
        { category: "Digital Health Leaders", companies: "Teladoc, Amwell, Doxy.me, MDLive" },
        { category: "Healthcare-Focused PE", companies: "Warburg Pincus, TPG Capital, Blackstone Health" }
      ],
      market_multiples: {
        revenue_multiple: "15-25x Revenue",
        growth_premium: "+40-60%",
        recent_comparables: "Digital health exits at 20-30x ARR due to market premiums"
      }
    }
  }
];

// Helper function to get company by ID
export const getCompanyById = (companyData, companyId) => {
  return companyData.find(company => company.basicInfo.id === companyId);
};

// Helper function to get all companies for listing
export const getAllCompanies = (companyData) => {
  return companyData.map(company => ({
    id: company.basicInfo.id,
    name: company.basicInfo.name,
    description: company.basicInfo.description,
    sector: company.basicInfo.sector,
    stage: company.basicInfo.stage,
    valuation: company.basicInfo.valuation,
    growth: company.basicInfo.growth,
    logo: company.basicInfo.logo,
    headquarters: company.basicInfo.headquarters,
    founded: company.basicInfo.founded,
    employees: company.basicInfo.employees,
    // Include metrics needed for deal cards
    metrics: {
      revenue: company.metrics.revenue,
      customers: company.metrics.customers
    }
  }));
};
