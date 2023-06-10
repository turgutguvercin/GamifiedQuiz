import React from "react";

class SignUpSuccess extends React.Component{
    render(){
return(

<div  className={this.props.signUpSuccess}>
    <div id="signup-success">
        <p>✔ You sign up successfully! You are redirecting to login page...</p>
    </div>
    <br/>
</div>
);

} }


export default SignUpSuccess;
