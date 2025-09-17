import { useState } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import FiltersSection from './components/FiltersSection'
import DealsSection from './components/DealsSection'
import CategoriesSection from './components/CategoriesSection'
import TrendingSection from './components/TrendingSection'

function App() {
  const [filters, setFilters] = useState({
    category: 'all',
    stage: 'all',
    region: 'all',
    sort: 'newest'
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      stage: 'all',
      region: 'all',
      sort: 'newest'
    });
  };

  return (
    <div className="bg-white text-navy font-display overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FiltersSection 
        filters={filters} 
        onFilterChange={handleFilterChange} 
        onClearFilters={clearFilters} 
      />
      <DealsSection filters={filters} />
      <CategoriesSection />
      <TrendingSection />
    </div>
  )
}

export default App
