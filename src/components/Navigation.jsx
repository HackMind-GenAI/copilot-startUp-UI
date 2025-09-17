import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-black tracking-tight">
            <span className="text-navy">VENTURE</span>
            <span className="text-gold">LENS</span>
          </div>
          <div className="hidden md:flex items-center space-x-12">
            <a href="#" className="text-navy hover:text-gold transition-colors font-medium">Portfolio</a>
            <a href="#" className="text-navy hover:text-gold transition-colors font-medium">Research</a>
            <a href="#" className="text-navy hover:text-gold transition-colors font-medium">Markets</a>
            <button className="bg-navy text-white px-8 py-3 rounded-full hover:bg-gold hover:text-navy transition-all duration-300 font-semibold animate-pulse-gold">
              Access Portal
            </button>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy hover:text-gold transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-navy hover:text-gold transition-colors font-medium">Portfolio</a>
              <a href="#" className="text-navy hover:text-gold transition-colors font-medium">Research</a>
              <a href="#" className="text-navy hover:text-gold transition-colors font-medium">Markets</a>
              <button className="bg-navy text-white px-8 py-3 rounded-full hover:bg-gold hover:text-navy transition-all duration-300 font-semibold mt-4">
                Access Portal
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
