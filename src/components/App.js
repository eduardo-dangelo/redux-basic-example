import React, { Component } from 'react';
import ItensList from '../containers/ItensList';
import ItemDetail from '../containers/ItemDetail';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="container">
            <img src={require('../img/react-redux-logo.png')} alt="logo"/>
            <h3>Redux <span>Basic Example</span></h3>
          </div>
        </div>
        <div className="container">
          <ItensList />
          <ItemDetail />
          <div className="footer">
            <p>A react app using redux to control the state of the application.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
