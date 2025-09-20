const ExitTab = ({ deal }) => {
  return (
    <div className="space-y-8">
      <div className="glass-card p-8 rounded-2xl">
        <h3 className="text-3xl font-bold text-navy mb-6">Exit Strategy & Opportunities</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-navy mb-3">Exit Timeline</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-semibold">{deal.exit.timeline}</p>
                <p className="text-blue-600 text-sm">{deal.exit.timeline_description}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-3">Potential Exit Valuation</h4>
              <div className="bg-gold bg-opacity-20 p-4 rounded-lg">
                <p className="text-navy font-bold text-xl">{deal.exit.potential_valuation}</p>
                <p className="text-gray-600 text-sm">{deal.exit.valuation_description}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-3">Exit Strategies</h4>
              <ul className="space-y-2 text-gray-600">
                {deal.exit.exit_options.map((option, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-gold mr-2">•</span>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-navy mb-3">Strategic Acquirers</h4>
              <div className="space-y-3">
                {deal.exit.strategic_acquirers.map((acquirer, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-navy">{acquirer.category}</p>
                    <p className="text-sm text-gray-600">{acquirer.companies}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-3">Market Comparables</h4>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Recent Market Multiples</span>
                  <span className="font-semibold text-navy">{deal.exit.market_multiples.revenue_multiple}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Growth Premium</span>
                  <span className="font-semibold text-green-600">{deal.exit.market_multiples.growth_premium}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Recent Comparables</span>
                  <span className="font-semibold text-blue-600 text-xs">{deal.exit.market_multiples.recent_comparables}</span>
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
};

export default ExitTab;
