import './Homepage.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import React from 'react'
import {Link} from "react-router-dom"



function Homepage() {
  return (
    <div className='Homepage'>
      <div className='Homepage_header_text'>
        <div className='Homepage_header'>
          <Header/>
        </div>
        <div className='Homepage_text'>
          MAKE YOU MORE BADASS
        </div>
      </div>

      <div className='link_page'>
        <Link to='/About' className='About_link'>
          About
        </Link>
        <Link to='/Tattoos' className='Tattoos_link'>
          Tattoos
        </Link>
        <Link to='/Art' className='Art_link'>
          Art
        </Link>
        <Link to='/Contact' className='Contact_link'>
          Contact
        </Link>
      </div>

      <div className='Author_text'>
        A text
      </div>

      <div className='Homepage_footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default Homepage
