import '../../App.css';
import Navbar from '../../components/Navbar/Navbar';
import SignupForm from '../../components/SignupForm/SignupForm';

<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
function SignUp() {
  return (
    <div >
      <Navbar login={"hide"} email={"hide"}  logout={"hide"} dashboard={"hide"}  />
      <SignupForm/>
      </div>
  );
}

export default SignUp;
