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
      market_leader_share: "15.8%"
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
      market_leader_share: "22.3%"
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
      market_leader_share: "11.2%"
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
    }
  }
];

// Helper function to get company by ID
export const getCompanyById = (companyId) => {
  return companiesData.find(company => company.basicInfo.id === companyId);
};

// Helper function to get all companies for listing
export const getAllCompanies = () => {
  return companiesData.map(company => ({
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
