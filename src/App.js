import React from 'react';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container"
      // style={theme ? red : white}
    >
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;