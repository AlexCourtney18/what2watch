import React, { useState } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import SignupForm from './components/Signup';
import './App.css';

function App() {

  const [pages] = useState([
    { name: 'Home' },
    { name: 'About' },
    { name: 'Browse' },
    { name: 'Login' },
    { name: 'Sign-Up'},
  ])

  const [currentPage, setCurrentPage] = useState(pages[0]);
  console.log(currentPage);

  return (
    <div>
      <Nav
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      ></Nav>
      <main>
        {currentPage.name === 'About' ? (
          <About></About>
        ) : currentPage.name === 'Sign-Up' ? (
          <SignupForm></SignupForm>
        ) : (
          <Landing></Landing>
        )}
      </main>
    </div>
  );
}

export default App;
