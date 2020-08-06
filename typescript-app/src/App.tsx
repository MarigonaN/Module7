import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header2'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DetailComponent from './components/DetailComponent'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header title="title!" subTitle="asdsad" />
          <Route
            path="/detail"
            exact
            render={(routerProps) => <DetailComponent {...routerProps} data={['one', 'two']} />}
          />
        </header>
      </div>
    </Router>
  )
}

export default App