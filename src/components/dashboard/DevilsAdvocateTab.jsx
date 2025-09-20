const DevilsAdvocateTab = ({ deal }) => {
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
                    <li>• Only {deal.market.market_share} market share vs market leader's {deal.metrics.market_leader_share}</li>
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
};

export default DevilsAdvocateTab;
