import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router';
import Navbar from './components/navbar/Navbar'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
