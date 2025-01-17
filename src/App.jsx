import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="dashboard flex h-screen bg-[#FAFAFA]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;