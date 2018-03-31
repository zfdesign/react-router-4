import React, { Component } from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';

const Public = () => (
  <div> This is a public page </div>
);

const Private = () => (
  <div> This is a private page </div>
);

const Login = () => (
  <div> Login Page <button>login</button> </div>
);



class App extends Component {
  render() {
    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
          <ul>
            <li><Link to='/public'> Public </Link></li>
            <li><Link to='/private'> Private </Link></li>
          </ul>

          <hr/>

          <Route path='/public' component={Public} />
          <Route path='/private' component={Private} />
        </div>
      </Router>
    );
  }
}
export default App;