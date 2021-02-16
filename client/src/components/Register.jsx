import '../App.css';
import react,{useState, useEffect} from 'react';
import {Router, Link,navigate} from "@reach/router";
import Books from "./Books";
import axios from "axios";


function Register() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

  const registerHandler = (e)=>{
    e.preventDefault()
        axios.post("http://localhost:8000/api/register", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        })
            .then(() => navigate("http://localhost:3000/welcome"))
  }
  return (
    <div className="App2">
        <section>
            <form onSubmit={ registerHandler }>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)}/><br/>
                <input type="text" onChange={(e)=>setLastName(e.target.value)}/><br/>
                <input type="email" onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input type="text" onChange={(e)=>setPassword(e.target.value)}/><br/>
                <input type="button" value="Register"/><br/>
                <Link to="login">press here to logIn</Link>
            </form>
        </section>
        <Books />
    </div>
  );
}

export default Register;
