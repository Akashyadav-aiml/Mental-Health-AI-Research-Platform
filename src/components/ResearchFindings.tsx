import React from 'react';
import { BarChart3, TrendingUp, Users, Award, BookOpen, Target } from 'lucide-react';

const ResearchFindings = () => {
  const contributions = [
    {
      title: 'Ted AI Chatbot Development',
      description: 'Developed an AI web chatbot achieving 98.13% accuracy in mental health responses, surpassing existing solutions like Woebot, Wysa, and Joyable in safety, privacy, efficacy, and confidentiality.',
      metrics: ['98.13% Accuracy', 'Superior Privacy', 'Enhanced Safety'],
      color: 'bg-blue-500'
    },
    {
      title: 'Enhanced Sentiment Classification',
      description: 'Implemented few-shot learning with BERT and MAML for superior cross-domain embeddings, achieving 99.61% accuracy in sentiment classification for mental health applications.',
      metrics: ['99.61% Accuracy', 'Few-shot Learning', 'Cross-domain Adaptation'],
      color: 'bg-green-500'
    },
    {
      title: 'ML Technologies Review',
      description: 'Comprehensive review of machine learning technologies for identifying signs of ASD, ADHD, stress, anxiety, and depression, contributing to ongoing research in neurodevelopmental disorders.',
      metrics: ['5 Disorders', 'Comprehensive Review', 'Research Contribution'],
      color: 'bg-purple-500'
    },
    {
      title: 'Early Diagnosis Framework',
      description: 'Developed a classifier model using Random Forest with bootstrapping and bagging techniques for early diagnosis of neurodevelopmental disorders, significantly reducing assessment time.',
      metrics: ['Random Forest', 'Early Diagnosis', 'Reduced Time'],
      color: 'bg-orange-500'
    },
    {
      title: 'Conversational AI Systems',
      description: 'Developed and tested retrieval-based and generative chatbot architectures, with generative models achieving 94.45% accuracy using encoder-decoder designs.',
      metrics: ['94.45% Accuracy', 'Multiple Architectures', 'Human-like Interaction'],
      color: 'bg-red-500'
    }
  ];

  const modelPerformance = [
    { model: 'Vanilla RNN', accuracy: 83.22, type: 'Retrieval-based' },
    { model: 'LSTM', accuracy: 89.87, type: 'Retrieval-based' },
    { model: 'Bi-LSTM', accuracy: 91.57, type: 'Retrieval-based' },
    { model: 'GRU', accuracy: 65.57, type: 'Retrieval-based' },
    { model: 'CNN', accuracy: 82.33, type: 'Retrieval-based' },
    { model: 'Encoder-Decoder', accuracy: 94.45, type: 'Generative' }
  ];

  const researchQuestions = [
    {
      question: 'RQ1: Intelligent Agents in Mental Health',
      approach: 'Comprehensive literature review of AI agents in physiotherapy, psychoeducation, and stress/anxiety/depression management, leading to Ted chatbot development.',
      outcome: 'Identified gaps and developed Ted with superior performance metrics.'
    },
    {
      question: 'RQ2: Feature Extraction for Sentiment Analysis',
      approach: 'Applied NLP techniques including tokenization and POS tagging with transfer learning methodology using BERT and MAML for sentiment classification.',
      outcome: 'Achieved 99.61% accuracy in cross-domain sentiment analysis.'
    },
    {
      question: 'RQ3: ML Classification Models',
      approach: 'Systematic investigation of various ML approaches including neural networks, BERT, and MAML for neurodevelopmental disorder classification.',
      outcome: 'Developed high-accuracy classification model for 5 disorders.'
    },
    {
      question: 'RQ4: Intelligent Chatbot Development',
      approach: 'Utilized advances in ML and NLP to create intelligent chatbots for mental health prediction and forecasting with high accuracy and low cost.',
      outcome: 'Ted chatbot with 98.13% accuracy and cost-effective deployment.'
    },
    {
      question: 'RQ5: Comparative Analysis',
      approach: 'Structured comparison of retrieval-based vs generative chatbots using various metrics against state-of-the-art methods.',
      outcome: 'Comprehensive performance analysis across multiple architectures.'
    }
  ];

  const futureScope = [
    {
      category: 'Chatbot Architecture Optimization',
      items: [
        'Ted chatbot refinement with enhanced algorithms and user feedback mechanisms',
        'Integration of advanced DL and NLP methodologies including GPT-4',
        'Performance optimization and usability improvements'
      ]
    },
    {
      category: 'Data Collection Enhancement',
      items: [
        'Integration of multimodal inputs (voice, images, physiological signals)',
        'Extension to additional neurodevelopmental disorders',
        'Comprehensive and personalized assessment capabilities'
      ]
    },
    {
      category: 'Clinical Integration',
      items: [
        'Deployment in clinical settings alongside traditional professionals',
        'Clinical trials for feasibility and efficacy assessment',
        'Integration with existing mental healthcare systems'
      ]
    },
    {
      category: 'Ethical Considerations',
      items: [
        'Data privacy and informed consent frameworks',
        'Algorithmic bias mitigation strategies',
        'Responsible AI development guidelines'
      ]
    }
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Findings & Contributions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive analysis of AI applications in mental healthcare delivery, 
            featuring breakthrough developments in chatbot technology and diagnostic tools.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Award className="h-8 w-8 text-blue-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-600 mb-1">98.13%</div>
            <div className="text-sm text-gray-600">Ted Chatbot Accuracy</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-600 mb-1">99.61%</div>
            <div className="text-sm text-gray-600">Sentiment Classification</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Target className="h-8 w-8 text-purple-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-600 mb-1">5</div>
            <div className="text-sm text-gray-600">Disorders Classified</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Users className="h-8 w-8 text-orange-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-orange-600 mb-1">6</div>
            <div className="text-sm text-gray-600">Model Architectures</div>
          </div>
        </div>

        {/* Major Contributions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Major Contributions</h2>
          <div className="space-y-6">
            {contributions.map((contribution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start">
                  <div className={`${contribution.color} w-12 h-12 rounded-lg flex items-center justify-center mr-6 flex-shrink-0`}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{contribution.title}</h3>
                    <p className="text-gray-700 mb-4">{contribution.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {contribution.metrics.map((metric, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Model Performance Comparison */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Model Performance Analysis</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Retrieval-based Models</h3>
                <div className="space-y-4">
                  {modelPerformance.filter(model => model.type === 'Retrieval-based').map((model, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-24 text-sm font-medium text-gray-700">{model.model}</div>
                      <div className="flex-1 mx-4">
                        <div className="bg-gray-200 rounded-full h-3">
                          <div
                            className="h-3 rounded-full bg-blue-500 transition-all duration-1000 ease-out"
                            style={{ width: `${model.accuracy}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-16 text-sm font-bold text-gray-900 text-right">
                        {model.accuracy}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Generative Models</h3>
                <div className="space-y-4">
                  {modelPerformance.filter(model => model.type === 'Generative').map((model, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-32 text-sm font-medium text-gray-700">{model.model}</div>
                      <div className="flex-1 mx-4">
                        <div className="bg-gray-200 rounded-full h-3">
                          <div
                            className="h-3 rounded-full bg-green-500 transition-all duration-1000 ease-out"
                            style={{ width: `${model.accuracy}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-16 text-sm font-bold text-gray-900 text-right">
                        {model.accuracy}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Questions & Approaches */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Questions & Methodologies</h2>
          <div className="space-y-6">
            {researchQuestions.map((rq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{rq.question}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Approach:</h4>
                    <p className="text-gray-600 text-sm">{rq.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Outcome:</h4>
                    <p className="text-gray-600 text-sm">{rq.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Scope */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Future Research Directions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {futureScope.map((scope, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{scope.category}</h3>
                <ul className="space-y-2">
                  {scope.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Concluding Remarks */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Key Conclusions</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Technical Achievements:</h3>
              <ul className="space-y-1">
                <li>• AI-based technologies provide scalable mental health solutions</li>
                <li>• Meta-learning and transformer networks show significant potential</li>
                <li>• Streamlined diagnostic tools enable earlier intervention</li>
                <li>• Cross-domain embeddings improve few-shot learning performance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Clinical Impact:</h3>
              <ul className="space-y-1">
                <li>• Reduced stigma through AI-mediated mental health support</li>
                <li>• Faster diagnosis with maintained accuracy and specificity</li>
                <li>• 24/7 availability addresses accessibility challenges</li>
                <li>• Evidence-based CBT principles integrated into AI responses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchFindings;