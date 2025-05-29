import React, { useRef, useEffect } from 'react';
import { useChatContext } from '../context/ChatContext';
import Message from './Message';
import LoadingIndicator from './LoadingIndicator';

const MessageList: React.FC = () => {
  const { messages, isLoading } = useChatContext();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 pt-20 pb-32 scroll-smooth">
      <div className="max-w-3xl mx-auto">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        {isLoading && <LoadingIndicator />}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;