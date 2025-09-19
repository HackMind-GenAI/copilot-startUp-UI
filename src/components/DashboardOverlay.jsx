import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

import { appConfig } from '../data/appConfig';

const DashboardOverlay = ({ onClose, dealData }) => {
  // Use dynamic data passed as props
  const deal = dealData;
  const { dashboard } = appConfig;
  const [activeTab, setActiveTab] = useState('overview');
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    {
      type: 'ai',
      text: dashboard.aiAssistant.welcomeMessage
    }
  ]);
  const [aiInput, setAiInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const revenueChartRef = useRef(null);
  const financialChartRef = useRef(null);
  const equityChartRef = useRef(null);
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

  useEffect(() => {
    // Add a small delay to ensure DOM elements are ready
    const timer = setTimeout(() => {
      if (activeTab === 'overview' && revenueChartRef.current) {
        createRevenueChart();
      } else if (activeTab === 'financials' && financialChartRef.current) {
        createFinancialChart();
      } else if (activeTab === 'team' && equityChartRef.current) {
        createEquityChart();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [activeTab, deal]);

  const createRevenueChart = () => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = revenueChartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: deal.financials.labels,
        datasets: [{
          label: 'Revenue ($M)',
          data: deal.financials.revenue,
          borderColor: '#fbbf24',
          backgroundColor: 'rgba(251, 191, 36, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#fbbf24',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0,0,0,0.1)'
            },
            ticks: {
              callback: function(value) {
                return '$' + value + 'M';
              }
            }
          },
          x: {
            grid: {
              color: 'rgba(0,0,0,0.1)'
            }
          }
        }
      }
    });
  };

  const createFinancialChart = () => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = financialChartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: deal.financials.labels,
        datasets: [{
          label: 'Revenue',
          data: deal.financials.revenue,
          backgroundColor: 'rgba(251, 191, 36, 0.8)',
          borderColor: '#fbbf24',
          borderWidth: 1
        }, {
          label: 'Expenses',
          data: deal.financials.expenses,
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          borderColor: '#0f172a',
          borderWidth: 1
        }, {
          label: 'Profit',
          data: deal.financials.profit,
          backgroundColor: 'rgba(34, 197, 94, 0.8)',
          borderColor: '#22c55e',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0,0,0,0.1)'
            },
            ticks: {
              callback: function(value) {
                return '$' + value + 'M';
              }
            }
          },
          x: {
            grid: {
              color: 'rgba(0,0,0,0.1)'
            }
          }
        }
      }
    });
  };

  const createEquityChart = () => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (!equityChartRef.current) return;

    const ctx = equityChartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: deal.equity.breakdown.map(item => item.category),
        datasets: [{
          data: deal.equity.breakdown.map(item => item.percentage),
          backgroundColor: deal.equity.breakdown.map(item => item.color),
          borderWidth: 2,
          borderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 20,
              font: {
                size: 12
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.parsed + '%';
              }
            }
          }
        },
        layout: {
          padding: 10
        }
      }
    });
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const toggleAIPanel = () => {
    setShowAIPanel(!showAIPanel);
  };

  const sendAIMessage = () => {
    if (!aiInput.trim()) return;

    setAiMessages(prev => [...prev, { type: 'user', text: aiInput }]);
    setIsTyping(true);
    
    // Scroll to bottom after adding user message
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, 100);
    
    setTimeout(() => {
      const response = generateAIResponse(aiInput);
      setAiMessages(prev => [...prev, { type: 'ai', text: response }]);
      setIsTyping(false);
      
      // Scroll to bottom after adding AI response
      setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, 100);
    }, 1500);
    
    setAiInput('');
  };

  const askAI = (question) => {
    setAiMessages(prev => [...prev, { type: 'user', text: question }]);
    setIsTyping(true);
    
    // Scroll to bottom after adding user message
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, 100);
    
    setTimeout(() => {
      const response = generateAIResponse(question);
      setAiMessages(prev => [...prev, { type: 'ai', text: response }]);
      setIsTyping(false);
      
      // Scroll to bottom after adding AI response
      setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, 100);
    }, 1500);
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-3xl font-bold text-navy mb-6">{dashboard.sections.companyOverview.title}</h3>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">{dashboard.sections.companyOverview.fields.founded}</h4>
                    <p className="text-gray-600">{deal.basicInfo.founded}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">{dashboard.sections.companyOverview.fields.headquarters}</h4>
                    <p className="text-gray-600">{deal.basicInfo.headquarters}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">{dashboard.sections.companyOverview.fields.sector}</h4>
                    <p className="text-gray-600 capitalize">{deal.basicInfo.sector}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">{dashboard.sections.companyOverview.fields.stage}</h4>
                    <p className="text-gray-600 capitalize">{deal.basicInfo.stage.replace('-', ' ')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">{dashboard.sections.companyOverview.fields.employees}</h4>
                    <p className="text-gray-600">{deal.basicInfo.employees}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">{dashboard.sections.companyOverview.fields.valuation}</h4>
                    <p className="text-gold font-bold text-xl">{deal.basicInfo.valuation}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-3">{dashboard.sections.companyOverview.fields.description}</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">{deal.basicInfo.description}</p>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-3xl font-bold text-navy mb-6">{dashboard.sections.revenueGrowth.title}</h3>
                <canvas ref={revenueChartRef} width="400" height="200"></canvas>
              </div>
            </div>
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-navy mb-6">{dashboard.sections.keyMetrics.title}</h3>
                <div className="space-y-4">
                  {Object.entries(deal.metrics).slice(0, 6).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600 capitalize font-medium">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-bold text-navy">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-navy mb-4">Investment Highlights</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="text-green-800 font-semibold text-sm">Strong Growth</div>
                    <div className="text-green-600 text-sm">{deal.basicInfo.growth} year-over-year</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="text-blue-800 font-semibold text-sm">Market Position</div>
                    <div className="text-blue-600 text-sm">Leading {deal.basicInfo.sector} innovator</div>
                  </div>
                  <div className="p-3 bg-gold bg-opacity-20 rounded-lg">
                    <div className="text-navy font-semibold text-sm">Funding Status</div>
                    <div className="text-gray-600 text-sm">{deal.metrics.funding} raised</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-navy mb-6">Market & Problem Analysis</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Market Size (TAM)</h4>
                    <p className="text-2xl font-bold text-gold mb-2">{deal.market.tam}</p>
                    <p className="text-gray-600">Total Addressable Market with strong growth trajectory</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Market Growth Rate</h4>
                    <p className="text-2xl font-bold text-green-600 mb-2">{deal.market.growth_rate} CAGR</p>
                    <p className="text-gray-600">5-year compound annual growth rate</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Target Customer Segment</h4>
                    <p className="text-gray-600">{deal.market.target_segment}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Key Market Trends</h4>
                    <ul className="space-y-2 text-gray-600">
                      {deal.market.trends.map((trend, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-gold mr-2">•</span>{trend}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Problem Statement</h4>
                    <p className="text-gray-600">{deal.market.problem_statement}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'product':
        return (
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-navy mb-6">Product / Service Overview</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Product Description</h4>
                    <p className="text-gray-600 leading-relaxed">{deal.product.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Key Features</h4>
                    <ul className="space-y-2 text-gray-600">
                      {deal.product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-gold mr-2">•</span>{feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Competitive Advantage</h4>
                    <ul className="space-y-2 text-gray-600">
                      {deal.product.competitive_advantages.map((advantage, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>{advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Development Stage</h4>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-800 font-semibold">{deal.product.development_stage}</p>
                      <p className="text-green-600 text-sm">Full product launch with enterprise customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'financials':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-navy mb-6">Financial Performance</h3>
              <canvas ref={financialChartRef} width="400" height="300"></canvas>
            </div>
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-navy mb-6">Financial Health Indicators</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Revenue Growth</h4>
                    <p className="text-green-600 text-sm">{deal.growth} year-over-year growth demonstrates strong market traction and product-market fit</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Cash Management</h4>
                    <p className="text-blue-600 text-sm">Current burn rate of {deal.metrics.burn} with {deal.metrics.runway} runway provides adequate time for next milestone</p>
                  </div>
                  <div className="p-4 bg-gold bg-opacity-20 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Unit Economics</h4>
                    <p className="text-gray-600 text-sm">Gross margin of {deal.metrics.grossMargin} with LTV/CAC ratio of {Math.round(parseInt(deal.metrics.ltv.replace(/[$,]/g, '')) / parseInt(deal.metrics.cac.replace(/[$,]/g, '')))}</p>
                  </div>
                </div>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-navy mb-4">Key Financial Ratios</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-navy">{deal.metrics.grossMargin}</div>
                    <div className="text-xs text-gray-500">Gross Margin</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-navy">{deal.metrics.churnRate}</div>
                    <div className="text-xs text-gray-500">Monthly Churn</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-navy">{deal.metrics.cac}</div>
                    <div className="text-xs text-gray-500">CAC</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-navy">{deal.metrics.ltv}</div>
                    <div className="text-xs text-gray-500">LTV</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'metrics':
        return (
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-navy mb-6">Business Model & Revenue Strategy</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Revenue Type</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 font-semibold">Subscription-based SaaS</p>
                      <p className="text-blue-600 text-sm">Recurring monthly and annual subscriptions</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Monetization Strategy</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center"><span className="text-gold mr-2">•</span>Tiered subscription plans (Basic, Pro, Enterprise)</li>
                      <li className="flex items-center"><span className="text-gold mr-2">•</span>Usage-based add-ons and premium features</li>
                      <li className="flex items-center"><span className="text-gold mr-2">•</span>Professional services and implementation</li>
                      <li className="flex items-center"><span className="text-gold mr-2">•</span>API access and integration partnerships</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Pricing Strategy</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-bold text-navy">$29/mo</div>
                        <div className="text-xs text-gray-500">Basic</div>
                      </div>
                      <div className="text-center p-3 bg-gold bg-opacity-20 rounded-lg">
                        <div className="font-bold text-navy">$99/mo</div>
                        <div className="text-xs text-gray-500">Pro</div>
                      </div>
                      <div className="text-center p-3 bg-navy bg-opacity-10 rounded-lg">
                        <div className="font-bold text-navy">Custom</div>
                        <div className="text-xs text-gray-500">Enterprise</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Key Performance Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Annual Recurring Revenue</span>
                        <span className="font-bold text-gold text-lg">{deal.metrics.revenue}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Monthly Recurring Revenue</span>
                        <span className="font-bold text-navy">${Math.floor(parseInt(deal.metrics.revenue.replace(/[$M,]/g, '')) * 1000000 / 12).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Customer Acquisition Cost</span>
                        <span className="font-bold text-navy">{deal.metrics.cac}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Customer Lifetime Value</span>
                        <span className="font-bold text-navy">{deal.metrics.ltv}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Gross Margin</span>
                        <span className="font-bold text-green-600">{deal.metrics.grossMargin}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Monthly Churn Rate</span>
                        <span className="font-bold text-green-600">{deal.metrics.churnRate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );



      case 'competitor':
        return (
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-navy mb-6">Competitor Analysis & Market Positioning</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-navy mb-4">Direct Competitors</h4>
                  <div className="space-y-4">
                    {deal.competitors.map((competitor, index) => (
                      <div key={competitor.id} className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                        <h5 className="font-bold text-navy mb-2">{competitor.name}</h5>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-gray-600">Funding: <strong className="text-navy">{competitor.funding}</strong></span>
                          <span className="text-gray-600">Valuation: <strong className="text-navy">{competitor.valuation}</strong></span>
                          <span className="text-gray-600">Customers: <strong className="text-navy">{competitor.customers}</strong></span>
                          <span className="text-gray-600">Growth: <strong className="text-green-600">{competitor.growth}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-4">Competitive Positioning</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h5 className="font-semibold text-green-800 mb-2">🟢 Advantages vs. Competitors</h5>
                      <ul className="text-sm text-green-700 space-y-1">
                        {deal.competitive_analysis.advantages.map((advantage, index) => (
                          <li key={index}>• {advantage}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h5 className="font-semibold text-red-800 mb-2">🔴 Competitive Challenges</h5>
                      <ul className="text-sm text-red-700 space-y-1">
                        {deal.competitive_analysis.challenges.map((challenge, index) => (
                          <li key={index}>• {challenge}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold text-navy mb-4">Market Share & Performance Comparison</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-3 font-semibold text-navy">Company</th>
                        <th className="text-left p-3 font-semibold text-navy">Market Share</th>
                        <th className="text-left p-3 font-semibold text-navy">Revenue Growth</th>
                        <th className="text-left p-3 font-semibold text-navy">Customer Satisfaction</th>
                        <th className="text-left p-3 font-semibold text-navy">Technology Score</th>
                        <th className="text-left p-3 font-semibold text-navy">Overall Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 bg-gold bg-opacity-10">
                        <td className="p-3 font-semibold text-navy">{deal.basicInfo.name} (Our Investment)</td>
                        <td className="p-3">{deal.market.market_share}</td>
                        <td className="p-3 text-green-600 font-semibold">{deal.basicInfo.growth}</td>
                        <td className="p-3">{deal.metrics.customer_satisfaction}</td>
                        <td className="p-3 text-green-600">{deal.metrics.technology_score}</td>
                        <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">Strong Buy</span></td>
                      </tr>
                      {deal.competitors.map((competitor, index) => (
                        <tr key={competitor.id} className="border-b border-gray-200">
                          <td className="p-3">{competitor.name}</td>
                          <td className="p-3 font-semibold text-blue-600">{competitor.market_share}</td>
                          <td className="p-3">{competitor.growth}</td>
                          <td className="p-3">{deal.metrics.competitor_avg_satisfaction}</td>
                          <td className="p-3">{deal.metrics.competitor_avg_tech_score}</td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              index === 0 ? 'bg-blue-100 text-blue-800' : 
                              index === 1 ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-green-100 text-green-800'
                            }`}>
                              {index === 0 ? 'Established' : index === 1 ? 'Growing' : 'Rising Star'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-2xl">
                  <h4 className="font-semibold text-navy mb-4">Competitive Strategy</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-blue-800 font-semibold text-sm">Differentiation Focus</p>
                      <p className="text-blue-600 text-xs">{deal.competitive_analysis.competitive_strategy.differentiation_focus}</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 font-semibold text-sm">Cost Leadership</p>
                      <p className="text-green-600 text-xs">{deal.competitive_analysis.competitive_strategy.cost_leadership}</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-purple-800 font-semibold text-sm">Innovation Edge</p>
                      <p className="text-purple-600 text-xs">{deal.competitive_analysis.competitive_strategy.innovation_edge}</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                  <h4 className="font-semibold text-navy mb-4">Market Opportunity</h4>
                  <div className="space-y-3">
                    <div className="text-center p-3 bg-gold bg-opacity-20 rounded-lg">
                      <p className="text-navy font-bold text-lg">{deal.metrics.addressable_market_gap}</p>
                      <p className="text-gray-600 text-xs">Addressable Market Gap</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-navy font-bold text-lg">{deal.metrics.underserved_market_share}</p>
                      <p className="text-gray-600 text-xs">Underserved Market Share</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                  <h4 className="font-semibold text-navy mb-4">Investment Thesis</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-green-600 text-sm">
                      <span className="mr-2">✓</span>
                      <span>Better unit economics</span>
                    </div>
                    <div className="flex items-center text-green-600 text-sm">
                      <span className="mr-2">✓</span>
                      <span>Faster growth trajectory</span>
                    </div>
                    <div className="flex items-center text-green-600 text-sm">
                      <span className="mr-2">✓</span>
                      <span>Strong technology moat</span>
                    </div>
                    <div className="flex items-center text-green-600 text-sm">
                      <span className="mr-2">✓</span>
                      <span>Market timing advantage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-3xl font-bold text-navy mb-8">Leadership Team</h3>
                <div className="space-y-6">
                  {deal.team && deal.team.length > 0 ? (
                    deal.team.map((member, index) => (
                      <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gold hover:bg-opacity-20 transition-all">
                        <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-navy mb-1">{member.name}</h4>
                          <p className="text-gold font-semibold mb-2">{member.role}</p>
                          <p className="text-gray-600 text-sm leading-relaxed">{member.background}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>Team information not available</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-navy mb-6">Equity Split Distribution</h3>
                <div className="relative h-80 mb-6">
                  <canvas ref={equityChartRef} className="w-full h-full"></canvas>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-navy mb-4">Equity Breakdown</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Founders</span>
                      <span className="font-bold text-navy">65%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Employee Stock Options</span>
                      <span className="font-bold text-navy">15%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Investors (Previous Rounds)</span>
                      <span className="font-bold text-navy">12%</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Reserved for Future Funding</span>
                      <span className="font-bold text-gold">8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'devils-advocate':
        return (
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-navy mb-6 flex items-center">
                <span className="mr-3">😈</span>
                Devil's Advocate Analysis - Critical Counter-Arguments
              </h3>
              <div className="bg-red-50 p-4 rounded-lg mb-8">
                <p className="text-red-800 text-sm"><strong>Note:</strong> This analysis presents counter-arguments to challenge founder claims and identify potential blind spots in the investment thesis.</p>
              </div>
              
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-navy mb-4 flex items-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs mr-3">CHALLENGE</span>
                      Growth Claims Analysis
                    </h4>
                    <div className="space-y-4">
                      <div className="p-4 border-l-4 border-red-500 bg-red-50">
                        <h5 className="font-semibold text-red-800 mb-2">Founder Claim: "{deal.growth} YoY Growth"</h5>
                        <p className="text-red-700 text-sm mb-2"><strong>Counter-Argument:</strong></p>
                        <ul className="text-red-600 text-sm space-y-1">
                          <li>• Growth from small base - only {deal.metrics.customers} customers</li>
                          <li>• Unsustainable burn rate of {deal.metrics.burn} monthly</li>
                          <li>• Growth may be artificially inflated by promotional pricing</li>
                          <li>• Market conditions favoring all competitors, not just this company</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 border-l-4 border-red-500 bg-red-50">
                        <h5 className="font-semibold text-red-800 mb-2">Founder Claim: "Market Leading Position"</h5>
                        <p className="text-red-700 text-sm mb-2"><strong>Counter-Argument:</strong></p>
                        <ul className="text-red-600 text-sm space-y-1">
                          <li>• Only ${deal.market.market_share} market share vs market leader's ${deal.metrics.market_leader_share}</li>
                          <li>• Definition of "leading" unclear and possibly misleading</li>
                          <li>• Market position vulnerable to well-funded competitors</li>
                          <li>• Limited geographic presence compared to global players</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-navy mb-4 flex items-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs mr-3">CHALLENGE</span>
                      Financial & Technology Claims
                    </h4>
                    <div className="space-y-4">
                      <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
                        <h5 className="font-semibold text-orange-800 mb-2">Founder Claim: "Superior Unit Economics"</h5>
                        <p className="text-orange-700 text-sm mb-2"><strong>Counter-Argument:</strong></p>
                        <ul className="text-orange-600 text-sm space-y-1">
                          <li>• LTV calculations based on limited customer lifecycle data</li>
                          <li>• CAC may increase significantly in competitive markets</li>
                          <li>• {deal.metrics.grossMargin} margin unsustainable at scale</li>
                          <li>• Hidden costs not reflected in current unit economics</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
                        <h5 className="font-semibold text-orange-800 mb-2">Founder Claim: "Proprietary Technology Advantage"</h5>
                        <p className="text-orange-700 text-sm mb-2"><strong>Counter-Argument:</strong></p>
                        <ul className="text-orange-600 text-sm space-y-1">
                          <li>• Technology stack built on common open-source frameworks</li>
                          <li>• Patents pending, not granted - weak IP protection</li>
                          <li>• Large tech companies can replicate features quickly</li>
                          <li>• No significant technical barriers to entry</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-2xl bg-gray-50">
                  <h4 className="font-semibold text-navy mb-4 flex items-center">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs mr-3">WARNING</span>
                    Critical Risk Factors Often Overlooked
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-white rounded-lg border-l-4 border-yellow-500">
                      <h5 className="font-semibold text-yellow-800 mb-2">Team Dependency Risk</h5>
                      <p className="text-yellow-700 text-sm">Heavy reliance on {deal.team ? deal.team.length : 3} co-founders with no clear succession plan or knowledge transfer systems.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border-l-4 border-yellow-500">
                      <h5 className="font-semibold text-yellow-800 mb-2">Customer Concentration</h5>
                      <p className="text-yellow-700 text-sm">Likely high customer concentration risk with top 10 customers representing majority of revenue.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border-l-4 border-yellow-500">
                      <h5 className="font-semibold text-yellow-800 mb-2">Market Timing</h5>
                      <p className="text-yellow-700 text-sm">Current growth may be timing-dependent; economic downturn could severely impact customer spending.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-navy p-6 rounded-2xl text-white">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <span className="bg-gold text-navy px-2 py-1 rounded-full text-xs mr-3">REALITY CHECK</span>
                    Investment Decision Framework
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gold mb-3">Questions to Validate Claims:</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start"><span className="text-gold mr-2">?</span><span>Can growth be sustained without massive capital injection?</span></li>
                        <li className="flex items-start"><span className="text-gold mr-2">?</span><span>What happens if top 3 competitors decide to compete directly?</span></li>
                        <li className="flex items-start"><span className="text-gold mr-2">?</span><span>Are customer acquisition costs artificially low due to market conditions?</span></li>
                        <li className="flex items-start"><span className="text-gold mr-2">?</span><span>Can the team execute at 10x current scale?</span></li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gold mb-3">Stress Test Scenarios:</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start"><span className="text-gold mr-2">⚠</span><span>Economic recession reducing customer budgets by 40%</span></li>
                        <li className="flex items-start"><span className="text-gold mr-2">⚠</span><span>Major competitor launching similar product with 50% lower pricing</span></li>
                        <li className="flex items-start"><span className="text-gold mr-2">⚠</span><span>Key founder departure during critical growth phase</span></li>
                        <li className="flex items-start"><span className="text-gold mr-2">⚠</span><span>Regulatory changes affecting core business model</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-navy mb-4">🎯 Devil's Advocate Conclusion</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-red-600 mb-1">Medium-High</div>
                      <div className="text-sm text-gray-600">Execution Risk</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-orange-600 mb-1">High</div>
                      <div className="text-sm text-gray-600">Market Risk</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-red-600 mb-1">Critical</div>
                      <div className="text-sm text-gray-600">Due Diligence Needed</div>
                    </div>
                  </div>
                  <p className="text-center mt-4 text-gray-700 text-sm italic">
                    "Every compelling investment story has potential counterarguments. Smart investors investigate both sides before committing capital."
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'risks':
        return (
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-navy mb-6">Risk Assessment & Mitigation Strategies</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-navy mb-4">Market Risks</h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-red-50 rounded-lg">
                        <h5 className="font-semibold text-red-800 mb-2">{deal.risk_factors.market_saturation.title}</h5>
                        <p className="text-red-600 text-sm mb-2">Risk: {deal.risk_factors.market_saturation.risk}</p>
                        <p className="text-gray-600 text-sm"><strong>Mitigation:</strong> {deal.risk_factors.market_saturation.mitigation}</p>
                      </div>
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <h5 className="font-semibold text-yellow-800 mb-2">{deal.risk_factors.economic_downturn.title}</h5>
                        <p className="text-yellow-600 text-sm mb-2">Risk: {deal.risk_factors.economic_downturn.risk}</p>
                        <p className="text-gray-600 text-sm"><strong>Mitigation:</strong> {deal.risk_factors.economic_downturn.mitigation}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-4">Operational Risks</h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <h5 className="font-semibold text-orange-800 mb-2">{deal.risk_factors.key_person_dependency.title}</h5>
                        <p className="text-orange-600 text-sm mb-2">Risk: {deal.risk_factors.key_person_dependency.risk}</p>
                        <p className="text-gray-600 text-sm"><strong>Mitigation:</strong> {deal.risk_factors.key_person_dependency.mitigation}</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h5 className="font-semibold text-blue-800 mb-2">{deal.risk_factors.technology_risks.title}</h5>
                        <p className="text-blue-600 text-sm mb-2">Risk: {deal.risk_factors.technology_risks.risk}</p>
                        <p className="text-gray-600 text-sm"><strong>Mitigation:</strong> {deal.risk_factors.technology_risks.mitigation}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-4">Financial Risks</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg text-center">
                      <h5 className="font-semibold text-navy mb-2">Cash Flow</h5>
                      <p className="text-sm text-gray-600">18 months runway with current burn rate</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg text-center">
                      <h5 className="font-semibold text-navy mb-2">Customer Concentration</h5>
                      <p className="text-sm text-gray-600">Top 5 customers represent {deal.metrics.top_customer_revenue_concentration} of revenue</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg text-center">
                      <h5 className="font-semibold text-navy mb-2">Currency Risk</h5>
                      <p className="text-sm text-gray-600">12% of revenue in foreign currencies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'exit':
        return (
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-navy mb-6">Exit Strategy & Opportunities</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Exit Timeline</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 font-semibold">5-7 Years</p>
                      <p className="text-blue-600 text-sm">Projected timeline for strategic exit</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Potential Exit Valuation</h4>
                    <div className="bg-gold bg-opacity-20 p-4 rounded-lg">
                      <p className="text-navy font-bold text-xl">$800M - $1.2B</p>
                      <p className="text-gray-600 text-sm">Based on comparable transactions and growth projections</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Exit Strategies</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center"><span className="text-gold mr-2">•</span>Strategic acquisition by tech giant</li>
                      <li className="flex items-center"><span className="text-gold mr-2">•</span>IPO on major stock exchange</li>
                      <li className="flex items-center"><span className="text-gold mr-2">•</span>Private equity buyout</li>
                      <li className="flex items-center"><span className="text-gold mr-2">•</span>Management buyout option</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Strategic Acquirers</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-navy">Enterprise Software Leaders</p>
                        <p className="text-sm text-gray-600">Salesforce, Microsoft, Oracle, ServiceNow</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-navy">Cloud Infrastructure</p>
                        <p className="text-sm text-gray-600">AWS, Google Cloud, Azure</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-navy">Private Equity</p>
                        <p className="text-sm text-gray-600">Vista Equity, Thoma Bravo, Insight Partners</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Market Comparables</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Recent SaaS Multiples</span>
                        <span className="font-semibold text-navy">8-12x Revenue</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Growth Premium</span>
                        <span className="font-semibold text-green-600">+25-40%</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Expected IRR</span>
                        <span className="font-semibold text-gold">{deal.metrics.expected_irr_range}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'documents':
        return (
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-navy mb-6">Legal & Compliance</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Incorporation Details</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span>Jurisdiction</span>
                        <span className="font-semibold text-navy">Delaware, USA</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span>Entity Type</span>
                        <span className="font-semibold text-navy">C-Corporation</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Incorporation Date</span>
                        <span className="font-semibold text-navy">{deal.founded}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Intellectual Property</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="font-semibold text-green-800">12 Patents Filed</p>
                        <p className="text-green-600 text-sm">Core technology and algorithms protected</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="font-semibold text-blue-800">Trademark Portfolio</p>
                        <p className="text-blue-600 text-sm">Brand and product names secured globally</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Regulatory Compliance</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>GDPR Compliant</li>
                      <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>CCPA Compliant</li>
                      <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>SOC 2 Type II Certified</li>
                      <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>ISO 27001 Certified</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Legal Structure</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span>Authorized Shares</span>
                        <span className="font-semibold text-navy">10,000,000</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span>Outstanding Shares</span>
                        <span className="font-semibold text-navy">7,500,000</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Option Pool</span>
                        <span className="font-semibold text-navy">15%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Key Legal Documents</h4>
                    <div className="space-y-3">
                      {[
                        { icon: '📄', title: 'Articles of Incorporation', status: 'Current' },
                        { icon: '📊', title: 'Shareholder Agreements', status: 'Updated' },
                        { icon: '⚖️', title: 'Employment Contracts', status: 'Compliant' },
                        { icon: '🔒', title: 'IP Assignment Agreements', status: 'Complete' },
                        { icon: '📋', title: 'Board Resolutions', status: 'Filed' },
                        { icon: '🏛️', title: 'Regulatory Filings', status: 'Current' }
                      ].map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <span className="mr-3 text-lg">{doc.icon}</span>
                            <span className="font-medium text-navy">{doc.title}</span>
                          </div>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{doc.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

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
          <div className={`flex-1 flex flex-col transition-all duration-500 ${showAIPanel ? 'mr-96' : ''} min-w-0`}>
            {/* Dashboard Tabs */}
            <div className="flex space-x-3 px-8 pt-6 border-b border-gray-200 bg-white overflow-x-auto" style={{scrollbarWidth: 'none'}  }>
              {[
                { id: 'overview', label: dashboard.tabs.overview },
                { id: 'market', label: dashboard.tabs.market },
                { id: 'product', label: dashboard.tabs.product },
                { id: 'financials', label: dashboard.tabs.financials },
                { id: 'metrics', label: dashboard.tabs.metrics },
                { id: 'team', label: dashboard.tabs.team },
                { id: 'competitor', label: dashboard.tabs.competitor },
                { id: 'devils-advocate', label: dashboard.tabs.devilsAdvocate },
                { id: 'risks', label: dashboard.tabs.risks },
                { id: 'exit', label: dashboard.tabs.exit },
                { id: 'documents', label: dashboard.tabs.documents }
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
          <div className={`ai-panel bg-navy transition-all duration-500 flex-shrink-0 ${showAIPanel ? 'w-96 max-w-[33vw]' : 'w-0 overflow-hidden'}`}>
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
                    <div className={`text-sm mb-2 font-semibold ${message.type === 'ai' ? 'text-gold' : 'text-navy'}`}>
                      {message.type === 'ai' ? '🤖 AI Assistant' : '👤 You'}
                    </div>
                    <div className={`text-sm leading-relaxed whitespace-pre-line ${message.type === 'ai' ? 'text-white' : 'text-navy'}`}>{message.text}</div>
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
              
              <div className="space-y-3 mb-6">
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
              </div>
              
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
