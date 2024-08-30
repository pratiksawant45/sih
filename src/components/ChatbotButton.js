import React, { useState } from 'react';
import './ChatbotButton.css';
import chatIcon from './assets/chat-icon.png'; // Add the correct path to your chat icon image

function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="chatbot-button" onClick={toggleChatbot}>
        <img src={chatIcon} alt="Chat" /> {/* Chat icon image */}
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h2>Chatbot</h2>
            <button onClick={toggleChatbot}>&times;</button>
          </div>
          <div className="chatbot-content">
            <p>Hi! How can I help you today?</p>
            {/* Chatbot content here */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatbotButton;
