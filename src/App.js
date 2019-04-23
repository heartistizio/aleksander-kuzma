import React from 'react';
import './App.scss';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
