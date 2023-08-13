import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo5.jpg'
import {links} from '../data'
import {FaBars, FaTimes} from 'react-icons/fa'
import './navbar.css'


const Navbar = () => {



  const[isNavShowing, setisNavShowing] = useState(false)
  return (
    <nav> 
       <div className='container nav__container'>
       <Link to='/' className='logo' onClick={() => setisNavShowing(false)}>
            <img src={Logo} alt="" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
            {
              links.map(({name, path}, index) => {
                return (
                  <li key={index}>
                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : '' } onClick={() => setisNavShowing(prev => !prev ) }>{name}</NavLink>
                  </li>
                )
              })
            }
        </ul> 
        <button className='nav__toggle-btn' onClick={() => setisNavShowing(prev => !prev ) }>
          {
            isNavShowing ? <FaTimes/> : <FaBars/>
          }
        </button>
       </div>
    </nav>
  )
}

export default Navbar  