import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const OverviewTab = ({ deal, dashboard, chartInstanceRef, createRevenueChart }) => {
  const revenueChartRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (revenueChartRef.current) {
        createRevenueChart(revenueChartRef, chartInstanceRef);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [createRevenueChart, chartInstanceRef]);

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
};

export default OverviewTab;
