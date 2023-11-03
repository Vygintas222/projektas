import React from 'react'
import {  NavLink } from 'react-router-dom'
import './Header.css'
const Headerr = () => {
  return (
    
    <div className='page-header'>

      <nav className='main-navigation'>
        <ul className='nav-list'>
           
          <li>  
            <NavLink className='nav-item' to='/home'>Home</NavLink>
          </li>

          <li>  
            <NavLink className='nav-item' to='/authors'>Authors</NavLink>
          </li>
          
          <li>  
            <NavLink className='nav-item' to='/books'>Books</NavLink>
          </li>
          <li>  
            <NavLink className='nav-item' to='/genres'>Genres</NavLink>
          </li>
        </ul>


    
      </nav>
   
  </div>
  )
}

export default Headerr