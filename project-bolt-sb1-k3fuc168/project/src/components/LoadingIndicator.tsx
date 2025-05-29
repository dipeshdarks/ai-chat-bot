import React from 'react';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex items-center mb-4">
      <div className="bg-[#F7F7F8] px-4 py-3 rounded-lg flex items-center">
        <div className="flex space-x-1">
          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
        <span className="text-sm text-gray-500 ml-2">AI is thinking...</span>
      </div>
    </div>
  );
};

export default LoadingIndicator;