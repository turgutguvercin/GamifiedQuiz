import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './SignupForm.css';
import PopupLogout from '../Popup/PopupLogout';

function SignupForm(){

    let navigate = useNavigate();
    const [data, setData] = useState({
      email:"",
      password:"",
      passwordConfirm:""  
    })
    const [error, setError] = useState({
        username: '',
        password: '',
        passwordConfirm: ''
      })

    const [popup, setPopup] = useState(false);

    const handleChange =(e)=> {
        setData({...data,[e.target.name]:e.target.value});
        validateInput(e);
    }
    
    const validateInput = (e) => {
        let { name, value } = e.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
           
          switch (name) {
 
            case "password":
                
              if (!e.target.value) 
                stateObj[e.target.name] = "Please enter a Password.";
              else if (data.passwordConfirm && e.target.value !== data.passwordConfirm) 
              {
                stateObj["passwordConfirm"] = "Passwords do not match!";
                e.target.setCustomValidity("Passwords do not match!");
              } 
              else {
                stateObj["passwordConfirm"] = data.passwordConfirm ? "" : error.passwordConfirm;
                e.target.setCustomValidity("");
              }
              break;
     
            case "passwordConfirm":
              if (!e.target.value) 
                stateObj[e.target.name] = "Please re-enter Password!";

              else if (data.password && e.target.value !== data.password) {
                e.target.setCustomValidity("Passwords do not match.");
                stateObj[e.target.name] = "Passwords do not match.";
              }
              else
              e.target.setCustomValidity("");
              break;
     
            default:
              break;
          }
     
          return stateObj;
        });
      }



    const submitForm=(e)=> {
        
        e.preventDefault();
        const sendData = {
            email:data.email,
            password:data.password,
            passwordConfirm:data.passwordConfirm
        }
        
        axios.post('http://localhost/signup.php',sendData).then((result) =>{
            if(result.data.status === "existUser")
            alert("There is an account belonging to this e-mail address.")
            else
            {
              setPopup(true);
              setTimeout(function() {
              navigate("../login");
              },3000)
            }
        })
    }
    



    
return(
    <div className="signupform">


        <form onSubmit={submitForm} >
        <h3>Sign Up</h3>
        <br/>
        <label>Email</label>
        <input type="email" name="email" className="input" onChange={handleChange} value={data.email} maxLength="30" required />
        <br/>
        <label>Password</label>
        <input type="password" name="password"  className="input" onChange={handleChange} minlength="5" maxLength="30" onBlur={validateInput} value={data.password} required />
        {error.password && <span className='error'>{error.password}</span>}
        <br/>
        <label>Re-enter Password</label>
        <input type="password" name="passwordConfirm" className="input" onChange={handleChange} minlength="5" maxLength="30" onBlur={validateInput}  value={data.passwordConfirm} required />
        {error.passwordConfirm && <span className='error'>{error.passwordConfirm}</span>}
        <br/>
        
        <input type="submit" className="submit" name="submit" onClick={handleChange}  value="Sign Up"/>
        </form>
        <br/>
        <div className="bottomnotes">
        <p>By creating account you agree to <a className="terms" href="#">terms & conditions</a>.</p>
        <hr/>
        <p>Already have an account?<a className="terms" href="#"> Click here to log in.</a></p>
        </div>

        <PopupLogout trigger={popup} >✔ You sign up successfully! You are redirecting to login page...</PopupLogout> 
    </div>

);

}

export default SignupForm;