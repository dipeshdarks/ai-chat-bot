import React from 'react';
import { ChatProvider } from './context/ChatContext';
import Header from './components/Header';
import MessageList from './components/MessageList';
import InputBar from './components/InputBar';

function App() {
  return (
    <ChatProvider>
      <div className="flex flex-col h-screen bg-white text-[#202123] font-sans">
        <Header />
        <MessageList />
        <InputBar />
      </div>
    </ChatProvider>
  );
}

export default App;