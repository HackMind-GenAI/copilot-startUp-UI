import { useState, useEffect } from 'react';
import DealCard from './DealCard';
import DashboardOverlay from './DashboardOverlay';

// Enhanced deals data matching the HTML version
const allDeals = [
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
  },
  {
    id: 4,
    name: "CogniCore",
    sector: "ai",
    stage: "series-a",
    region: "asia",
    valuation: "$190M",
    growth: "450% YoY",
    description: "Advanced machine learning infrastructure platform enabling enterprise AI deployment at scale with automated model optimization",
    logo: "🤖",
    founded: "2022",
    employees: 95,
    headquarters: "Singapore",
    metrics: {
      revenue: "$18M ARR",
      customers: "1,200+",
      team: "95 employees",
      funding: "$30M raised",
      burn: "$1.1M/month",
      runway: "27 months",
      grossMargin: "88%",
      churnRate: "1.8%",
      cac: "$650",
      ltv: "$28,000"
    },
    financials: {
      revenue: [2.8, 5.2, 9.1, 13.8, 18.2],
      expenses: [3.1, 4.8, 7.2, 9.8, 12.1],
      profit: [-0.3, 0.4, 1.9, 4.0, 6.1],
      labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024']
    },
    team: [
      { name: "Dr. Kevin Lim", role: "CEO & Founder", background: "Former Google AI Research Scientist, NUS PhD" },
      { name: "Rachel Wong", role: "CTO", background: "Ex-Microsoft Principal Engineer, Stanford MS CS" },
      { name: "Hiroshi Tanaka", role: "VP of Product", background: "Former Amazon ML Director, Tokyo Tech PhD" },
      { name: "Sophie Martin", role: "VP of Marketing", background: "Ex-Salesforce Director, INSEAD MBA" }
    ]
  },
  {
    id: 5,
    name: "BioSynth",
    sector: "pharma",
    stage: "seed",
    region: "europe",
    valuation: "$45M",
    growth: "280% YoY",
    description: "Synthetic biology platform revolutionizing pharmaceutical manufacturing through engineered microorganisms and sustainable processes",
    logo: "🧬",
    founded: "2023",
    employees: 35,
    headquarters: "Zurich, Switzerland",
    metrics: {
      revenue: "$2M ARR",
      customers: "25+",
      team: "35 employees",
      funding: "$8M raised",
      burn: "$400K/month",
      runway: "20 months",
      grossMargin: "65%",
      churnRate: "3.2%",
      cac: "$1,800",
      ltv: "$45,000"
    },
    financials: {
      revenue: [0.2, 0.5, 0.9, 1.4, 2.1],
      expenses: [0.8, 1.2, 1.6, 1.9, 2.2],
      profit: [-0.6, -0.7, -0.7, -0.5, -0.1],
      labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024']
    },
    team: [
      { name: "Dr. Elena Rossi", role: "CEO & Founder", background: "Former Ginkgo Bioworks VP, ETH Zurich PhD" },
      { name: "Dr. Thomas Mueller", role: "Chief Scientific Officer", background: "Ex-Novozymes Research Director, Max Planck PhD" },
      { name: "Maria Santos", role: "CTO", background: "Former Zymergen Principal Engineer, UC Berkeley PhD" },
      { name: "Alex Johnson", role: "VP of Business Development", background: "Ex-Bain Consultant, London Business School MBA" }
    ]
  },
  {
    id: 6,
    name: "FlexiPay",
    sector: "fintech",
    stage: "series-b",
    region: "north-america",
    valuation: "$320M",
    growth: "195% YoY",
    description: "Flexible payment solutions and financial services platform designed specifically for the growing gig economy workforce",
    logo: "💰",
    founded: "2020",
    employees: 150,
    headquarters: "New York, NY",
    metrics: {
      revenue: "$28M ARR",
      customers: "5,000+",
      team: "150 employees",
      funding: "$55M raised",
      burn: "$1.8M/month",
      runway: "30 months",
      grossMargin: "82%",
      churnRate: "2.5%",
      cac: "$380",
      ltv: "$8,900"
    },
    financials: {
      revenue: [5.2, 9.8, 16.1, 22.4, 28.1],
      expenses: [7.1, 11.2, 15.8, 19.2, 22.8],
      profit: [-1.9, -1.4, 0.3, 3.2, 5.3],
      labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024']
    },
    team: [
      { name: "Amanda Foster", role: "CEO & Co-Founder", background: "Former PayPal VP, Wharton MBA" },
      { name: "Ryan O'Connor", role: "CTO & Co-Founder", background: "Ex-Venmo Lead Engineer, MIT MS CS" },
      { name: "Jessica Park", role: "VP of Product", background: "Former Robinhood Product Director, Stanford MBA" },
      { name: "Mark Williams", role: "VP of Growth", background: "Ex-Uber Growth Lead, Harvard Business School" }
    ]
  }
];

const DealsSection = ({ filters }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredDeals, setFilteredDeals] = useState([]);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    let filtered = allDeals;

    if (filters.category !== 'all') {
      filtered = filtered.filter(deal => deal.sector === filters.category);
    }
    if (filters.stage !== 'all') {
      filtered = filtered.filter(deal => deal.stage === filters.stage);
    }
    if (filters.region !== 'all') {
      filtered = filtered.filter(deal => deal.region === filters.region);
    }

    // Sort deals
    if (filters.sort === 'valuation') {
      filtered = filtered.sort((a, b) => {
        const aVal = parseInt(a.valuation.replace(/[$M]/g, ''));
        const bVal = parseInt(b.valuation.replace(/[$M]/g, ''));
        return bVal - aVal;
      });
    } else if (filters.sort === 'growth') {
      filtered = filtered.sort((a, b) => {
        const aGrowth = parseInt(a.growth.replace(/[%\s\w]/g, ''));
        const bGrowth = parseInt(b.growth.replace(/[%\s\w]/g, ''));
        return bGrowth - aGrowth;
      });
    } else {
      // Sort by newest (default order in array)
      filtered = [...filtered];
    }

    setFilteredDeals(filtered);
    setCurrentIndex(0);
  }, [filters]);

  const nextDeals = () => {
    if (currentIndex < filteredDeals.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevDeals = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDealClick = (deal) => {
    setSelectedDeal(deal);
    setShowDashboard(true);
  };

  const closeDashboard = () => {
    setShowDashboard(false);
    setSelectedDeal(null);
  };

  return (
    <>
      <section id="deals" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-navy mb-6">Premium Investment Deals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked opportunities from our exclusive deal flow, vetted by our investment committee
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-x-auto pb-8">
              <div 
                className="flex space-x-8 px-4 transition-transform duration-500 ease-in-out" 
                style={{
                  transform: `translateX(-${currentIndex * 384}px)`,
                  minWidth: 'max-content'
                }}
              >
                {filteredDeals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} onClick={() => handleDealClick(deal)} />
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            {filteredDeals.length > 3 && (
              <>
                <button 
                  onClick={prevDeals}
                  disabled={currentIndex === 0}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gold hover:text-white transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button 
                  onClick={nextDeals}
                  disabled={currentIndex >= filteredDeals.length - 3}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gold hover:text-white transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </>
            )}
          </div>
          
          {/* Results counter */}
          <div className="text-center mt-8">
            <p className="text-gray-600 font-medium">
              Showing {filteredDeals.length} of {allDeals.length} investment opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Overlay */}
      {showDashboard && selectedDeal && (
        <DashboardOverlay 
          onClose={closeDashboard}
        />
      )}
    </>
  );
};

export default DealsSection;
