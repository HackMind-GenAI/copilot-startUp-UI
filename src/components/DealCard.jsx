const DealCard = ({ deal, onClick }) => {
  return (
    <div 
      className="deal-card glass-card p-8 rounded-3xl card-hover cursor-pointer glow-border min-w-[350px] max-w-[400px]"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">{deal.logo}</div>
          <div>
            <div className="bg-gold bg-opacity-20 text-gold px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
              {deal.sector}
            </div>
          </div>
        </div>
        <div className="bg-navy bg-opacity-10 text-navy px-3 py-1 rounded-full text-xs font-semibold">
          {deal.stage.replace('-', ' ').toUpperCase()}
        </div>
      </div>
      
      <h3 className="text-3xl font-black text-navy mb-3">{deal.name}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed text-sm">{deal.description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-xl font-bold text-navy">{deal.valuation}</div>
          <div className="text-xs text-gray-500">Valuation</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-xl font-bold text-gold">{deal.growth}</div>
          <div className="text-xs text-gray-500">Growth Rate</div>
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Revenue</span>
          <span className="font-semibold text-navy">{deal.metrics?.revenue || 'N/A'}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Customers</span>
          <span className="font-semibold text-navy">{deal.metrics?.customers || 'N/A'}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Team Size</span>
          <span className="font-semibold text-navy">{deal.employees || 'N/A'}</span>
        </div>
      </div>
      
      <button className="w-full bg-navy text-white py-4 rounded-2xl font-bold hover:bg-gold hover:text-navy transition-all duration-300 transform hover:scale-105">
        View Investment Memo
      </button>
    </div>
  );
};

export default DealCard;
