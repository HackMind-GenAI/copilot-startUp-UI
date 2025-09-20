const DocumentsTab = ({ deal }) => {
  const legalData = deal.legal;
  
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
                  <span className="font-semibold text-navy">{legalData.incorporation.jurisdiction}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Entity Type</span>
                  <span className="font-semibold text-navy">{legalData.incorporation.entity_type}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Incorporation Date</span>
                  <span className="font-semibold text-navy">{legalData.incorporation.incorporation_date}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-3">Intellectual Property</h4>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800">{legalData.intellectual_property.patents_filed}</p>
                  <p className="text-green-600 text-sm">{legalData.intellectual_property.patent_description}</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-800">Trademark Portfolio</p>
                  <p className="text-blue-600 text-sm">{legalData.intellectual_property.trademarks}</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-3">Regulatory Compliance</h4>
              <ul className="space-y-2 text-gray-600">
                {legalData.regulatory_compliance.map((compliance, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>{compliance}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-navy mb-3">Legal Structure</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Authorized Shares</span>
                  <span className="font-semibold text-navy">{legalData.legal_structure.authorized_shares}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Outstanding Shares</span>
                  <span className="font-semibold text-navy">{legalData.legal_structure.outstanding_shares}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Option Pool</span>
                  <span className="font-semibold text-navy">{legalData.legal_structure.option_pool}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-3">Key Legal Documents</h4>
              <div className="space-y-3">
                {legalData.key_documents.map((doc, index) => (
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
