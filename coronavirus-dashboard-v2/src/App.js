import React, { lazy, Suspense } from "react";
import { Switch, Route, useLocation, Redirect, useParams } from "react-router";



import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{process.env.REACT_APP_BASE_URL}</div>
      </header>
    </div>
  );
}

export default App;
