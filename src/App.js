import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
// import ChatbotButton from './components/ChatbotButton';
import './App.css';

function App() {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://mediafiles.botpress.cloud/1a2e35f7-b639-4260-83f4-2753ded83eb3/webchat/v2/config.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        {/* Your main museum content here */}
        <h1>Chhatrapati Shivaji Maharaj Museum, Mumbai</h1>
        <p>"Explore the rich legacy of India's history and heritage, where every artifact tells a story."</p>
      </main>
      
      {/* <ChatbotButton /> */}
    </div>
  );
}

export default App;
