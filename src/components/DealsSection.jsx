import { useState, useEffect } from 'react';
import DealCard from './DealCard';
import { getAllCompanies } from '../data/companiesData';
import { appConfig } from '../data/appConfig';

const DealsSection = ({ filters, onCompanySelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredDeals, setFilteredDeals] = useState([]);
  
  // Get all companies data dynamically
  const allDeals = getAllCompanies();

  useEffect(() => {
    let filtered = allDeals;

    if (filters.category !== 'all') {
      filtered = filtered.filter(deal => deal.sector === filters.category);
    }
    if (filters.stage !== 'all') {
      filtered = filtered.filter(deal => deal.stage === filters.stage);
    }
    if (filters.region !== 'all') {
      filtered = filtered.filter(deal => {
        // Map headquarters to regions
        const regionMap = {
          'north-america': ['San Francisco, CA', 'Austin, TX', 'New York, NY'],
          'europe': ['Cambridge, UK', 'Zurich, Switzerland'],
          'asia': ['Singapore', 'Tokyo, Japan', 'Seoul, South Korea']
        };
        return regionMap[filters.region]?.some(city => deal.headquarters.includes(city.split(',')[0]));
      });
    }

    // Sort deals
    if (filters.sort === 'valuation') {
      filtered = filtered.sort((a, b) => {
        const aVal = parseInt(a.valuation.replace(/[$M]/g, ''));
        const bVal = parseInt(b.valuation.replace(/[$M]/g, ''));
        return bVal - aVal;
      });
    } else if (filters.sort === 'growth') {
      filtered = filtered.sort((a, b) => {
        const aGrowth = parseInt(a.growth.replace(/[%+\s\w]/g, ''));
        const bGrowth = parseInt(b.growth.replace(/[%+\s\w]/g, ''));
        return bGrowth - aGrowth;
      });
    } else {
      // Sort by newest (default order in array)
      filtered = [...filtered];
    }

    setFilteredDeals(filtered);
    setCurrentIndex(0);
  }, [filters, allDeals]);

  const nextDeals = () => {
    if (currentIndex < filteredDeals.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevDeals = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDealClick = (deal) => {
    onCompanySelect(deal.id);
  };

  const { deals } = appConfig.sections;

  return (
    <>
      <section id="deals" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-navy mb-6">{deals.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {deals.subtitle}
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-x-auto pb-8">
              <div 
                className="flex space-x-8 px-4 transition-transform duration-500 ease-in-out" 
                style={{
                  transform: `translateX(-${currentIndex * 384}px)`,
                  minWidth: 'max-content'
                }}
              >
                {filteredDeals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} onClick={() => handleDealClick(deal)} />
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            {filteredDeals.length > 3 && (
              <>
                <button 
                  onClick={prevDeals}
                  disabled={currentIndex === 0}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gold hover:text-white transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button 
                  onClick={nextDeals}
                  disabled={currentIndex >= filteredDeals.length - 3}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gold hover:text-white transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </>
            )}
          </div>
          
          {/* Results counter */}
          <div className="text-center mt-8">
            <p className="text-gray-600 font-medium">
              Showing {filteredDeals.length} of {allDeals.length} investment opportunities
            </p>
          </div>
        </div>
      </section>


    </>
  );
};

export default DealsSection;
