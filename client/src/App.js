import React, { Component } from 'react';
import './App.css';
import FormRegistroPC from './components/FormRegistroPC';
import FormRegistroUsuario from './components/FormRegistroUsuario';
import FormRegistro from './components/FormRegistro';
import FormLogin from './components/FormLogin';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  render() {

    return (
      <Router>
      <div>
        <Route exact path='/' component={FormRegistro} />
        <Route exact path='/login' component={FormLogin} />
      </div>
      </Router>
    );
  }
}

export default App;
