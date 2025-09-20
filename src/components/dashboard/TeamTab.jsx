import { useRef, useEffect } from 'react';

const TeamTab = ({ deal, chartInstanceRef, createEquityChart }) => {
  const equityChartRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (equityChartRef.current) {
        createEquityChart(equityChartRef, chartInstanceRef);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [createEquityChart, chartInstanceRef]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="text-3xl font-bold text-navy mb-8">Leadership Team</h3>
          <div className="space-y-6">
            {deal.team && deal.team.length > 0 ? (
              deal.team.map((member, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gold hover:bg-opacity-20 transition-all">
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-navy mb-1">{member.name}</h4>
                    <p className="text-gold font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.background}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>Team information not available</p>
              </div>
            )}
          </div>
        </div>
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-navy mb-6">Equity Split Distribution</h3>
          <div className="relative h-80 mb-6">
            <canvas ref={equityChartRef} className="w-full h-full"></canvas>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold text-navy mb-4">Equity Breakdown</h4>
            <div className="space-y-3">
              {deal.equity.breakdown.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">{item.category}</span>
                  <span className={`font-bold ${index === deal.equity.breakdown.length - 1 ? 'text-gold' : 'text-navy'}`}>
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTab;
