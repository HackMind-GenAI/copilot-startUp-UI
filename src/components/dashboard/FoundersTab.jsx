import { useState } from 'react';

const FoundersTab = ({ founderData }) => {
  const [expandedCards, setExpandedCards] = useState(new Set(['overview']));
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle card expansion
  const toggleCard = (cardId) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(cardId)) {
      newExpanded.delete(cardId);
    } else {
      newExpanded.add(cardId);
    }
    setExpandedCards(newExpanded);
  };

  // Get risk badge color
  const getRiskBadgeColor = (riskText) => {
    const lowerRisk = riskText?.toLowerCase();
    if (lowerRisk.includes('low') || lowerRisk.includes('medium-low')) {
      return 'bg-green-100 text-green-800 border-green-200';
    } else if (lowerRisk.includes('medium')) {
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    } else if (lowerRisk.includes('high')) {
      return 'bg-red-100 text-red-800 border-red-200';
    }
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  // Generate founder insights
  const generateFounderInsights = () => {
    if (!founderData) return '';
    
    const riskLevel = founderData?.risk?.toLowerCase()?.includes('medium-low') ? 'medium-low risk' :
                     founderData?.risk?.toLowerCase()?.includes('low') ? 'low risk' :
                     founderData?.risk?.toLowerCase()?.includes('medium') ? 'medium risk' : 'high risk';

    const resilience = founderData?.resilienceAndGrit?.toLowerCase()?.includes('high') ? 'high resilience' :
                      founderData?.resilienceAndGrit?.toLowerCase()?.includes('medium') ? 'medium resilience' : 'resilience traits';

    const orientation = founderData?.salesOrProductOriented?.toLowerCase()?.includes('product') ? 'strong product-orientation' :
                       founderData?.salesOrProductOriented?.toLowerCase()?.includes('sales') ? 'sales-focused approach' : 'balanced orientation';

    return `${founderData?.name} shows ${orientation}, ${riskLevel}, and ${resilience}.`;
  };

  // Filter content based on search
  const filterContent = (content) => {
    if (!searchQuery.trim()) return true;
    return content.toLowerCase().includes(searchQuery.toLowerCase());
  };

  // Parse collaboration history
  const parseCollaborationHistory = (workedWithArray = []) => {
    return workedWithArray?.map((collaboration, index) => {
      const text = collaboration?.toLowerCase();
      let type = 'neutral';
      let icon = '🤝';
      
      if (text?.includes('conflict') || text?.includes('disagreement') || text?.includes('failure') || text?.includes('irreconcilable')) {
        type = 'conflict';
        icon = '⚠️';
      } else if (text?.includes('support') || text?.includes('mentor') || text?.includes('collaboration') || text?.includes('successful')) {
        type = 'support';
        icon = '✅';
      }
      
      return { text: collaboration, type, icon, id: index };
    });
  };

  // Download function
  const downloadFounderData = (format) => {
    if (format === 'json') {
      const dataStr = JSON.stringify(founderData, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      const exportFileDefaultName = `founder-data-${founderData?.name?.replace(/\s+/g, '-')?.toLowerCase()}.json`;
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    } else if (format === 'pdf') {
      // Simple text format for PDF simulation
      const content = `FOUNDER ANALYSIS REPORT\n\nName: ${founderData?.name}\n\nRisk Assessment: ${founderData?.risk}\n\nPast Venture Results: ${founderData?.pastVentureResult}\n\nCommunication Style: ${founderData?.communicationStyle}\n\nResilience & Grit: ${founderData?.resilienceAndGrit}\n\nSales/Product Orientation: ${founderData?.salesOrProductOriented}\n\nCollaboration History:\n${founderData?.workedWithInPast?.join('\n\n')}`;
      
      const dataUri = 'data:text/plain;charset=utf-8,'+ encodeURIComponent(content);
      const exportFileDefaultName = `founder-report-${founderData?.name?.replace(/\s+/g, '-')?.toLowerCase()}.txt`;
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    }
  };

  if (!founderData.name) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">👤</div>
          <p className="text-gray-500 text-lg">No founder data available</p>
        </div>
      </div>
    );
  }

  const collaborationHistory = parseCollaborationHistory(founderData?.workedWithInPast);
  
  const cards = [
    {
      id: 'overview',
      title: 'Founder Overview',
      content: founderData?.name,
      type: 'overview'
    },
    {
      id: 'risk',
      title: 'Risk Assessment', 
      content: founderData?.risk,
      type: 'risk'
    },
    {
      id: 'pastVenture',
      title: 'Past Venture Results',
      content: founderData?.pastVentureResult,
      type: 'text'
    },
    {
      id: 'communication',
      title: 'Communication Style',
      content: founderData?.communicationStyle,
      type: 'text'
    },
    {
      id: 'resilience',
      title: 'Resilience & Grit',
      content: founderData?.resilienceAndGrit,
      type: 'text'
    },
    {
      id: 'orientation',
      title: 'Sales or Product Oriented',
      content: founderData?.salesOrProductOriented,
      type: 'text'
    },
    {
      id: 'collaboration',
      title: 'Worked With In Past',
      content: collaborationHistory,
      type: 'collaboration'
    }
  ];

  const filteredCards = cards.filter(card => {
    if (card.type === 'collaboration') {
      return card.content?.some(collab => filterContent(collab?.text));
    }
    return filterContent(card?.content);
  });

  return (
    <div className="space-y-8">
      {/* Founder Insights Summary Panel */}
      <div className="glass-card p-8 rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-bold text-navy flex items-center space-x-3">
            <span className="text-4xl">💡</span>
            <span>Founder Insights</span>
          </h3>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">AI Generated</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-gold/10 to-navy/10 p-6 rounded-xl border border-gold/20">
          <p className="text-lg text-navy leading-relaxed font-medium">
            {generateFounderInsights()}
          </p>
        </div>
      </div>

      {/* Search/Filter Bar */}
      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search founder information..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <button
            onClick={() => setSearchQuery('')}
            className="px-4 py-3 bg-navy text-white rounded-lg hover:bg-navy-light transition-all"
          >
            Clear
          </button>
        </div>
        {searchQuery && (
          <div className="mt-4 text-sm text-gray-600">
            Showing results for: <span className="font-semibold text-navy">"{searchQuery}"</span>
          </div>
        )}
      </div>

      {/* Founder Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <button
              onClick={() => toggleCard(card.id)}
              className="w-full p-6 text-left hover:bg-gray-50 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <h4 className="text-xl font-bold text-navy">{card.title}</h4>
                </div>
                <div className={`transform transition-transform duration-200 ${expandedCards.has(card.id) ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${expandedCards.has(card.id) ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-6 pb-6">
                <div className="border-t border-gray-200 pt-4">
                  {card.type === 'overview' && (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4">
                        {card?.content?.split(' ')?.map(n => n?.[0])?.join('')?.toUpperCase()}
                      </div>
                      <h3 className="text-2xl font-bold text-navy">{card?.content}</h3>
                      <div className="mt-4 flex justify-center">
                        <span className="bg-gold/20 text-navy px-4 py-2 rounded-full text-sm font-semibold">
                          Founder Profile
                        </span>
                      </div>
                    </div>
                  )}

                  {card.type === 'risk' && (
                    <div>
                      <div className="mb-4 flex justify-start">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getRiskBadgeColor(card?.content)}`}>
                          {card?.content?.split('.')?.[0]} {/* First sentence for badge */}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{card?.content}</p>
                    </div>
                  )}

                  {card.type === 'text' && (
                    <div>
                      <p className="text-gray-600 leading-relaxed">{card?.content}</p>
                    </div>
                  )}

                  {card.type === 'collaboration' && (
                    <div className="space-y-4">
                      {card?.content?.map((collab, index) => (
                        <div
                          key={collab?.id}
                          className={`p-4 rounded-lg border-l-4 ${
                            collab?.type === 'conflict' 
                              ? 'bg-red-50 border-red-400' 
                              : collab?.type === 'support' 
                                ? 'bg-green-50 border-green-400' 
                                : 'bg-gray-50 border-gray-400'
                          } hover:shadow-md transition-all duration-200`}
                        >
                          <div className="flex items-start space-x-3">
                            <span className="text-xl flex-shrink-0 mt-1">{collab?.icon}</span>
                            <div className="flex-1">
                              <div className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2 ${
                                collab?.type === 'conflict' 
                                  ? 'bg-red-200 text-red-800' 
                                  : collab?.type === 'support' 
                                    ? 'bg-green-200 text-green-800' 
                                    : 'bg-gray-200 text-gray-800'
                              }`}>
                                {collab?.type === 'conflict' ? 'Challenging Relationship' : 
                                 collab?.type === 'support' ? 'Supportive Relationship' : 'Professional Relationship'}
                              </div>
                              <p className="text-gray-600 leading-relaxed text-sm">{collab?.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Download Section */}
      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-navy mb-2">Export Founder Data</h3>
            <p className="text-gray-600 text-sm">Download the complete founder analysis for your records</p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => downloadFounderData('json')}
              className="flex items-center space-x-2 bg-navy text-white px-4 py-2 rounded-lg hover:bg-navy-light transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>JSON</span>
            </button>
            <button
              onClick={() => downloadFounderData('pdf')}
              className="flex items-center space-x-2 bg-gold text-navy px-4 py-2 rounded-lg hover:bg-yellow-400 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile responsiveness message */}
      <div className="lg:hidden">
        <div className="glass-card p-4 rounded-xl bg-blue-50 border border-blue-200">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-blue-800 text-sm font-medium">Cards optimized for mobile viewing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersTab;
