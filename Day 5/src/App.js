import React from 'react'
import Navbar from './compontent/Navbar'
import{ BrowserRouter as Router, Switch, Route, Routes,  } from "react-router-dom"
import Home from "./compontent/Home"
import SignUp from "./compontent/SignUp"
import SignIn from "./compontent/SignIn"
import Contact from "./compontent/Contact"
import Sidebar from './compontent/Sidebar'
import Footer from './compontent/Footer'


export default function App()  {
  return (
    <Router>
        <Navbar/>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin'  element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
  )
}
