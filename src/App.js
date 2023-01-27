import React from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Landing></Landing>
        <About></About>
      </main>
    </div>
  );
}

export default App;
