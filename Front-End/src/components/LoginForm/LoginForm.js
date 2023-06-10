import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './LoginForm.css';

function LoginForm(){
    let navigate = useNavigate();
    const [data, setData] = useState({
      email:"",
      password:"" 
    })

    const handleChange =(e)=> {
        setData({...data,[e.target.name]:e.target.value});
    } 

    const submitForm=(e)=> {
        e.preventDefault();
        const sendData = {
            email:data.email,
            password:data.password
        }

        axios.post('http://localhost/signInProcess.php', sendData, {withCredentials: true})
            .then((result) => {
                if(result.data.UserID === undefined || result.data.UserID === "notFound"){
                    alert("We couldn't find an account that matches what you entered")
                    console.log(result.data.UserID);
                }
                else{
                    navigate("../dashboard");
                    console.log(result.data.UserID);
                }
            })
            .catch((error) => {
                console.error("An error occurred:", error);
                alert("An error occurred while trying to log in.");
            })
    }

    return(
        <div className="loginform">
            <form onSubmit={submitForm} >
            <h3>Log In</h3>
            <br/>
            <label>Email</label>
            <input data-testid="test-input-email" type="email" name="email" className="input" onChange={handleChange} value={data.email} required />
            <br/>
            <label>Password</label>
            <input data-testid="test-input-password" type="password" name="password"  className="input" onChange={handleChange} value={data.password}  required />
            <br/>
        
            <input data-testid="test-input-button" type="submit" className="submit" name="submit" value="Login" />
            </form>
            <br/>
            <div className="bottomnotes">
            <p>By signing in you agree to <a className="terms" href="#">terms & conditions</a>.</p>
            <hr/>
            <p>Don't have an account?<a className="terms" href="../signup"> Click here to sign up.</a></p>
            </div>
        </div>
    );
}

export default LoginForm;
