import { Route, Routes , Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import Login from './components/Login.js';
import SignUp from './components/SignUpuser.js';
import CreateProfile from './components/CreateProfile.js'
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/signup' element={<SignUp/>}></Route>
      <Route exact path='/createprofile' element={<CreateProfile/>}></Route>
      {/* <Route exact path='/setlocation'><Location/></Route> */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
    </Routes>
  );
}

export default App;
