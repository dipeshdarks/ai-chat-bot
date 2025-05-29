import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { Message, ChatContextType } from '../types';

const ChatContext = createContext<ChatContextType | null>(null);

// Sample initial messages
const initialMessages: Message[] = [
  {
    id: '1',
    content: 'Hello! How can I assist you today?',
    role: 'assistant',
    timestamp: new Date(),
  },
];

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addMessage = useCallback((content: string, role: 'user' | 'assistant') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: Date.now().toString(),
        content: 'Hello! How can I assist you today?',
        role: 'assistant',
        timestamp: new Date(),
      },
    ]);
  }, []);

  // Simulate AI response
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    
    if (lastMessage && lastMessage.role === 'user') {
      setIsLoading(true);
      
      // Simulate API delay
      const timer = setTimeout(() => {
        const responses = [
          "I understand what you're asking about. Let me help with that.",
          "That's an interesting question! Here's what I can tell you.",
          "I'd be happy to assist with this request.",
          "Let me process that and provide you with a helpful response.",
          "Thanks for your question. Here's what I think might help."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessage(randomResponse, 'assistant');
        setIsLoading(false);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [messages, addMessage]);

  return (
    <ChatContext.Provider value={{ messages, isLoading, addMessage, clearMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};