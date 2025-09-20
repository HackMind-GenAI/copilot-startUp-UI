const DocumentsTab = ({ deal }) => {
  return (
    <div className="space-y-8">
      <div className="glass-card p-8 rounded-2xl">
        <h3 className="text-3xl font-bold text-navy mb-6">Legal & Compliance</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-navy mb-3">Incorporation Details</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Jurisdiction</span>
                  <span className="font-semibold text-navy">Delaware, USA</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Entity Type</span>
                  <span className="font-semibold text-navy">C-Corporation</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Incorporation Date</span>
                  <span className="font-semibold text-navy">{deal.basicInfo.founded}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-3">Intellectual Property</h4>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800">12 Patents Filed</p>
                  <p className="text-green-600 text-sm">Core technology and algorithms protected</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-800">Trademark Portfolio</p>
                  <p className="text-blue-600 text-sm">Brand and product names secured globally</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-3">Regulatory Compliance</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>GDPR Compliant</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>CCPA Compliant</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>SOC 2 Type II Certified</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>ISO 27001 Certified</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-navy mb-3">Legal Structure</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Authorized Shares</span>
                  <span className="font-semibold text-navy">10,000,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Outstanding Shares</span>
                  <span className="font-semibold text-navy">7,500,000</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Option Pool</span>
                  <span className="font-semibold text-navy">15%</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-3">Key Legal Documents</h4>
              <div className="space-y-3">
                {[
                  { icon: '📄', title: 'Articles of Incorporation', status: 'Current' },
                  { icon: '📊', title: 'Shareholder Agreements', status: 'Updated' },
                  { icon: '⚖️', title: 'Employment Contracts', status: 'Compliant' },
                  { icon: '🔒', title: 'IP Assignment Agreements', status: 'Complete' },
                  { icon: '📋', title: 'Board Resolutions', status: 'Filed' },
                  { icon: '🏛️', title: 'Regulatory Filings', status: 'Current' }
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="mr-3 text-lg">{doc.icon}</span>
                      <span className="font-medium text-navy">{doc.title}</span>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{doc.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsTab;
