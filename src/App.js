import React from 'react'
import './App.css';
import Home from './Home';
import Context from './Context';
import SingleUser from './SingleUser';
import User from "./User";
import Error from "./Error";
import { Routers, Route, Routes} from "react-router-dom";
const App = () => {
  return (
    <>
      
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='user/:id' element={<SingleUser/>} ></Route>
          <Route path='*' element={<Error/>} ></Route>

        </Routes>
      
    </>
  )
}

export default App
