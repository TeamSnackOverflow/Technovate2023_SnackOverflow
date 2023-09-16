import {React , useState} from 'react';
import { Route, Routes , Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import Login from './components/Login.js';
import SignUp from './components/SignUpuser.js';
import CreateProfile from './components/CreateProfile.js'
import Navbar from './components/Navbar';


function App() {
  const [isLoggedIn , setisLoggedIn] = useState(false)
  return (
    <>
      <Navbar log={{isLoggedIn: isLoggedIn , setisLoggedIn: setisLoggedIn}}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route exact path='/login' element={<Login log={{isLoggedIn: isLoggedIn , setisLoggedIn: setisLoggedIn}}/>}></Route>
        <Route exact path='/signup' element={<SignUp log={{isLoggedIn: isLoggedIn , setisLoggedIn: setisLoggedIn}}/>}></Route>
        <Route exact path='/createprofile' element={<CreateProfile/>}></Route>
        {/* <Route exact path='/setlocation'><Location/></Route> */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
