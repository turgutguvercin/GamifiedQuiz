import '../../App.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import Navbar from '../../components/Navbar/Navbar';


<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
function Login() {
  return (
    <div >
      <Navbar signup={"hide"} email={"hide"} logout={"hide"} dashboard={"hide"} />
      <LoginForm/>
      </div>
  );
}

export default Login;
