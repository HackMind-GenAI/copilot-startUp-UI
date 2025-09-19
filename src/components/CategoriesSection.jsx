import { useState } from 'react';
import DashboardOverlay from './DashboardOverlay';
import { dealData } from '../data/dealData';
import { appConfig } from '../data/appConfig';

const CategoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);

  const categories = Object.values(appConfig.investmentCategories);
  const { portfolioLabels } = appConfig;

  const openCategoryDetail = (categoryId) => {
    const categoryData = {
      fintech: { 
        name: 'Fintech Revolution', 
        sector: 'Portfolio',
        description: 'Leading the future of financial services with innovative payment solutions, digital banking, and blockchain technologies.',
        companies: 25,
        aum: '$2.4B',
        irr: '18.5%',
        valuation: '$2.4B',
        growth: '18.5% YoY',
        logo: '💳',
        founded: '2018',
        employees: 650,
        headquarters: 'Global Portfolio',
        metrics: {
          revenue: '$240M ARR',
          customers: '50,000+',
          team: '650 employees',
          funding: '$2.4B AUM',
          burn: 'Portfolio Management',
          runway: 'Indefinite',
          grossMargin: '75%',
          churnRate: '1.2%',
          cac: '$320',
          ltv: '$15,000'
        },
        financials: {
          revenue: [180, 195, 210, 225, 240],
          expenses: [150, 155, 160, 170, 180],
          profit: [30, 40, 50, 55, 60],
          labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024']
        },
        team: [
          { name: "Michael Foster", role: "Portfolio Director", background: "Former Goldman Sachs VP, Harvard MBA" },
          { name: "Sarah Kim", role: "Investment Manager", background: "Ex-JP Morgan Analyst, Wharton Finance" },
          { name: "David Rodriguez", role: "Senior Associate", background: "Former Andreessen Horowitz, Stanford MS" },
          { name: "Lisa Chen", role: "Research Analyst", background: "Ex-McKinsey Consultant, MIT MBA" }
        ]
      },
      ai: { 
        name: 'Artificial Intelligence Portfolio', 
        sector: 'Portfolio',
        description: 'Transforming industries with machine learning, natural language processing, and computer vision technologies.',
        companies: 18,
        aum: '$1.8B',
        irr: '22.3%',
        valuation: '$1.8B',
        growth: '22.3% YoY',
        logo: '🤖',
        founded: '2019',
        employees: 480,
        headquarters: 'Global Portfolio',
        metrics: {
          revenue: '$180M ARR',
          customers: '35,000+',
          team: '480 employees',
          funding: '$1.8B AUM',
          burn: 'Portfolio Management',
          runway: 'Indefinite',
          grossMargin: '82%',
          churnRate: '0.9%',
          cac: '$280',
          ltv: '$22,000'
        },
        financials: {
          revenue: [120, 135, 150, 165, 180],
          expenses: [95, 100, 110, 120, 130],
          profit: [25, 35, 40, 45, 50],
          labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024']
        },
        team: [
          { name: "Dr. James Wilson", role: "AI Portfolio Director", background: "Former Google AI Research Lead, Stanford PhD" },
          { name: "Rachel Zhang", role: "Investment Manager", background: "Ex-Microsoft Ventures, MIT PhD CS" },
          { name: "Alex Thompson", role: "Technical Advisor", background: "Former OpenAI Researcher, Carnegie Mellon PhD" },
          { name: "Maria Gonzalez", role: "Portfolio Analyst", background: "Ex-NVIDIA Strategy, Berkeley MS" }
        ]
      },
      pharma: { 
        name: 'Pharmaceutical Innovation Portfolio', 
        sector: 'Portfolio',
        description: 'Advancing healthcare through breakthrough drug discovery, personalized medicine, and biotechnology solutions.',
        companies: 32,
        aum: '$3.1B',
        irr: '16.8%',
        valuation: '$3.1B',
        growth: '16.8% YoY',
        logo: '💊',
        founded: '2017',
        employees: 850,
        headquarters: 'Global Portfolio',
        metrics: {
          revenue: '$310M ARR',
          customers: '75,000+',
          team: '850 employees',
          funding: '$3.1B AUM',
          burn: 'Portfolio Management',
          runway: 'Indefinite',
          grossMargin: '68%',
          churnRate: '0.5%',
          cac: '$1,200',
          ltv: '$45,000'
        },
        financials: {
          revenue: [250, 270, 285, 295, 310],
          expenses: [210, 220, 230, 240, 250],
          profit: [40, 50, 55, 55, 60],
          labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024']
        },
        team: [
          { name: "Dr. Catherine Lee", role: "Pharma Portfolio Director", background: "Former Pfizer VP R&D, Johns Hopkins MD/PhD" },
          { name: "Robert Martinez", role: "Investment Manager", background: "Ex-Johnson & Johnson Strategy, Harvard MBA" },
          { name: "Dr. Yuki Tanaka", role: "Scientific Advisor", background: "Former Roche Research Director, Tokyo PhD" },
          { name: "Emily Davis", role: "Portfolio Analyst", background: "Ex-BCG Healthcare, Stanford MBA" }
        ]
      },
      energy: { 
        name: 'Clean Energy Solutions Portfolio', 
        sector: 'Portfolio',
        description: 'Powering a sustainable future with renewable energy, smart grid technology, and energy storage innovations.',
        companies: 20,
        aum: '$1.5B',
        irr: '19.2%',
        valuation: '$1.5B',
        growth: '19.2% YoY',
        logo: '⚡',
        founded: '2018',
        employees: 420,
        headquarters: 'Global Portfolio',
        metrics: {
          revenue: '$150M ARR',
          customers: '30,000+',
          team: '420 employees',
          funding: '$1.5B AUM',
          burn: 'Portfolio Management',
          runway: 'Indefinite',
          grossMargin: '71%',
          churnRate: '1.1%',
          cac: '$950',
          ltv: '$28,000'
        },
        financials: {
          revenue: [100, 115, 130, 140, 150],
          expenses: [85, 90, 95, 105, 115],
          profit: [15, 25, 35, 35, 35],
          labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024']
        },
        team: [
          { name: "Thomas Anderson", role: "Energy Portfolio Director", background: "Former Tesla VP Strategy, MIT MS Engineering" },
          { name: "Dr. Priya Singh", role: "Investment Manager", background: "Ex-GE Ventures, Stanford PhD Physics" },
          { name: "Carlos Ruiz", role: "Technical Advisor", background: "Former SolarCity CTO, Caltech MS" },
          { name: "Jennifer Park", role: "ESG Analyst", background: "Ex-BlackRock Sustainable Investing, Yale MBA" }
        ]
      }
    };

    const data = categoryData[categoryId];
    if (data) {
      setSelectedCategory(data);
      setShowDashboard(true);
    }
  };

  const closeDashboard = () => {
    setShowDashboard(false);
    setSelectedCategory(null);
  };

  return (
    <>
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-navy mb-6">{appConfig.sections.categories.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {appConfig.sections.categories.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="category-card glass-card p-8 rounded-3xl text-center cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl glow-border min-h-[280px]" 
                onClick={() => openCategoryDetail(category.id)}
              >
                <div className="text-6xl mb-6">{category.icon}</div>
                <h3 className="text-2xl font-bold text-navy mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="text-gold font-bold text-xl">{category.aum} {portfolioLabels.aum}</div>
                  <div className="text-sm text-gray-500">{category.companies} {portfolioLabels.companies}</div>
                  <div className="text-sm text-green-600 font-semibold">{category.irr} {portfolioLabels.avgIrr}</div>
                </div>
                <button className="w-full bg-navy text-white py-3 rounded-full font-semibold hover:bg-gold hover:text-navy transition-all duration-300">
                  {category.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Overlay */}
      {showDashboard && selectedCategory && (
        <DashboardOverlay 
          dealData={dealData}
          onClose={closeDashboard}
        />
      )}
    </>
  );
};

export default CategoriesSection;
