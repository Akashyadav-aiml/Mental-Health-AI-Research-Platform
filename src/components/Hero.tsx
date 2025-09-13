import React from 'react';
import { Brain, MessageCircle, BarChart3, Stethoscope, ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const contributions = [
    {
      title: 'Ted AI Chatbot',
      description: 'Developed with 98.13% accuracy for mental health queries',
      icon: MessageCircle,
      color: 'bg-blue-500'
    },
    {
      title: 'Sentiment Classification',
      description: 'Enhanced chatbot architecture with 99.61% accuracy using BERT & MAML',
      icon: BarChart3,
      color: 'bg-green-500'
    },
    {
      title: 'Early Diagnosis',
      description: 'ML classifier for 5 neurodevelopmental disorders',
      icon: Stethoscope,
      color: 'bg-purple-500'
    }
  ];

  const researchQuestions = [
    'Examine intelligent agents in physiotherapy and psychoeducation',
    'Extract features for sentiment analysis using NLP techniques',
    'Construct classification models for neurodevelopmental disorders',
    'Develop intelligent chatbots for mental health prediction',
    'Compare retrieval-based vs generative chatbot architectures'
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <Brain className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Future of AI in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Mental Healthcare
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Exploring chatbots and AI technologies to enhance mental healthcare delivery, 
            reduce stigma, and provide scalable solutions for early diagnosis and intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              Explore Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
              View Thesis
            </button>
          </div>
        </div>

        {/* Key Contributions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Contributions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contributions.map((contribution, index) => {
              const Icon = contribution.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className={`${contribution.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{contribution.title}</h3>
                  <p className="text-gray-600">{contribution.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Research Questions */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Research Questions Addressed</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {researchQuestions.map((question, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{question}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">98.13%</div>
            <div className="text-gray-600">Ted Chatbot Accuracy</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">99.61%</div>
            <div className="text-gray-600">Sentiment Classification</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
            <div className="text-gray-600">Disorders Classified</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">94.45%</div>
            <div className="text-gray-600">Generative Model Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;