import { useState, useEffect, useRef, useMemo } from 'react';
import Chart from 'chart.js/auto';

import { appConfig } from '../data/appConfig';
import OverviewTab from './dashboard/OverviewTab';
import MarketTab from './dashboard/MarketTab';
import ProductTab from './dashboard/ProductTab';
import FinancialsTab from './dashboard/FinancialsTab';
import MetricsTab from './dashboard/MetricsTab';
import CompetitorTab from './dashboard/CompetitorTab';
import TeamTab from './dashboard/TeamTab';
import FoundersTab from './dashboard/FoundersTab';
import DevilsAdvocateTab from './dashboard/DevilsAdvocateTab';
import RisksTab from './dashboard/RisksTab';
import ExitTab from './dashboard/ExitTab';
import DocumentsTab from './dashboard/DocumentsTab';
import { createRevenueChart, createFinancialChart, createEquityChart } from './dashboard/chartUtils';

const DashboardOverlay = ({ onClose, companyData }) => {
  // Use dynamic company data passed as props
  const deal = companyData;
  const { dashboard } = appConfig;
  const [activeTab, setActiveTab] = useState('overview');
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [foundersFullData, setFoundersFullData] = useState({});
  const [aiMessages, setAiMessages] = useState([
    {
      type: 'ai',
      text: dashboard.aiAssistant.welcomeMessage
    }
  ]);
  const [aiInput, setAiInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chartInstanceRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  // Chart creation handlers
  const handleCreateRevenueChart = (chartRef, chartInstanceRef) => {
    createRevenueChart(chartRef, chartInstanceRef, deal);
  };

  const handleCreateFinancialChart = (chartRef, chartInstanceRef) => {
    createFinancialChart(chartRef, chartInstanceRef, deal);
  };

  const handleCreateEquityChart = (chartRef, chartInstanceRef) => {
    createEquityChart(chartRef, chartInstanceRef, deal);
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const toggleAIPanel = () => {
    setShowAIPanel(!showAIPanel);
  };

  const sendAIMessage = () => {
    if (!aiInput.trim()) return;

    askAI(aiInput);

    setAiInput('');
  };

  const firstFounder = useMemo(
    () => deal?.team?.find(f => f.role.toLowerCase().includes('founder'))
    , [deal?.basicInfo.id]);

  useEffect(() => {
    // get first team member whose role includes 'founder'
    if (firstFounder?.name?.length > 0) {
      fetch('https://test-proj-579933942765.us-central1.run.app/founder-summary',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ founder: firstFounder.name })
      })
      .then(response => response.json())
      .then(data => {
        console.log("Data is ", data);
        setFoundersFullData(prevData => ({
          ...prevData,
          [data?.name]: data
        }));
      })
      .catch({})
    }
  }, [firstFounder]);

  const askAI = (question) => {
    const apiPayload = {
      message: question,
      query_type:"default",
      startup_id:"startup-123",
      history: aiMessages?.map(item => ({
        text: item.text,
        role: item.type === 'ai' ? 'assistant' : 'user'
      })) || [],
    }
    fetch('https://test-proj-579933942765.us-central1.run.app/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(apiPayload)
    }).then(response => response.json())
    .then(response => {
      const reply = response.reply;
      setAiMessages(prev => [...prev, { type: 'ai', text: reply }]);
      setIsTyping(false);
      setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, 100);
    }).catch(() => {
      setAiMessages(prev => [...prev, { type: 'ai', text: "I'm sorry, something went wrong. Please try again." }]);
      setIsTyping(false);
    });
    
    setAiMessages(prev => [...prev, { type: 'user', text: question }]);
    setIsTyping(true);
    
    // Scroll to bottom after adding user message
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, 100);
  };

  const generateAIResponse = (question) => {
    if (question.includes('devil') || question.includes('advocate') || question.includes('counter')) {
      return `**Devil's Advocate Analysis for ${deal.basicInfo.name}:**

**Critical Counter-Arguments to Founder Claims:**

🔴 **Growth Sustainability Concerns:**
• ${deal.basicInfo.growth} growth from small ${deal.metrics.customers} customer base may not scale
• High burn rate of ${deal.metrics.burn} unsustainable without continuous funding
• Market conditions artificially favorable - growth may not be company-specific

🔴 **Competitive Position Reality:**
• Only ${deal.market.market_share} market share vs established players with ${deal.metrics.established_players_market_share}
• "Market leading" claims may be misleading or narrowly defined
• Vulnerable to well-funded competitors entering space

🔴 **Financial Model Weaknesses:**
• Unit economics based on limited customer lifecycle data
• ${deal.metrics.grossMargin} margin may compress under competitive pressure
• CAC likely to increase significantly in saturated market

**Key Questions for Due Diligence:**
• Can growth continue without promotional pricing?
• What if top 3 competitors launch competing products?
• Is the team capable of executing at ${deal.metrics.scale_execution_target} scale?
• How defensible is the technology moat really?

**Recommendation:** Conduct deeper due diligence on customer concentration, competitive moats, and stress-test financial projections under adverse scenarios.`;
    } else if (question.includes('competitor') || question.includes('competition')) {
      return `**Competitive Analysis for ${deal.basicInfo.name}:**

**Market Position vs Key Competitors:**

📊 **Market Share Comparison:**
• ${deal.basicInfo.name}: ${deal.market.market_share} (${deal.basicInfo.growth} growth)
${deal.competitors.map(comp => `• ${comp.name}: ${comp.market_share} (${comp.valuation} valuation)`).join('\n')}

🟢 **Competitive Advantages:**
${deal.competitive_analysis.advantages.map(advantage => `• ${advantage}`).join('\n')}

🔴 **Competitive Disadvantages:**
${deal.competitive_analysis.challenges.map(challenge => `• ${challenge}`).join('\n')}

**Strategic Positioning:**
• **Differentiation Strategy**: ${deal.competitive_analysis.competitive_strategy.differentiation_focus}
• **Cost Leadership**: ${deal.competitive_analysis.competitive_strategy.cost_leadership}
• **Innovation Edge**: ${deal.competitive_analysis.competitive_strategy.innovation_edge}

**Investment Thesis:** Strong growth potential in underserved ${deal.metrics.underserved_market_share} market segment with better unit economics than competitors, but faces execution risk scaling against well-funded incumbents.`;
    } else if (question.includes('growth drivers')) {
      return `Based on ${deal.basicInfo.name}'s comprehensive data analysis, I've identified several key growth drivers:

**Primary Growth Catalysts:**
• **Market Expansion**: ${deal.basicInfo.growth} YoY growth indicates strong product-market fit in the ${deal.basicInfo.sector} sector
• **Customer Acquisition**: Growing customer base of ${deal.metrics.customers} with healthy ${deal.metrics.churnRate} churn rate
• **Unit Economics**: Strong LTV/CAC ratio of ${Math.round(parseInt(deal.metrics.ltv.replace(/[$,]/g, '')) / parseInt(deal.metrics.cac.replace(/[$,]/g, '')))} demonstrates efficient growth
• **Financial Health**: ${deal.metrics.runway} cash runway provides adequate time to reach next milestones

**Strategic Advantages:**
• Experienced leadership team with proven track records
• ${deal.metrics.grossMargin} gross margin indicates scalable business model
• Strong position in high-growth ${deal.basicInfo.sector} market`;
    } else if (question.includes('competitors')) {
      return `**Competitive Analysis for ${deal.name}:**

**Market Position:**
• ${deal.valuation} valuation reflects strong market confidence
• ${deal.growth} growth rate significantly above industry average
• ${deal.metrics.grossMargin} gross margin indicates competitive moat

**Key Differentiators:**
• Advanced technology stack in ${deal.sector}
• Strong customer retention (${deal.metrics.churnRate} churn)
• Experienced team from leading companies
• ${deal.metrics.customers} customer base provides network effects

**Competitive Advantages:**
• First-mover advantage in specific market segment
• Strong intellectual property portfolio
• Strategic partnerships and distribution channels
• Superior unit economics vs. competitors`;
    } else if (question.includes('risks')) {
      return `**Investment Risk Assessment for ${deal.name}:**

**Financial Risks:**
• Current burn rate of ${deal.metrics.burn} requires careful monitoring
• ${deal.metrics.runway} runway necessitates successful next funding round
• Market volatility could impact ${deal.sector} sector valuations

**Operational Risks:**
• Scaling challenges with ${deal.employees} team size
• Key person dependency on founding team
• Competition from well-funded incumbents

**Market Risks:**
• Regulatory changes in ${deal.sector} industry
• Economic downturn impact on customer spending
• Technology disruption risks

**Mitigation Factors:**
• Strong leadership team with proven execution
• Diversified customer base reduces concentration risk
• Multiple revenue streams and market opportunities
• Conservative cash management practices`;
    } else if (question.includes('summary')) {
      return `**Investment Summary Report: ${deal.name}**

**Company Overview:**
${deal.description}

**Investment Highlights:**
• **Stage**: ${deal.stage.replace('-', ' ').toUpperCase()} company with ${deal.valuation} valuation
• **Growth**: Exceptional ${deal.growth} YoY revenue growth
• **Revenue**: ${deal.metrics.revenue} with ${deal.metrics.grossMargin} gross margin
• **Market**: Leading position in high-growth ${deal.sector} sector

**Financial Metrics:**
• Customer Base: ${deal.metrics.customers}
• Team Size: ${deal.employees} employees
• Funding: ${deal.metrics.funding} raised to date
• Runway: ${deal.metrics.runway} at current burn rate

**Investment Recommendation:**
**STRONG BUY** - Excellent fundamentals, experienced team, large market opportunity, and strong execution track record make this an attractive investment for portfolio diversification in the ${deal.sector} sector.

**Risk Rating**: Medium | **Return Potential**: High | **Time Horizon**: 3-5 years`;
    } else {
      return `I'm here to help you analyze ${deal.name}'s investment potential. I can provide insights on:

• **Growth Analysis** - Market drivers and expansion opportunities
• **Competitive Positioning** - Market share and differentiation
• **Risk Assessment** - Potential challenges and mitigation strategies  
• **Financial Health** - Unit economics and cash flow analysis
• **Team Evaluation** - Leadership experience and capabilities
• **Market Dynamics** - Industry trends and opportunities

What specific aspect would you like me to dive deeper into?`;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendAIMessage();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <OverviewTab 
            deal={deal} 
            dashboard={dashboard} 
            chartInstanceRef={chartInstanceRef} 
            createRevenueChart={handleCreateRevenueChart}
          />
        );

      case 'market':
        return <MarketTab deal={deal} />;

      case 'product':
        return <ProductTab deal={deal} />;

      case 'financials':
        return (
          <FinancialsTab 
            deal={deal} 
            chartInstanceRef={chartInstanceRef} 
            createFinancialChart={handleCreateFinancialChart}
          />
        );

      case 'metrics':
        return <MetricsTab deal={deal} />;

      case 'competitor':
        return <CompetitorTab deal={deal} />;

      case 'team':
        return (
          <TeamTab 
            deal={deal} 
            chartInstanceRef={chartInstanceRef} 
            createEquityChart={handleCreateEquityChart}
          />
        );

      case 'founders':
        return <FoundersTab founderData={foundersFullData?.[firstFounder?.name] || {}} />;

      case 'devils-advocate':
        return <DevilsAdvocateTab deal={deal} apiResponse={deal.devilsAdvocateAnalysis} />;

      case 'risks':
        return <RisksTab deal={deal} />;

      case 'exit':
        return <ExitTab deal={deal} />;

      case 'documents':
        return <DocumentsTab deal={deal} />;

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overlay animate-fade-in" onClick={handleOverlayClick}>
      <div className="dashboard-panel w-full h-full flex flex-col animate-slide-up overflow-hidden">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center p-8 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-4">
            <h2 className="text-4xl font-black text-navy">{deal.basicInfo.name}</h2>
            <div className="bg-gold bg-opacity-20 text-gold px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              {deal.basicInfo.sector}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleAIPanel}
              className="bg-gold text-navy px-6 py-3 rounded-full font-semibold hover:bg-navy hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <span>🤖</span>
              <span>{showAIPanel ? 'Close AI' : 'AI Assistant'}</span>
            </button>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-navy text-3xl font-light w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
            >
              ×
            </button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Main Dashboard Content */}
          <div className={`flex-1 flex flex-col transition-all duration-500 ${showAIPanel ? '' : ''} min-w-0`}>
            {/* Dashboard Tabs */}
            <div className="flex space-x-3 px-8 pt-6 border-b border-gray-200 bg-white overflow-x-auto" style={{scrollbarWidth: 'none'}  }>
              {[
                { id: 'overview', label: dashboard.tabs.overview },
                { id: 'market', label: dashboard.tabs.market },
                { id: 'product', label: dashboard.tabs.product },
                { id: 'financials', label: dashboard.tabs.financials },
                { id: 'metrics', label: dashboard.tabs.metrics },
                { id: 'team', label: dashboard.tabs.team },
                { id: 'founders', label: 'Founders' },
                { id: 'competitor', label: dashboard.tabs.competitor },
                { id: 'devils-advocate', label: dashboard.tabs.devilsAdvocate },
                { id: 'risks', label: dashboard.tabs.risks },
                { id: 'exit', label: dashboard.tabs.exit },
                { id: 'documents', label: dashboard.tabs.documents },
                { id: 'founderProfile', label: dashboard.tabs.founderProfile }
                
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => handleTabSwitch(tab.id)}
                  className={`px-6 py-3 font-semibold border-b-2 transition-all ${
                    activeTab === tab.id 
                      ? 'text-navy border-gold' 
                      : 'text-gray-500 hover:text-navy border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 p-8 overflow-y-auto bg-gray-50">
              {renderTabContent()}
            </div>
          </div>

          {/* AI Assistant Panel */}
          <div className={`ai-panel bg-navy transition-all duration-500 flex-shrink-0 absolute bottom-[20px] right-[20px] h-[80vh] ${showAIPanel ? 'w-96 max-w-[33vw]' : 'w-0 overflow-hidden'}`}>
            <div className="w-full h-full flex flex-col p-4 lg:p-6 bg-navy overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <span>🤖</span>
                  <span>AI Investment Assistant</span>
                </h3>
                <button 
                  onClick={toggleAIPanel}
                  className="text-gold hover:text-white text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-10 transition-all"
                >
                  ×
                </button>
              </div>
              
              <div ref={chatContainerRef} className="ai-chat flex-1 space-y-4 mb-6 pr-2 overflow-y-auto max-h-full">
                {aiMessages.map((message, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${message.type === 'ai' ? 'bg-white bg-opacity-10 border-gold border-opacity-30' : 'bg-gold bg-opacity-20 border-gold border-opacity-50'}`}>
                    <div className={`text-sm mb-2 font-semibold text-gold`}>
                      {message.type === 'ai' ? '🤖 AI Assistant' : '👤 You'}
                    </div>
                    <div className={`text-sm leading-relaxed whitespace-pre-line text-white`}>{message.text}</div>
                  </div>
                ))}
                {isTyping && (
                  <div className="bg-white bg-opacity-10 border border-gold border-opacity-30 p-4 rounded-lg">
                    <div className="text-gold text-sm mb-2 font-semibold">🤖 AI Assistant</div>
                    <div className="text-white text-sm">
                      <span className="inline-block w-2 h-2 bg-gold rounded-full animate-pulse mr-1"></span>
                      <span className="inline-block w-2 h-2 bg-gold rounded-full animate-pulse mr-1" style={{animationDelay: '0.2s'}}></span>
                      <span className="inline-block w-2 h-2 bg-gold rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
                    </div>
                  </div>
                )}
              </div>
              
              {aiMessages?.length ===1 && <div className="space-y-3 mb-6">
                {[
                  'What are the key growth drivers for this company?',
                  'How does this company compare to competitors?',
                  'Generate a devil\'s advocate counter-analysis',
                  'What are the main investment risks?',
                  'Generate a comprehensive investment summary'
                ].map((question, index) => (
                  <button 
                    key={index}
                    onClick={() => askAI(question)}
                    className="w-full text-left p-3 bg-white bg-opacity-10 border border-gold border-opacity-30 text-white rounded-lg hover:bg-gold hover:text-navy transition-all text-sm flex items-center space-x-3 cursor-pointer"
                  >
                    <span className="text-gold">{['💡', '📊', '😈', '⚠️', '📋'][index]}</span>
                    <span className="flex-1">{question}</span>
                  </button>
                ))}
              </div>}
              
              <div className="flex space-x-2">
                <input 
                  type="text"
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about this investment..."
                  className="flex-1 p-3 rounded-lg bg-navy bg-opacity-30 text-white placeholder-gray-400 border border-gold border-opacity-30 focus:outline-none focus:border-gold text-sm"
                />
                <button 
                  onClick={sendAIMessage}
                  className="bg-gold text-navy px-4 py-3 rounded-lg font-semibold hover:bg-white transition-all text-sm flex items-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add CSS for AI chat scrollbar styling
const aiChatStyles = `
  .ai-chat::-webkit-scrollbar {
    width: 6px;
  }
  .ai-chat::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  .ai-chat::-webkit-scrollbar-thumb {
    background: rgba(251, 191, 36, 0.3);
    border-radius: 3px;
  }
  .ai-chat::-webkit-scrollbar-thumb:hover {
    background: rgba(251, 191, 36, 0.5);
  }
`;

// Add styles to document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = aiChatStyles;
  document.head.appendChild(styleSheet);
}

export default DashboardOverlay;
