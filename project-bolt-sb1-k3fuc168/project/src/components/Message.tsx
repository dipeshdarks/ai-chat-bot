import React from 'react';
import { Message as MessageType } from '../types';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);
  };

  return (
    <div
      className={`mb-4 animate-fadeIn ${isUser ? 'flex justify-end' : 'flex justify-start'}`}
      data-role={message.role}
    >
      <div
        className={`max-w-[85%] px-4 py-3 rounded-lg ${
          isUser
            ? 'bg-[#10A37F] text-white rounded-tr-none'
            : 'bg-[#F7F7F8] text-gray-800 rounded-tl-none'
        }`}
      >
        <div className="text-sm sm:text-base whitespace-pre-wrap break-words">{message.content}</div>
        <div
          className={`text-xs mt-1 ${
            isUser ? 'text-green-100' : 'text-gray-500'
          }`}
        >
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default Message;