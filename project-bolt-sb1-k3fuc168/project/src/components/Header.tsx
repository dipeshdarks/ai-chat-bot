import React from 'react';
import { useChatContext } from '../context/ChatContext';
import { RefreshCw } from 'lucide-react';

const Header: React.FC = () => {
  const { clearMessages } = useChatContext();

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10 max-w-3xl mx-auto w-full">
      <h1 className="text-xl font-semibold text-gray-800">AI Assistant</h1>
      <button
        onClick={clearMessages}
        className="flex items-center text-sm text-gray-600 hover:text-[#10A37F] transition-colors duration-200 group"
        aria-label="Clear conversation"
      >
        <RefreshCw size={16} className="mr-1 group-hover:rotate-180 transition-transform duration-300" />
        <span>Clear chat</span>
      </button>
    </header>
  );
};

export default Header;