import React from 'react';
import { Brain, Mail, ExternalLink, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Brain className="" />
              <span className="">Mental Health AI Research</span>
            </div>
            <p className="text-gray-300 mb-4">
              Advancing the future of mental healthcare through AI-powered chatbots and diagnostic tools. 
              Research focused on enhancing accessibility, reducing stigma, and improving early intervention.
            </p>
            <div className="flex items-center text-gray-300">
              <Mail className="h-4 w-4 mr-2" />
              <span>Doctoral Research by Sumit Pandey</span>
            </div>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Research Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>AI Chatbots for Mental Health</li>
              <li>Sentiment Analysis & NLP</li>
              <li>Neurodevelopmental Disorders</li>
              <li>Early Diagnosis Systems</li>
              <li>Machine Learning in Healthcare</li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 text-gray-300">
              <li>BERT & Transformer Models</li>
              <li>MAML Few-Shot Learning</li>
              <li>Random Forest Classification</li>
              <li>Deep Learning & NLP</li>
              <li>Conversational AI</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              <p>&copy; 2024 Mental Health AI Research Platform. Educational demonstration of doctoral research.</p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                <BookOpen className="h-4 w-4 mr-1" />
                View Thesis
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 text-center">
            <strong>Disclaimer:</strong> This platform is for research demonstration purposes only. 
            The AI tools presented here are not intended for actual clinical diagnosis or treatment. 
            For mental health concerns, please consult qualified healthcare professionals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;