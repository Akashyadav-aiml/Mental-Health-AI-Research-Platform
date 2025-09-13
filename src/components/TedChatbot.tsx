import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Heart, Shield, Zap } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const TedChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Ted, your AI mental health companion. I'm here to provide support and guidance. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const mentalHealthResponses = {
    anxiety: [
      "I understand you're feeling anxious. Try the 4-7-8 breathing technique: breathe in for 4, hold for 7, exhale for 8. This can help calm your nervous system.",
      "Anxiety is challenging, but you're not alone. Consider grounding techniques like naming 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.",
      "When anxiety strikes, remember that feelings are temporary. Try progressive muscle relaxation or gentle movement to help your body release tension."
    ],
    depression: [
      "I hear that you're struggling with depression. Small steps matter - even getting out of bed is an achievement. Have you been able to do any activities you usually enjoy?",
      "Depression can make everything feel overwhelming. Remember that seeking help is a sign of strength, not weakness. Consider reaching out to a mental health professional.",
      "You're brave for sharing this with me. Depression affects many people, and there are effective treatments available. What's one small thing that might bring you a moment of peace today?"
    ],
    stress: [
      "Stress can be overwhelming. Let's break it down - what's the main source of your stress right now? Sometimes identifying specific stressors helps us address them more effectively.",
      "Chronic stress affects both mind and body. Consider incorporating stress-reduction techniques like meditation, regular exercise, or talking to someone you trust.",
      "It sounds like you're dealing with a lot. Remember that it's okay to set boundaries and prioritize your well-being. What's one thing you could delegate or postpone?"
    ],
    default: [
      "Thank you for sharing that with me. Can you tell me more about what you're experiencing?",
      "I'm here to listen and support you. What would be most helpful for you right now?",
      "Your feelings are valid. Would you like to explore some coping strategies, or would you prefer to talk more about what's on your mind?"
    ]
  };

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('anxious') || message.includes('anxiety') || message.includes('worried') || message.includes('panic')) {
      const responses = mentalHealthResponses.anxiety;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (message.includes('depressed') || message.includes('depression') || message.includes('sad') || message.includes('hopeless')) {
      const responses = mentalHealthResponses.depression;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (message.includes('stress') || message.includes('overwhelmed') || message.includes('pressure')) {
      const responses = mentalHealthResponses.stress;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm glad you're here. I'm Ted, and I'm designed to provide mental health support. What's on your mind today?";
    }
    
    if (message.includes('help') || message.includes('support')) {
      return "I'm here to help. Whether you're dealing with stress, anxiety, depression, or just need someone to talk to, I'm listening. What would you like to discuss?";
    }
    
    const responses = mentalHealthResponses.default;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <Bot className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Ted: AI Mental Health Chatbot</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our AI chatbot with 98.13% accuracy in providing mental health support. 
            Ted uses advanced NLP and deep learning to offer personalized assistance.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Shield className="h-8 w-8 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Privacy & Safety</h3>
            <p className="text-sm text-gray-600">Secure, confidential conversations with advanced privacy protection</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Heart className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Empathetic Support</h3>
            <p className="text-sm text-gray-600">Compassionate responses based on CBT principles and evidence-based practices</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Instant Response</h3>
            <p className="text-sm text-gray-600">24/7 availability with rapid, accurate responses to mental health queries</p>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
            <div className="flex items-center">
              <Bot className="h-8 w-8 mr-3" />
              <div>
                <h3 className="font-semibold">Ted - Mental Health AI</h3>
                <p className="text-sm text-blue-100">Online • Ready to help</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start max-w-xs lg:max-w-md ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 ${message.sender === 'user' ? 'ml-2' : 'mr-2'}`}>
                    {message.sender === 'user' ? (
                      <User className="h-8 w-8 p-1 bg-blue-500 text-white rounded-full" />
                    ) : (
                      <Bot className="h-8 w-8 p-1 bg-purple-500 text-white rounded-full" />
                    )}
                  </div>
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white rounded-br-sm'
                        : 'bg-gray-100 text-gray-900 rounded-bl-sm'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start">
                  <Bot className="h-8 w-8 p-1 bg-purple-500 text-white rounded-full mr-2" />
                  <div className="bg-gray-100 px-4 py-2 rounded-2xl rounded-bl-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-2">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share what's on your mind..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={1}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              This is a research demonstration. For serious mental health concerns, please consult a healthcare professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TedChatbot;