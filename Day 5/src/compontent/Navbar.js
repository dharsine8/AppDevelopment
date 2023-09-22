import React, {useState}from 'react'
import {Link} from 'react-router-dom'
import "./navbar.css";
import {FaBars} from "react-icons/fa"
import {GiCrossedSlashes} from "react-icons/gi"
import Sidebar from './Sidebar'


export default function Navbar() {
    const [Menu, setMenu] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
    
      const handleCloseMenu = () => {
        setMenuOpen(false);
      };    

  return (
   <nav className='navbar'>
   <h3 className='logo'> Waterllama!</h3>
   <button className='menu-icon' onClick={handleToggleMenu}>
        {menuOpen ? <GiCrossedSlashes /> : <FaBars />}
      </button>
   <ul className={Menu ? "nav-link-menu" : "nav-links"} onClick={() => setMenu(false)}>
   <Link to='/'>
   <li>Home</li>
   </Link>
   <Link to='/signin'>
   <li>SignIn</li>
   </Link>
   <Link to='/signup'>
   <li>SignUp</li>
   </Link>
   <Link to='/contact'>
   <li>About</li>
   </Link>
  </ul>
  <button className='menu-icon'onClick={() => setMenu(!Menu)}>
  {Menu? <GiCrossedSlashes /> :  <FaBars />}</button>
  
   </nav>
  )
}
