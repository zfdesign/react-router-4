import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

const Courses = ({ match }) => (
  <div>
     <ul>
        <li><Link to="/courses/technology">Technology</Link></li>
        <li><Link to="/courses/business">Business</Link></li>
        <li><Link to="/courses/economics">Economics</Link></li>
    </ul>


    <Route exact path="/courses/technology" render={() => (<div> This is technology </div>)}/>
    <Route path="/courses/business" component={() => (<div> This is business </div>)}/>
    <Route path="/courses/economics" component={() => (<div> This is economics </div>)}/>
  </div>
);


const Home = () => (
  <div>
    <h2> Home </h2>
  </div>
);

const Airport = () => (
  <div>
     <ul>
      <li>Jomo Kenyatta</li>
      <li>Tambo</li>
      <li>Murtala Mohammed</li>
    </ul>
  </div>
);

const City = () => (
  <div>
    <ul>
      <li>San Francisco</li>
      <li>Istanbul</li>
      <li>Tokyo</li>
    </ul>
  </div>
);


class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/cities">Cities</Link></li>
        </ul>

        <Route path="/" exact component={Home}/>
        <Route path="/courses" component={Courses}/>
        <Route path="/cities" component={City}/>
      </div>
    );
  }
}

export default App;