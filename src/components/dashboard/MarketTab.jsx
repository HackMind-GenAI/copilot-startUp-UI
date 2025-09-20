const MarketTab = ({ deal }) => {
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
};

export default MarketTab;
