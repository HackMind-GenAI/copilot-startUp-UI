import { appConfig } from '../data/appConfig';

const TrendingSection = () => {

  // Enhanced trending companies data that matches the deals structure
  const trendingDeals = [
    {
      id: 1,
      name: "NeuralPay",
      sector: "fintech",
      stage: "series-a",
      region: "north-america",
      valuation: "$150M",
      growth: "340% YoY",
      description: "AI-powered payment processing platform revolutionizing digital transactions with advanced fraud detection and real-time analytics",
      logo: "💳",
      founded: "2021",
      employees: 85,
      headquarters: "San Francisco, CA",
      metrics: {
        revenue: "$12M ARR",
        customers: "2,500+",
        team: "85 employees",
        funding: "$25M raised",
        burn: "$800K/month",
        runway: "31 months",
        grossMargin: "85%",
        churnRate: "2.1%",
        cac: "$450",
        ltv: "$12,500"
      },
      financials: {
        revenue: [2.1, 3.8, 6.2, 9.1, 12.3],
        expenses: [1.8, 2.9, 4.1, 5.8, 7.2],
        profit: [0.3, 0.9, 2.1, 3.3, 5.1],
        labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024']
      },
      team: [
        { name: "Sarah Chen", role: "CEO & Co-Founder", background: "Former VP at Stripe, Stanford MBA" },
        { name: "Marcus Rodriguez", role: "CTO & Co-Founder", background: "Ex-Google Senior Engineer, MIT PhD" },
        { name: "Emily Watson", role: "VP of Sales", background: "Former Director at Square, 10+ years fintech" },
        { name: "David Kim", role: "VP of Engineering", background: "Ex-Uber Principal Engineer, Carnegie Mellon MS" }
      ]
    },
    {
      id: 2,
      name: "QuantumMed",
      sector: "pharma",
      stage: "series-b",
      region: "europe",
      valuation: "$280M",
      growth: "180% YoY",
      description: "Quantum computing platform accelerating drug discovery and personalized medicine through advanced molecular simulation",
      logo: "💊",
      founded: "2020",
      employees: 120,
      headquarters: "Cambridge, UK",
      metrics: {
        revenue: "$8M ARR",
        customers: "150+",
        team: "120 employees",
        funding: "$45M raised",
        burn: "$1.2M/month",
        runway: "37 months",
        grossMargin: "78%",
        churnRate: "1.5%",
        cac: "$2,100",
        ltv: "$85,000"
      },
      financials: {
        revenue: [1.2, 2.1, 3.8, 5.9, 8.1],
        expenses: [2.1, 3.2, 4.8, 6.1, 7.8],
        profit: [-0.9, -1.1, -1.0, -0.2, 0.3],
        labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024']
      },
      team: [
        { name: "Dr. James Morrison", role: "CEO & Founder", background: "Former Roche VP, Oxford PhD in Quantum Physics" },
        { name: "Dr. Lisa Zhang", role: "Chief Scientific Officer", background: "Ex-Novartis Research Director, Harvard MD/PhD" },
        { name: "Robert Taylor", role: "CTO", background: "Former IBM Quantum Lead, MIT PhD Computer Science" },
        { name: "Anna Kowalski", role: "VP of Business Development", background: "Ex-McKinsey Partner, Wharton MBA" }
      ]
    },
    {
      id: 3,
      name: "EcoGrid",
      sector: "energy",
      stage: "growth",
      region: "north-america",
      valuation: "$420M",
      growth: "220% YoY",
      description: "Smart grid technology platform optimizing renewable energy distribution and storage across utility networks",
      logo: "⚡",
      founded: "2019",
      employees: 200,
      headquarters: "Austin, TX",
      metrics: {
        revenue: "$35M ARR",
        customers: "500+",
        team: "200 employees",
        funding: "$80M raised",
        burn: "$2.1M/month",
        runway: "38 months",
        grossMargin: "72%",
        churnRate: "0.8%",
        cac: "$3,200",
        ltv: "$125,000"
      },
      financials: {
        revenue: [8.2, 14.1, 21.8, 28.9, 35.2],
        expenses: [12.1, 18.2, 22.8, 26.1, 28.8],
        profit: [-3.9, -4.1, -1.0, 2.8, 6.4],
        labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024']
      },
      team: [
        { name: "Michael Thompson", role: "CEO & Co-Founder", background: "Former Tesla Energy VP, Stanford MS Engineering" },
        { name: "Dr. Priya Patel", role: "CTO & Co-Founder", background: "Ex-Google X Director, Caltech PhD Physics" },
        { name: "Jennifer Liu", role: "VP of Operations", background: "Former GE Energy Director, Northwestern MBA" },
        { name: "Carlos Mendez", role: "VP of Sales", background: "Ex-Siemens Regional Director, 15+ years energy" }
      ]
    }
  ];



  const { performanceLabels, marketInsights } = appConfig.trendingSection;

  return (
    <>
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-navy mb-6">{appConfig.sections.trending.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {appConfig.sections.trending.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {trendingDeals.map((deal) => (
              <div 
                key={deal.id}
                className="performance-trend glass-card p-8 rounded-2xl glow-border"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{deal.logo}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy">{deal.name}</h3>
                      <p className="text-sm text-gray-500 capitalize">{deal.sector} • {deal.stage.replace('-', ' ')}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-500 font-bold text-lg flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      +{deal.growth.replace(' YoY', '').replace('%', '')}%
                    </div>
                    <div className="text-sm text-gray-500">{performanceLabels.thirtyDays}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{deal.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-navy">{deal.valuation}</div>
                    <div className="text-xs text-gray-500">{performanceLabels.valuation}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-navy">{deal.metrics.revenue}</div>
                    <div className="text-xs text-gray-500">{performanceLabels.arr}</div>
                  </div>
                </div>
                <div className="text-gold font-bold text-center">{performanceLabels.momentum}</div>
              </div>
            ))}
          </div>
          
          {/* Market insights */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-navy mb-6 text-center">{marketInsights.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {marketInsights.metrics.map((metric, index) => (
                <div key={index} className={`text-center p-4 rounded-lg ${metric.colorClass}`}>
                  <div className={`text-3xl font-black mb-2 ${metric.colorClass.split(' ')[0]}`}>{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default TrendingSection;
