import React from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Landing></Landing>
      </main>
    </div>
  );
}

export default App;
