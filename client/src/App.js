import './App.css';
import react,{useState, useEffect} from 'react';
import {Router} from "@reach/router";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Register path="/"/>
        <Login path="/login"/>
        <Welcome path="/welcome"/>
      </Router>
    </div>
  );
}

export default App;
