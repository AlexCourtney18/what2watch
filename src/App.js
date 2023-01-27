import React, { useState } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import SignupForm from './components/Signup';
import './App.css';

function App() {

  const [pages] = useState([
    { name: 'About' },
    { name: 'Browse' },
    { name: 'Login' },
    { name: 'Sign-Up'},
  ])

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Nav
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      ></Nav>
      <main>
        <Landing></Landing>
        <About></About>
        <SignupForm></SignupForm>
      </main>
    </div>
  );
}

export default App;
