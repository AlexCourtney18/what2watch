import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import SignupForm from './components/Signup';
import Footer from './components/Footer';
import Browse from './pages/Browse';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
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
    { name: 'Sign-Up' },
  ])

  const [currentPage, setCurrentPage] = useState(pages[0]);
  console.log(currentPage);

  return (
    <ApolloProvider client={client}>
      <Router>

        <div>
          <Nav
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          ></Nav>

          <Routes>
            <Route
              path="/"
              element={<Landing />}
            />
            <Route
              path="/home"
              element={<Landing />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/browse"
              element={<Browse />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/sign-up"
              element={<Signup />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route
              path="/thought"
              element={<SingleThought />}
            />

            <Route
              path="*"
              element={<NoMatch />}
            />
          </Routes>

          <Footer></Footer>
        </div>

      </Router>
    </ApolloProvider>
  );
}

export default App;
