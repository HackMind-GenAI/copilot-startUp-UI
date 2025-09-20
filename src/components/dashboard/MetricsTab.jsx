const MetricsTab = ({ deal }) => {
  return (
    <div className="space-y-8">
      <div className="glass-card p-8 rounded-2xl">
        <h3 className="text-3xl font-bold text-navy mb-6">Business Model & Revenue Strategy</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-navy mb-3">Revenue Type</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-semibold">{deal.business_model?.revenue_type?.type}</p>
                <p className="text-blue-600 text-sm">{deal.business_model?.revenue_type?.description}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-3">Monetization Strategy</h4>
              <ul className="space-y-2 text-gray-600">
                {deal.business_model?.monetization_strategy?.map((strategy, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-gold mr-2">•</span>
                    {strategy}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-3">Pricing Strategy</h4>
              <div className="grid grid-cols-3 gap-3">
                {deal.business_model?.pricing_strategy?.map((tier, index) => (
                  <div key={index} className={`text-center p-3 rounded-lg ${
                    index === 1 ? 'bg-gold bg-opacity-20' : 
                    index === 2 ? 'bg-navy bg-opacity-10' : 'bg-gray-50'
                  }`}>
                    <div className="font-bold text-navy">{tier.price}</div>
                    <div className="text-xs text-gray-500">{tier.tier}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-navy mb-3">Key Performance Metrics</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Annual Recurring Revenue</span>
                  <span className="font-bold text-gold text-lg">{deal.metrics?.revenue}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Monthly Recurring Revenue</span>
                  <span className="font-bold text-navy">${deal.metrics?.revenue ? Math.floor(parseInt(deal.metrics.revenue.replace(/[$M,]/g, '')) * 1000000 / 12).toLocaleString() : 'N/A'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Customer Acquisition Cost</span>
                  <span className="font-bold text-navy">{deal.metrics?.cac}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Customer Lifetime Value</span>
                  <span className="font-bold text-navy">{deal.metrics?.ltv}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Gross Margin</span>
                  <span className="font-bold text-green-600">{deal.metrics?.grossMargin}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Monthly Churn Rate</span>
                  <span className="font-bold text-green-600">{deal.metrics?.churnRate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsTab;
