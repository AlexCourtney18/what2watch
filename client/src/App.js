import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import SignupForm from './components/Signup';
import Footer from './components/Footer';
import Browse from './pages/Browse';
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

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
    <ApolloProvider client={client}>

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
        )  : currentPage.name === 'Browse' ? (
          <Browse></Browse>
        ) : (
          <Landing></Landing>
        )}
      </main>
      <Footer></Footer>
    </div>

    </ApolloProvider>
  );
}

export default App;
