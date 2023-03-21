import React from 'react'
import './Header.scss'
import {Link} from "react-router-dom"
import { useState } from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai"
function Header() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className={isMobile? 'header_mobile' :'header'} >
        <Link to='/' className='page_name'>  <img src = {require('./logo.webp')} alt = 'img' className='header_logo' /> </Link>
        <div className={isMobile? 'left_header_mobile' :'left_header'} onClick= {() => setIsMobile(false)}>
          <Link to='/About' className='left_header_component'>About</Link>
          <Link to='/Tattoos' className='left_header_component'>Tattoos</Link>
          <Link to='/Art' className='left_header_component'>Art</Link>
          <Link to='/Contact' className='left_header_component'>Contact</Link>
        </div>
        <div className='MenuIcon_mobile' onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <AiOutlineClose/> : <AiOutlineMenu/>}
        </div>
    </div>
  )
}

export default Header