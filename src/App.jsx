import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      
    </>

  )
}

export default App
