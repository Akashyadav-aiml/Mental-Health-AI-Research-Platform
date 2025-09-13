import React from 'react';
import { Brain, Award, Users, Target } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Brain className="h-10 w-10 mr-4" />
            <div>
              <h1 className="text-2xl font-bold">AI in Mental Healthcare</h1>
              <p className="text-blue-100">Doctoral Research by Akash Yadav</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-2" />
              <span>98.13% Accuracy</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span>5 Disorders Classified</span>
            </div>
            <div className="flex items-center">
              <Target className="h-4 w-4 mr-2" />
              <span>Early Diagnosis</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;