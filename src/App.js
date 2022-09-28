import React,{useState} from 'react';
import './App.css'
import Login from './Containers/login/Login';
import EditProfile from './Containers/editProfile/EditProfile';
import Register from './Containers/register/Register';
import Home from'./Containers/home/Home.jsx'
import Profile from './Containers/profile/Profile';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./style/dark.css"

function App() {
  const [theme,changeTheme] = useState('');
  const changeThemeHandler = ()=>{
    if(theme===''){
      changeTheme("dark")
    }
    else{
      changeTheme("")
    }
  }
  return (
    <div className={`app ${theme}`}>
      <Router>
        <Routes>
          <Route path="/">
            <Route path='login' element={<Login/>}/>
            <Route index element={<Register/>}/>
            <Route path='home' element={<Home toggleTheme={changeThemeHandler}/>}/>
            <Route path='profile'>
              <Route path=':username' element={<Profile toggleTheme={changeThemeHandler}/>}/>
              <Route path=':username/edit' element={<EditProfile toggleTheme={changeThemeHandler}/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
