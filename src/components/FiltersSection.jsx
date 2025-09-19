import { appConfig } from '../data/appConfig';

const FiltersSection = ({ filters, onFilterChange, onClearFilters }) => {
  const handleSelectChange = (filterType) => (e) => {
    onFilterChange(filterType, e.target.value);
  };

  const { categories, stages, regions, sortOptions, clearAllText } = appConfig.filters;

  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <div className="relative filter-dropdown">
            <select 
              value={filters.category}
              onChange={handleSelectChange('category')}
              className="glass-card px-6 py-3 rounded-full text-navy font-medium appearance-none cursor-pointer pr-10 focus:outline-none focus:ring-2 focus:ring-gold w-full"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>{category.label}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          <div className="relative filter-dropdown">
            <select 
              value={filters.stage}
              onChange={handleSelectChange('stage')}
              className="glass-card px-6 py-3 rounded-full text-navy font-medium appearance-none cursor-pointer pr-10 focus:outline-none focus:ring-2 focus:ring-gold w-full"
            >
              {stages.map((stage) => (
                <option key={stage.value} value={stage.value}>{stage.label}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          <div className="relative filter-dropdown">
            <select 
              value={filters.region}
              onChange={handleSelectChange('region')}
              className="glass-card px-6 py-3 rounded-full text-navy font-medium appearance-none cursor-pointer pr-10 focus:outline-none focus:ring-2 focus:ring-gold w-full"
            >
              {regions.map((region) => (
                <option key={region.value} value={region.value}>{region.label}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          <div className="relative filter-dropdown">
            <select 
              value={filters.sort}
              onChange={handleSelectChange('sort')}
              className="glass-card px-6 py-3 rounded-full text-navy font-medium appearance-none cursor-pointer pr-10 focus:outline-none focus:ring-2 focus:ring-gold w-full"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          <button 
            onClick={onClearFilters}
            className="bg-gray-200 text-navy px-6 py-3 rounded-full font-medium hover:bg-navy hover:text-white transition-all duration-300"
          >
            {clearAllText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FiltersSection;
