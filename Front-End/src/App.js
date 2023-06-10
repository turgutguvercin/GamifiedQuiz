import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import MainPage from './pages/MainPage/MainPage';
import Dashboard from './pages/Dashboard/Dashboard';
import Contactus from './pages/Contactus/Contactus';
import Quiz from './pages/Quiz/Quiz';

import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
//import QuizData from './QuizData';

<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
function App() {
  return (
  
<Router>
  <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard'element={<Dashboard/>} />
    <Route path='/quiz'element={<Quiz/>} />
    <Route path='/contactus'element={<Contactus/>} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
</Router>
);


}
function PageNotFound() {
  return (
    <div>
      <h2>Page not found</h2>
    </div>
  );
}

export default App;
