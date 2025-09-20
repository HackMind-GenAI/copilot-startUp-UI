import { useState } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import FiltersSection from './components/FiltersSection'
import DealsSection from './components/DealsSection'
import CategoriesSection from './components/CategoriesSection'
import TrendingSection from './components/TrendingSection'
import DashboardOverlay from './components/DashboardOverlay'
import { getCompanyById } from './data/companiesData'

function App() {
  const [filters, setFilters] = useState({
    category: 'all',
    stage: 'all',
    region: 'all',
    sort: 'newest'
  });

  // Company selection state
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

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

  // Handle company selection
  const handleCompanySelect = (companyId) => {
    setSelectedCompanyId(companyId);
    setIsDashboardOpen(true);
  };

  // Handle dashboard close
  const handleDashboardClose = () => {
    setIsDashboardOpen(false);
    setSelectedCompanyId(null);
  };

  // Get selected company data
  const selectedCompanyData = selectedCompanyId ? getCompanyById(selectedCompanyId) : null;

  return (
    <div className="bg-white text-navy font-display overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FiltersSection 
        filters={filters} 
        onFilterChange={handleFilterChange} 
        onClearFilters={clearFilters} 
      />
      <DealsSection 
        filters={filters} 
        onCompanySelect={handleCompanySelect}
      />
      <CategoriesSection />
      <TrendingSection />
      
      {/* Dashboard Overlay - Only render when company is selected */}
      {isDashboardOpen && selectedCompanyData && (
        <DashboardOverlay 
          companyData={selectedCompanyData}
          onClose={handleDashboardClose}
        />
      )}
    </div>
  )
}

export default App
