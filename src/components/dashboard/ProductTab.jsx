const ProductTab = ({ deal }) => {
  return (
    <div className="space-y-8">
      <div className="glass-card p-8 rounded-2xl">
        <h3 className="text-3xl font-bold text-navy mb-6">Product / Service Overview</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-navy mb-3">Product Description</h4>
              <p className="text-gray-600 leading-relaxed">{deal.product.description}</p>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-3">Key Features</h4>
              <ul className="space-y-2 text-gray-600">
                {deal.product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-gold mr-2">•</span>{feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-navy mb-3">Competitive Advantage</h4>
              <ul className="space-y-2 text-gray-600">
                {deal.product.competitive_advantages.map((advantage, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>{advantage}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-3">Development Stage</h4>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">{deal.product.development_stage}</p>
                <p className="text-green-600 text-sm">Full product launch with enterprise customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
