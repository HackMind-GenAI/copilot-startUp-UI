import { useState } from 'react';
import { appConfig } from '../data/appConfig';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { branding, navigation } = appConfig;

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-black tracking-tight">
            <span className="text-navy">{branding.nameBreakdown.primary}</span>
            <span className="text-gold">{branding.nameBreakdown.secondary}</span>
          </div>
          <div className="hidden md:flex items-center space-x-12">
            {navigation.menuItems.map((item) => (
              <a key={item.id} href={item.href} className="text-navy hover:text-gold transition-colors font-medium">
                {item.label}
              </a>
            ))}
            <button className="bg-navy text-white px-8 py-3 rounded-full hover:bg-gold hover:text-navy transition-all duration-300 font-semibold animate-pulse-gold">
              {navigation.ctaButton}
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
              {navigation.menuItems.map((item) => (
                <a key={item.id} href={item.href} className="text-navy hover:text-gold transition-colors font-medium">
                  {item.label}
                </a>
              ))}
              <button className="bg-navy text-white px-8 py-3 rounded-full hover:bg-gold hover:text-navy transition-all duration-300 font-semibold mt-4">
                {navigation.ctaButton}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
