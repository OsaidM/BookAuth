import '../App.css';
import react,{useState, useEffect} from 'react';
import {Router, Link} from "@reach/router";
import Books from "./Books";
function Login() {
  const loginHandler = () =>{
      
  }
  return (
    <div className="App2">
        <section>
            <form>
                <input type="email" placeholder="Email"/><br/>
                <input type="text" placeholder="Password"/><br/>
                <input type="button" value="LogIN"/><br/>
                <Link to="/">press here to register</Link>
            </form>
        </section>
        <Books/>
    </div>
  );
}

export default Login;
