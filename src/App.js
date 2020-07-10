import React, { Component } from 'react';
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

const container = 'container';
const mode = 'dark-mode'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: null,
    }
  }

  receiveDataFromChild = (mode) => {
    this.setState({ mode });
  }

  render() {
    return (
      <div className={container, this.state.mode ? 'light-mode' : 'dark-mode'}>
        <Router>
          <Header sendDataToParent={this.receiveDataFromChild} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" component={Blog} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;