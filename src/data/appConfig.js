// Global application configuration - All static content should be defined here
// This allows the platform to be white-labeled and customized for different use cases

export const appConfig = {
  // Brand Configuration
  branding: {
    name: "VENTURELENS",
    nameBreakdown: {
      primary: "VENTURE", 
      secondary: "LENS"
    },
    tagline: "Investing. Refined.",
    taglineHighlight: "Refined",
    description: "Exclusive access to premium investment opportunities curated for sophisticated investors seeking exceptional returns in tomorrow's market leaders.",
    ctaText: "Explore Opportunities"
  },

  // Navigation Configuration  
  navigation: {
    menuItems: [
      { id: 'portfolio', label: 'Portfolio', href: '#' },
      { id: 'research', label: 'Research', href: '#' },
      { id: 'markets', label: 'Markets', href: '#' }
    ],
    ctaButton: "Access Portal"
  },

  // Filter Configuration - Dynamic filter options
  filters: {
    categories: [
      { value: 'all', label: 'All Categories' },
      { value: 'fintech', label: 'Fintech' },
      { value: 'enterprise-software', label: 'Enterprise Software' },
      { value: 'healthcare', label: 'Healthcare' },
      { value: 'ai', label: 'Artificial Intelligence' },
      { value: 'pharma', label: 'Pharmaceuticals' },
      { value: 'energy', label: 'Clean Energy' },
      { value: 'saas', label: 'Software as a Service' },
      { value: 'biotech', label: 'Biotechnology' },
      { value: 'blockchain', label: 'Blockchain & Crypto' }
    ],
    stages: [
      { value: 'all', label: 'All Stages' },
      { value: 'pre-seed', label: 'Pre-Seed' },
      { value: 'seed', label: 'Seed' },
      { value: 'series-a', label: 'Series A' },
      { value: 'series-b', label: 'Series B' },
      { value: 'series-c', label: 'Series C' },
      { value: 'growth', label: 'Growth' },
      { value: 'late-stage', label: 'Late Stage' }
    ],
    regions: [
      { value: 'all', label: 'All Regions' },
      { value: 'north-america', label: 'North America' },
      { value: 'europe', label: 'Europe' },
      { value: 'asia', label: 'Asia Pacific' },
      { value: 'latin-america', label: 'Latin America' },
      { value: 'middle-east', label: 'Middle East' },
      { value: 'africa', label: 'Africa' }
    ],
    sortOptions: [
      { value: 'newest', label: 'Newest First' },
      { value: 'valuation', label: 'Highest Valuation' },
      { value: 'growth', label: 'Fastest Growth' },
      { value: 'revenue', label: 'Highest Revenue' },
      { value: 'alphabetical', label: 'Alphabetical' }
    ],
    clearAllText: "Clear All"
  },

  // Deal Card Configuration
  dealCard: {
    labels: {
      valuation: "Valuation",
      growth: "Growth Rate", 
      revenue: "Revenue",
      customers: "Customers",
      teamSize: "Team Size",
      ctaButton: "View Investment Memo"
    },
    fallbackText: "N/A"
  },

  // Section Headers and Content
  sections: {
    hero: {
      title: "Investing.",
      titleHighlight: "Refined.",
      subtitle: "Exclusive access to premium investment opportunities curated for sophisticated investors seeking exceptional returns in tomorrow's market leaders.",
      ctaText: "Explore Opportunities"
    },
    deals: {
      title: "Premium Investment Deals",
      subtitle: "Handpicked opportunities from our exclusive deal flow, vetted by our investment committee"
    },
    categories: {
      title: "Investment Categories", 
      subtitle: "Diversified portfolio across high-growth sectors driving the future economy"
    },
    trending: {
      title: "Market Momentum",
      subtitle: "Real-time performance insights from our top-performing portfolio companies"
    }
  },

  // Investment Categories Configuration
  investmentCategories: {
    fintech: {
      id: 'fintech',
      icon: '💳',
      title: 'Fintech',
      description: 'Revolutionary financial services transforming payments, lending, and wealth management',
      aum: '$2.4B+',
      companies: '25+',
      irr: '+18.5%',
      buttonText: 'Explore Fintech'
    },
    ai: {
      id: 'ai',
      icon: '🤖',
      title: 'Artificial Intelligence',
      description: 'Next-generation AI solutions powering automation and intelligent decision-making',
      aum: '$1.8B+',
      companies: '18+',
      irr: '+22.3%',
      buttonText: 'Explore Artificial Intelligence'
    },
    pharma: {
      id: 'pharma',
      icon: '💊',
      title: 'Pharmaceuticals',
      description: 'Breakthrough medical innovations and biotechnology advancing human health',
      aum: '$3.1B+',
      companies: '32+',
      irr: '+16.8%',
      buttonText: 'Explore Pharmaceuticals'
    },
    energy: {
      id: 'energy',
      icon: '⚡',
      title: 'Clean Energy',
      description: 'Sustainable future technologies driving the global energy transition',
      aum: '$1.5B+',
      companies: '20+',
      irr: '+19.2%',
      buttonText: 'Explore Clean Energy'
    }
  },

  // Portfolio Labels
  portfolioLabels: {
    aum: "AUM",
    companies: "Portfolio Companies", 
    avgIrr: "Avg IRR"
  },

  // Trending Section Configuration
  trendingSection: {
    performanceLabels: {
      valuation: "Valuation",
      arr: "ARR",
      thirtyDays: "30 days",
      momentum: "Real-time momentum building"
    },
    marketInsights: {
      title: "Market Insights Dashboard",
      metrics: [
        {
          value: "94%",
          label: "Portfolio Companies Growing",
          colorClass: "text-green-600 bg-green-50"
        },
        {
          value: "$8.2B", 
          label: "Total Portfolio Value",
          colorClass: "text-blue-600 bg-blue-50"
        },
        {
          value: "18.5%",
          label: "Average IRR", 
          colorClass: "text-navy bg-gold bg-opacity-20"
        },
        {
          value: "12",
          label: "Exits This Year",
          colorClass: "text-purple-600 bg-purple-50"
        }
      ]
    }
  },

  // Dashboard Labels - All text that appears in the investment dashboard
  dashboard: {
    tabs: {
      overview: "Overview",
      market: "Market Analysis", 
      product: "Product & Technology",
      financials: "Financial Performance",
      metrics: "Business Metrics",
      competitor: "Competitive Analysis",
      team: "Team & Leadership",
      devilsAdvocate: "Devil's Advocate",
      risks: "Risk Assessment", 
      exit: "Exit Strategy",
      documents: "Legal & Compliance"
    },
    
    sections: {
      companyOverview: {
        title: "Company Overview",
        fields: {
          founded: "Founded",
          headquarters: "Headquarters", 
          sector: "Sector",
          stage: "Stage",
          employees: "Employees",
          valuation: "Valuation",
          description: "Company Description"
        }
      },
      
      revenueGrowth: {
        title: "Revenue Growth Trajectory"
      },
      
      keyMetrics: {
        title: "Key Performance Metrics"
      },
      
      investmentHighlights: {
        title: "Investment Highlights",
        strongGrowth: "Strong Growth",
        marketPosition: "Market Position", 
        fundingStatus: "Funding Status",
        yearOverYear: "year-over-year",
        leadingInnovator: "innovator",
        raised: "raised"
      },

      marketAnalysis: {
        title: "Market & Problem Analysis",
        tam: "Market Size (TAM)",
        tamDescription: "Total Addressable Market with strong growth trajectory",
        growthRate: "Market Growth Rate", 
        growthRateDescription: "5-year compound annual growth rate",
        targetSegment: "Target Customer Segment",
        keyTrends: "Key Market Trends",
        problemStatement: "Problem Statement"
      },

      productOverview: {
        title: "Product / Service Overview",
        description: "Product Description",
        keyFeatures: "Key Features", 
        competitiveAdvantage: "Competitive Advantage",
        developmentStage: "Development Stage",
        fullProductLaunch: "Full product launch with enterprise customers"
      },

      financialPerformance: {
        title: "Financial Performance",
        healthIndicators: "Financial Health Indicators",
        revenueGrowthTitle: "Revenue Growth",
        revenueGrowthDescription: "year-over-year growth demonstrates strong market traction and product-market fit",
        cashManagement: "Cash Management", 
        cashDescription1: "Current burn rate of",
        cashDescription2: "with",
        cashDescription3: "runway provides adequate time for next milestone",
        unitEconomics: "Unit Economics",
        unitEconomicsDescription1: "Gross margin of",
        unitEconomicsDescription2: "with LTV/CAC ratio of",
        keyRatios: "Key Financial Ratios",
        grossMargin: "Gross Margin",
        monthlyChurn: "Monthly Churn", 
        cac: "CAC",
        ltv: "LTV"
      },

      businessModel: {
        title: "Business Model & Revenue Strategy",
        revenueType: "Revenue Type",
        subscriptionSaas: "Subscription-based SaaS",
        recurringRevenue: "Recurring monthly and annual subscriptions",
        monetizationStrategy: "Monetization Strategy",
        pricingStrategy: "Pricing Strategy",
        keyMetrics: "Key Performance Metrics",
        arr: "Annual Recurring Revenue",
        mrr: "Monthly Recurring Revenue", 
        cac: "Customer Acquisition Cost",
        ltv: "Customer Lifetime Value",
        grossMargin: "Gross Margin",
        churnRate: "Monthly Churn Rate"
      },

      competitorAnalysis: {
        title: "Competitor Analysis & Market Positioning",
        directCompetitors: "Direct Competitors",
        competitivePositioning: "Competitive Positioning",
        advantages: "Advantages vs. Competitors",
        challenges: "Competitive Challenges", 
        marketShareComparison: "Market Share & Performance Comparison",
        competitiveStrategy: "Competitive Strategy",
        marketOpportunity: "Market Opportunity",
        investmentThesis: "Investment Thesis",
        tableHeaders: {
          company: "Company",
          marketShare: "Market Share",
          revenueGrowth: "Revenue Growth", 
          customerSatisfaction: "Customer Satisfaction",
          technologyScore: "Technology Score",
          overallRating: "Overall Rating"
        },
        ourInvestment: "(Our Investment)",
        ratings: {
          strongBuy: "Strong Buy",
          established: "Established",
          growing: "Growing", 
          risingStar: "Rising Star"
        },
        strategyTypes: {
          differentiationFocus: "Differentiation Focus",
          costLeadership: "Cost Leadership", 
          innovationEdge: "Innovation Edge"
        },
        opportunityLabels: {
          addressableMarketGap: "Addressable Market Gap",
          underservedMarketShare: "Underserved Market Share"
        },
        thesisPoints: {
          betterUnitEconomics: "Better unit economics",
          fasterGrowth: "Faster growth trajectory", 
          strongTechMoat: "Strong technology moat",
          marketTiming: "Market timing advantage"
        }
      },

      teamLeadership: {
        title: "Leadership Team",
        equityDistribution: "Equity Split Distribution",
        equityBreakdown: "Equity Breakdown",
        founders: "Founders", 
        employeeOptions: "Employee Stock Options",
        previousInvestors: "Investors (Previous Rounds)",
        futureReserved: "Reserved for Future Funding",
        teamNotAvailable: "Team information not available"
      },

      devilsAdvocate: {
        title: "Devil's Advocate Analysis - Critical Counter-Arguments",
        note: "This analysis presents counter-arguments to challenge founder claims and identify potential blind spots in the investment thesis.",
        growthClaims: "Growth Claims Analysis", 
        financialTechClaims: "Financial & Technology Claims",
        founderClaim: "Founder Claim:",
        counterArgument: "Counter-Argument:",
        criticalRisks: "Critical Risk Factors Often Overlooked",
        teamDependency: "Team Dependency Risk",
        customerConcentration: "Customer Concentration", 
        marketTiming: "Market Timing",
        realityCheck: "Investment Decision Framework",
        validateQuestions: "Questions to Validate Claims:",
        stressScenarios: "Stress Test Scenarios:",
        conclusion: "Devil's Advocate Conclusion",
        executionRisk: "Execution Risk",
        marketRisk: "Market Risk", 
        dueDiligenceNeeded: "Due Diligence Needed",
        conclusionQuote: "Every compelling investment story has potential counterarguments. Smart investors investigate both sides before committing capital."
      },

      riskAssessment: {
        title: "Risk Assessment & Mitigation Strategies",
        marketRisks: "Market Risks",
        operationalRisks: "Operational Risks", 
        financialRisks: "Financial Risks",
        cashFlow: "Cash Flow",
        customerConcentration: "Customer Concentration",
        currencyRisk: "Currency Risk",
        monthsRunway: "months runway with current burn rate",
        topCustomersRevenue: "Top 5 customers represent",
        revenueText: "of revenue", 
        foreignRevenue: "of revenue in foreign currencies"
      },

      exitStrategy: {
        title: "Exit Strategy & Opportunities", 
        timeline: "Exit Timeline",
        projectedTimeline: "Projected timeline for strategic exit",
        potentialValuation: "Potential Exit Valuation",
        valuationDescription: "Based on comparable transactions and growth projections",
        exitStrategies: "Exit Strategies",
        strategicAcquisition: "Strategic acquisition by tech giant",
        ipo: "IPO on major stock exchange", 
        privateEquity: "Private equity buyout",
        managementBuyout: "Management buyout option",
        strategicAcquirers: "Strategic Acquirers",
        enterpriseSoftware: "Enterprise Software Leaders",
        cloudInfrastructure: "Cloud Infrastructure", 
        privateEquityFirms: "Private Equity",
        marketComparables: "Market Comparables",
        recentMultiples: "Recent SaaS Multiples",
        growthPremium: "Growth Premium",
        expectedIrr: "Expected IRR"
      },

      legalCompliance: {
        title: "Legal & Compliance",
        incorporationDetails: "Incorporation Details", 
        jurisdiction: "Jurisdiction",
        entityType: "Entity Type",
        incorporationDate: "Incorporation Date",
        intellectualProperty: "Intellectual Property",
        patentsFiled: "Patents Filed",
        coreProtection: "Core technology and algorithms protected", 
        trademarkPortfolio: "Trademark Portfolio",
        brandSecured: "Brand and product names secured globally",
        regulatoryCompliance: "Regulatory Compliance",
        legalStructure: "Legal Structure",
        authorizedShares: "Authorized Shares",
        outstandingShares: "Outstanding Shares", 
        optionPool: "Option Pool",
        keyDocuments: "Key Legal Documents",
        documentsTypes: {
          articlesIncorporation: "Articles of Incorporation",
          shareholderAgreements: "Shareholder Agreements", 
          employmentContracts: "Employment Contracts",
          ipAssignments: "IP Assignment Agreements",
          boardResolutions: "Board Resolutions",
          regulatoryFilings: "Regulatory Filings"
        },
        documentStatuses: {
          current: "Current",
          updated: "Updated", 
          compliant: "Compliant",
          complete: "Complete",
          filed: "Filed"
        }
      }
    },

    // AI Assistant Configuration
    aiAssistant: {
      welcomeMessage: "Hello! I'm your investment AI assistant. I can help you analyze company data, compare metrics, assess risks, and provide investment insights. What would you like to explore?",
      placeholder: "Ask me anything about this investment opportunity..."
    }
  }
};
