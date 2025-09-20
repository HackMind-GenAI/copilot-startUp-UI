const RisksTab = ({ deal }) => {
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
};

export default RisksTab;
