import { appConfig } from '../data/appConfig';

const HeroSection = () => {
  const scrollToDeals = () => {
    document.getElementById('deals')?.scrollIntoView({ behavior: 'smooth' });
  };

  const { hero } = appConfig.sections;

  return (
    <section className="min-h-screen flex items-center justify-center relative hero-gradient">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold opacity-5 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-navy opacity-5 rounded-full animate-float" style={{animationDelay: '-3s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gold opacity-10 rounded-full animate-float" style={{animationDelay: '-1.5s'}}></div>
      </div>
      
      <div className="text-center z-10 px-8 max-w-6xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-black text-navy mb-8 leading-none tracking-tight">
          {hero.title}<br />
          <span className="text-gold animate-glow">{hero.titleHighlight}</span>
        </h1>
        <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          {hero.subtitle}
        </p>
        <button 
          onClick={scrollToDeals} 
          className="bg-navy text-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-gold hover:text-navy transition-all duration-500 transform hover:scale-105 shadow-2xl glow-border"
        >
          {hero.ctaText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
