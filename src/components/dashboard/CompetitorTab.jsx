const CompetitorTab = ({ deal }) => {
  return (
    <div className="space-y-8">
      <div className="glass-card p-8 rounded-2xl">
        <h3 className="text-3xl font-bold text-navy mb-6">Competitor Analysis & Market Positioning</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-navy mb-4">Direct Competitors</h4>
            <div className="space-y-4">
              {deal.competitor.direct_competitors.map((competitor, index) => (
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
                  {deal.competitor.analysis.advantages.map((advantage, index) => (
                    <li key={index}>• {advantage}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">🔴 Competitive Challenges</h5>
                <ul className="text-sm text-red-700 space-y-1">
                  {deal.competitor.analysis.challenges.map((challenge, index) => (
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
                {deal.competitor.direct_competitors.map((competitor, index) => (
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
                <p className="text-blue-600 text-xs">{deal.competitor.analysis.competitive_strategy.differentiation_focus}</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-green-800 font-semibold text-sm">Cost Leadership</p>
                <p className="text-green-600 text-xs">{deal.competitor.analysis.competitive_strategy.cost_leadership}</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-purple-800 font-semibold text-sm">Innovation Edge</p>
                <p className="text-purple-600 text-xs">{deal.competitor.analysis.competitive_strategy.innovation_edge}</p>
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
};

export default CompetitorTab;
