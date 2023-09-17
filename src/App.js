import {React , useEffect, useState} from 'react';
import { Route, Routes , Navigate } from 'react-router-dom';
import './App.css';
import { Box } from '@chakra-ui/react';
import Home from './components/Home.js';
import Login from './components/Login.js';
import SignUp from './components/SignUpuser.js';
import CreateProfile from './components/CreateProfile.js'
import Navbar from './components/Navbar';
import Update from './components/Update';
import AOS from 'aos';
import Result from './components/Result'


function App() {
  const [isLoggedIn , setisLoggedIn] = useState(false)
  const [isUpdated , setisUpdated] = useState(false)
  useEffect( () => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease'
    });
  })
  return (
    <>
      <Navbar log={{isLoggedIn: isLoggedIn , setisLoggedIn: setisLoggedIn}}/>
      <Box h={'100vh'} m={0} >
      <Routes>
        <Route path='/' element={<Home log={{isLoggedIn: isLoggedIn , setisLoggedIn: setisLoggedIn}}/>}></Route>
        <Route exact path='/login' element={<Login log={{isLoggedIn: isLoggedIn , setisLoggedIn: setisLoggedIn}}
        update={{isUpdated: isUpdated , setisUpdated: setisUpdated}}/>}></Route>
        <Route exact path='/signup' element={<SignUp log={{isLoggedIn: isLoggedIn , setisLoggedIn: setisLoggedIn}} 
          update={{isUpdated: isUpdated , setisUpdated: setisUpdated}}/>}></Route>
        <Route exact path='/location' element={<CreateProfile/>}></Route>
        <Route exact path='/update' element={<Update/>}></Route>
        <Route exact path='/findothers' element={<Result/>}></Route>
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
      </Box>
    </>
  );
}

export default App;
