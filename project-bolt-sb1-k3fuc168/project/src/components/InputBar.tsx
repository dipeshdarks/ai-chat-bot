import React, { useState, useRef, useEffect } from 'react';
import { useChatContext } from '../context/ChatContext';
import { Send } from 'lucide-react';

const InputBar: React.FC = () => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { addMessage, isLoading } = useChatContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      addMessage(message.trim(), 'user');
      setMessage('');
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
    }
  }, [message]);

  // Handle Ctrl+Enter or Cmd+Enter to submit
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent pt-6 pb-4">
      <div className="max-w-3xl mx-auto px-4">
        <form
          onSubmit={handleSubmit}
          className="flex items-end bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-[#10A37F] focus-within:border-[#10A37F] transition"
        >
          <textarea
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
            className="flex-1 max-h-[120px] py-3 px-4 bg-transparent border-0 focus:ring-0 focus:outline-none resize-none"
            rows={1}
            disabled={isLoading}
            aria-label="Message input"
          />
          <button
            type="submit"
            className={`p-3 rounded-r-lg flex items-center justify-center ${
              message.trim() && !isLoading
                ? 'text-[#10A37F] hover:bg-green-50'
                : 'text-gray-400 cursor-not-allowed'
            } transition-colors duration-200`}
            disabled={!message.trim() || isLoading}
            aria-label="Send message"
          >
            <Send size={20} />
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Press Ctrl+Enter to send
        </p>
      </div>
    </div>
  );
};

export default InputBar;