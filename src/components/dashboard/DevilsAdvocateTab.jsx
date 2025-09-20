const DevilsAdvocateTab = ({ deal, apiResponse }) => {
  // Use API response data if available, otherwise fallback to deal data
  const analysisData = apiResponse || {
    restated_input: {
      founder_claim: deal?.basicInfo?.description || "No founder claim available",
      ai_restated: "Analysis pending"
    },
    counter_arguments: [],
    risk_assessment: {
      overall_risk_score: 5,
      regulatory: { description: "Standard regulatory considerations", risk_score: 5, financial_impact: "Standard impact", trend: "Stable" },
      privacy: { description: "Standard privacy considerations", risk_score: 5, financial_impact: "Standard impact", trend: "Stable" },
      market: { description: "Standard market considerations", risk_score: 5, financial_impact: "Standard impact", trend: "Stable" },
      execution: { description: "Standard execution considerations", risk_score: 5, financial_impact: "Standard impact", trend: "Stable" }
    },
    alternative_perspectives: [],
    data_consistency_check: {
      missing_fields: [],
      inconsistencies: [],
      data_quality_score: 50
    },
    data_mismatches: [],
    evidence_strength: {
      supporting: [],
      weak: [],
      strength_score: 5,
      distribution: { supporting: 50, weak: 50 }
    },
    improvements: [],
    overall_suggestion: {
      summary: "Analysis in progress...",
      confidence_score: 5,
      investor_lens: "Proceed Cautiously",
      red_flag_alerts: []
    },
    investor_questions: [],
    loop_hole_severity_index: 0.5
  };

  // Helper functions for color mapping
  const getSeverityColor = (severity) => {
    switch (severity?.toLowerCase()) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-500';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-500';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-500';
      case 'low': return 'bg-green-100 text-green-800 border-green-500';
      default: return 'bg-gray-100 text-gray-800 border-gray-500';
    }
  };

  const getInvestorLensColor = (lens) => {
    switch (lens?.toLowerCase()) {
      case 'proceed': return 'bg-green-100 text-green-800';
      case 'proceed cautiously': return 'bg-yellow-100 text-yellow-800';
      case 'reject': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUpsideColor = (upside) => {
    switch (upside?.toLowerCase()) {
      case 'large': return 'bg-green-100 text-green-800';
      case 'high': return 'bg-yellow-100 text-yellow-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend?.toLowerCase()) {
      case 'increasing': return '↗️';
      case 'decreasing': return '↘️';
      case 'stable': return '→';
      default: return '→';
    }
  };

  return (
    <div className="space-y-8">
      <div className="glass-card p-8 rounded-2xl">
        <h3 className="text-3xl font-bold text-navy mb-6 flex items-center">
          <span className="mr-3">😈</span>
          Devil's Advocate Analysis - Critical Counter-Arguments
        </h3>
        
        {/* Top Banner with Summary and Confidence */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl mb-8">
          {/* Red Flag Alerts */}
          {analysisData.overall_suggestion.red_flag_alerts && analysisData.overall_suggestion.red_flag_alerts.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {analysisData.overall_suggestion.red_flag_alerts.map((alert, index) => (
                <div key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {alert}
                </div>
              ))}
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-navy mb-2">Analysis Summary</h4>
              <p className="text-gray-700 mb-4">{analysisData.overall_suggestion.summary}</p>
              <div className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold ${getInvestorLensColor(analysisData.overall_suggestion.investor_lens)}`}>
                {analysisData.overall_suggestion.investor_lens}
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-navy mb-2">Confidence Score</h4>
              <div className="relative w-24 h-24 mx-auto">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-gray-200" strokeWidth="2"/>
                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-gold" strokeWidth="2" 
                    strokeDasharray={`${analysisData.overall_suggestion.confidence_score * 10}, 100`}/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-navy">{analysisData.overall_suggestion.confidence_score}/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          {/* Restated Input Comparison */}
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold text-navy mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mr-3">INPUT ANALYSIS</span>
              Founder Claim vs AI Interpretation
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <h5 className="font-semibold text-blue-800 mb-2">Original Founder Claim</h5>
                <p className="text-gray-700 text-sm">{analysisData.restated_input.founder_claim}</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <h5 className="font-semibold text-blue-800 mb-2">AI Restated</h5>
                <p className="text-blue-700 text-sm">{analysisData.restated_input.ai_restated}</p>
              </div>
            </div>
          </div>

          {/* Counter Arguments */}
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold text-navy mb-4 flex items-center">
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs mr-3">COUNTER ARGUMENTS</span>
              Critical Challenges to Founder Claims
            </h4>
            {analysisData.counter_arguments && analysisData.counter_arguments.length > 0 ? (
              <div className="space-y-4">
                {analysisData.counter_arguments.map((arg, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${getSeverityColor(arg.probability_validity)}`}>
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm font-medium flex-1">{arg.point}</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ml-2 ${getSeverityColor(arg.probability_validity)}`}>
                        {arg.probability_validity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No counter-arguments available</p>
            )}
          </div>

          {/* Risk Assessment Heatmap */}
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold text-navy mb-4 flex items-center">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs mr-3">RISK ASSESSMENT</span>
              Risk Categories Analysis
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {['regulatory', 'privacy', 'market', 'execution'].map((category) => {
                const risk = analysisData.risk_assessment[category] || {};
                const score = risk.risk_score || 0;
                return (
                  <div key={category} className="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-gold transition-all">
                    <div className="text-center mb-3">
                      <h5 className="font-semibold text-navy capitalize mb-1">{category}</h5>
                      <div className="text-2xl font-bold text-navy mb-1">{score}/10</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div 
                        className={`h-2 rounded-full ${score >= 7 ? 'bg-red-500' : score >= 5 ? 'bg-yellow-500' : 'bg-green-500'}`}
                        style={{width: `${score * 10}%`}}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{risk.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Impact: {risk.financial_impact}</span>
                      <span className="flex items-center">
                        {getTrendIcon(risk.trend)} <span className="ml-1">{risk.trend}</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center p-4 bg-navy rounded-lg text-white">
              <div className="text-3xl font-bold mb-1">{analysisData.risk_assessment.overall_risk_score}/10</div>
              <div className="text-gold font-semibold">Overall Risk Score</div>
            </div>
          </div>

          {/* Alternative Perspectives */}
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold text-navy mb-4 flex items-center">
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs mr-3">ALTERNATIVES</span>
              Strategic Pivots & Alternative Approaches
            </h4>
            {analysisData.alternative_perspectives && analysisData.alternative_perspectives.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysisData.alternative_perspectives.map((perspective, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-purple-300 transition-all">
                    <p className="text-gray-700 text-sm mb-3">{perspective.strategy}</p>
                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getUpsideColor(perspective.potential_upside)}`}>
                      {perspective.potential_upside} Upside
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No alternative perspectives available</p>
            )}
          </div>

          {/* Data Consistency Check */}
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold text-navy mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs mr-3">DATA QUALITY</span>
              Information Consistency Analysis
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-orange-800 mb-3">⚠️ Missing Information</h5>
                {analysisData.data_consistency_check.missing_fields && analysisData.data_consistency_check.missing_fields.length > 0 ? (
                  <ul className="space-y-2 text-sm">
                    {analysisData.data_consistency_check.missing_fields.map((field, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 mr-2">⚠️</span>
                        <span className="text-gray-700">{field}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm italic">No missing fields identified</p>
                )}
                
                <h5 className="font-semibold text-red-800 mb-3 mt-6">❌ Inconsistencies</h5>
                {analysisData.data_consistency_check.inconsistencies && analysisData.data_consistency_check.inconsistencies.length > 0 ? (
                  <ul className="space-y-2 text-sm">
                    {analysisData.data_consistency_check.inconsistencies.map((inconsistency, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">❌</span>
                        <span className="text-gray-700">{inconsistency}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm italic">No inconsistencies identified</p>
                )}
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <h5 className="font-semibold text-navy mb-4">Data Quality Score</h5>
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-gray-200" strokeWidth="3"/>
                    <circle cx="18" cy="18" r="16" fill="none" 
                      className={`${analysisData.data_consistency_check.data_quality_score >= 70 ? 'stroke-green-500' : 
                        analysisData.data_consistency_check.data_quality_score >= 50 ? 'stroke-yellow-500' : 'stroke-red-500'}`} 
                      strokeWidth="3" 
                      strokeDasharray={`${analysisData.data_consistency_check.data_quality_score}, 100`}/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-navy">{analysisData.data_consistency_check.data_quality_score}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Mismatches */}
          {analysisData.data_mismatches && analysisData.data_mismatches.length > 0 && (
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="font-semibold text-navy mb-4 flex items-center">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs mr-3">MISMATCHES</span>
                Critical Data Contradictions
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-3 font-semibold text-navy">Claim</th>
                      <th className="text-left p-3 font-semibold text-navy">Issue Identified</th>
                      <th className="text-left p-3 font-semibold text-navy">Severity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analysisData.data_mismatches.map((mismatch, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-3 text-sm text-gray-700">{mismatch.claim}</td>
                        <td className="p-3 text-sm text-gray-700">{mismatch.issue}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getSeverityColor(mismatch.severity)}`}>
                            {mismatch.severity}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Evidence Strength Analysis */}
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold text-navy mb-4 flex items-center">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mr-3">EVIDENCE</span>
              Supporting vs Weak Evidence Analysis
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="font-semibold text-green-800 mb-3">✅ Supporting Evidence</h5>
                {analysisData.evidence_strength.supporting && analysisData.evidence_strength.supporting.length > 0 ? (
                  <ul className="space-y-2 text-sm">
                    {analysisData.evidence_strength.supporting.map((evidence, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <div>
                          <span className="text-gray-700">{evidence.point}</span>
                          <span className={`ml-2 px-2 py-1 rounded text-xs ${
                            evidence.confidence === 'High' ? 'bg-green-100 text-green-800' :
                            evidence.confidence === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {evidence.confidence}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm italic">No supporting evidence available</p>
                )}
              </div>
              
              <div>
                <h5 className="font-semibold text-red-800 mb-3">❌ Weak Evidence</h5>
                {analysisData.evidence_strength.weak && analysisData.evidence_strength.weak.length > 0 ? (
                  <ul className="space-y-2 text-sm">
                    {analysisData.evidence_strength.weak.map((evidence, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">❌</span>
                        <div>
                          <span className="text-gray-700">{evidence.point}</span>
                          <span className={`ml-2 px-2 py-1 rounded text-xs ${
                            evidence.confidence === 'High' ? 'bg-red-100 text-red-800' :
                            evidence.confidence === 'Medium' ? 'bg-orange-100 text-orange-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {evidence.confidence}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm italic">No weak evidence identified</p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="text-center">
                <h5 className="font-semibold text-navy mb-2">Evidence Strength Score</h5>
                <div className="text-3xl font-bold text-navy mb-1">{analysisData.evidence_strength.strength_score}/10</div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${
                      analysisData.evidence_strength.strength_score >= 7 ? 'bg-green-500' :
                      analysisData.evidence_strength.strength_score >= 5 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{width: `${analysisData.evidence_strength.strength_score * 10}%`}}
                  ></div>
                </div>
              </div>
              
              {analysisData.evidence_strength.distribution && (
                <div className="text-center">
                  <h5 className="font-semibold text-navy mb-2">Evidence Distribution</h5>
                  <div className="relative w-24 h-24 mx-auto">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" className="stroke-green-200" strokeWidth="3"/>
                      <circle cx="18" cy="18" r="16" fill="none" className="stroke-green-500" strokeWidth="3" 
                        strokeDasharray={`${analysisData.evidence_strength.distribution.supporting}, 100`}/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xs font-semibold text-green-600">{analysisData.evidence_strength.distribution.supporting}%</div>
                        <div className="text-xs text-gray-500">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Improvements Recommendations */}
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold text-navy mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mr-3">IMPROVEMENTS</span>
              Recommended Actions for Investment Readiness
            </h4>
            {analysisData.improvements && analysisData.improvements.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysisData.improvements.map((improvement, index) => (
                  <div key={index} className={`p-4 rounded-lg border-2 ${
                    improvement.effort === 'Low' && improvement.impact === 'High' ? 
                    'border-gold bg-gold bg-opacity-10' : 'border-gray-200 bg-white'
                  } hover:border-blue-300 transition-all`}>
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm text-gray-700 flex-1">{improvement.action}</p>
                      {improvement.effort === 'Low' && improvement.impact === 'High' && (
                        <span className="bg-gold text-navy px-2 py-1 rounded text-xs font-semibold ml-2">
                          Quick Win
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        improvement.effort === 'High' ? 'bg-red-100 text-red-800' :
                        improvement.effort === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {improvement.effort} Effort
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        improvement.impact === 'High' ? 'bg-green-100 text-green-800' :
                        improvement.impact === 'Medium' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {improvement.impact} Impact
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No improvement recommendations available</p>
            )}
          </div>

          {/* Investor Questions */}
          <div className="bg-navy p-6 rounded-2xl text-white">
            <h4 className="font-semibold mb-4 flex items-center">
              <span className="bg-gold text-navy px-2 py-1 rounded-full text-xs mr-3">INVESTOR Q&A</span>
              Critical Questions for Due Diligence
            </h4>
            {analysisData.investor_questions && analysisData.investor_questions.length > 0 ? (
              <ul className="space-y-3 text-sm">
                {analysisData.investor_questions.map((question, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold mr-3 font-bold">{index + 1}.</span>
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-300 italic">No investor questions available</p>
            )}
          </div>

          {/* Loop Hole Severity Index */}
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold text-navy mb-4 flex items-center">
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs mr-3">SEVERITY INDEX</span>
              Loop Hole Severity Assessment
            </h4>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-gray-200" strokeWidth="4"/>
                  <circle cx="18" cy="18" r="16" fill="none" 
                    className={`${analysisData.loop_hole_severity_index >= 0.7 ? 'stroke-red-500' : 
                      analysisData.loop_hole_severity_index >= 0.5 ? 'stroke-yellow-500' : 'stroke-green-500'}`} 
                    strokeWidth="4" 
                    strokeDasharray={`${analysisData.loop_hole_severity_index * 100}, 100`}/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-navy">
                    {Math.round(analysisData.loop_hole_severity_index * 100)}%
                  </span>
                </div>
              </div>
              <div className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold ${
                analysisData.loop_hole_severity_index >= 0.7 ? 'bg-red-100 text-red-800' :
                analysisData.loop_hole_severity_index >= 0.5 ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {analysisData.loop_hole_severity_index >= 0.7 ? 'High Risk' :
                 analysisData.loop_hole_severity_index >= 0.5 ? 'Medium Risk' : 'Low Risk'}
              </div>
            </div>
          </div>

          {/* Final Conclusion */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl">
            <h4 className="font-semibold text-navy mb-4">🎯 Devil's Advocate Final Assessment</h4>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-navy mb-1">{analysisData.overall_suggestion.confidence_score}/10</div>
                <div className="text-sm text-gray-600">Confidence Score</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">{analysisData.risk_assessment.overall_risk_score}/10</div>
                <div className="text-sm text-gray-600">Risk Level</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">{analysisData.data_consistency_check.data_quality_score}%</div>
                <div className="text-sm text-gray-600">Data Quality</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-1">{Math.round(analysisData.loop_hole_severity_index * 100)}%</div>
                <div className="text-sm text-gray-600">Severity Index</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className={`inline-flex px-6 py-3 rounded-full text-lg font-bold ${getInvestorLensColor(analysisData.overall_suggestion.investor_lens)}`}>
                Recommendation: {analysisData.overall_suggestion.investor_lens}
              </div>
            </div>
            
            <p className="text-center mt-4 text-gray-700 text-sm italic">
              "Every compelling investment story has potential counterarguments. Smart investors investigate both sides before committing capital."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevilsAdvocateTab;
