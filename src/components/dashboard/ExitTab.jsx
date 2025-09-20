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
};

export default ExitTab;
