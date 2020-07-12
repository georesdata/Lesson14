import React from 'react';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import './App.css';
import
{
  HashRouter, BrowserRouter as Router, Route,
} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <HashRouter  basename="/grdobbs/WEB215/Lesson14/">
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/education">
        <Education />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
    </HashRouter>
  )
}

export default App;
