import React from 'react'
import './Header.scss'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='header'>
        <Link to='/' className='page_name'>Min</Link>
        <div className='left_header'>
          <Link to='/About' className='left_header_component'>About</Link>
          <Link to='/Tattoos' className='left_header_component'>Tattoos</Link>
          <Link to='/Art' className='left_header_component'>Art</Link>
          <Link to='/Contact' className='left_header_component'>Contact</Link>
        </div>
    </div>
  )
}

export default Header