import Chart from 'chart.js/auto';

export const createRevenueChart = (revenueChartRef, chartInstanceRef, deal) => {
  if (chartInstanceRef.current) {
    chartInstanceRef.current.destroy();
  }

  if (!revenueChartRef.current) return;

  const ctx = revenueChartRef.current.getContext('2d');
  chartInstanceRef.current = new Chart(ctx, {
    type: 'line',
    data: {
      labels: deal.financials.labels,
      datasets: [{
        label: 'Revenue ($M)',
        data: deal.financials.revenue,
        borderColor: '#fbbf24',
        backgroundColor: 'rgba(251, 191, 36, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#fbbf24',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0,0,0,0.1)'
          },
          ticks: {
            callback: function(value) {
              return '$' + value + 'M';
            }
          }
        },
        x: {
          grid: {
            color: 'rgba(0,0,0,0.1)'
          }
        }
      }
    }
  });
};

export const createFinancialChart = (financialChartRef, chartInstanceRef, deal) => {
  if (chartInstanceRef.current) {
    chartInstanceRef.current.destroy();
  }

  if (!financialChartRef.current) return;

  const ctx = financialChartRef.current.getContext('2d');
  chartInstanceRef.current = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: deal.financials.labels,
      datasets: [{
        label: 'Revenue',
        data: deal.financials.revenue,
        backgroundColor: 'rgba(251, 191, 36, 0.8)',
        borderColor: '#fbbf24',
        borderWidth: 1
      }, {
        label: 'Expenses',
        data: deal.financials.expenses,
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        borderColor: '#0f172a',
        borderWidth: 1
      }, {
        label: 'Profit',
        data: deal.financials.profit,
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: '#22c55e',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0,0,0,0.1)'
          },
          ticks: {
            callback: function(value) {
              return '$' + value + 'M';
            }
          }
        },
        x: {
          grid: {
            color: 'rgba(0,0,0,0.1)'
          }
        }
      }
    }
  });
};

export const createEquityChart = (equityChartRef, chartInstanceRef, deal) => {
  if (chartInstanceRef.current) {
    chartInstanceRef.current.destroy();
  }

  if (!equityChartRef.current) return;

  const ctx = equityChartRef.current.getContext('2d');
  chartInstanceRef.current = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: deal.equity.breakdown.map(item => item.category),
      datasets: [{
        data: deal.equity.breakdown.map(item => item.percentage),
        backgroundColor: deal.equity.breakdown.map(item => item.color),
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            font: {
              size: 12
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.label + ': ' + context.parsed + '%';
            }
          }
        }
      },
      layout: {
        padding: 10
      }
    }
  });
};
