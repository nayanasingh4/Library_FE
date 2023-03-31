import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='signup' element= {<Signup/>}/>
        <Route path='login' element= {<Login/>}/>


      </Routes>
      </BrowserRouter>
      
    </>

  )
}

export default App
