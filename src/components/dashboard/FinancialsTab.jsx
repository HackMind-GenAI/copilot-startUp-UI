import { useRef, useEffect } from 'react';

const FinancialsTab = ({ deal, chartInstanceRef, createFinancialChart }) => {
  const financialChartRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (financialChartRef.current) {
        createFinancialChart(financialChartRef, chartInstanceRef);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [createFinancialChart, chartInstanceRef]);

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
};

export default FinancialsTab;
