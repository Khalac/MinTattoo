import './Homepage.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import React from 'react'
import {Link} from "react-router-dom"
import { GoLocation } from "react-icons/go"


function Homepage() {
  return (
    <div className='Homepage'>
      <div className='Homepage_header_text'>
        <div className='Homepage_header'>
          <Header/>
        </div>
        <div className='Homepage_text'>
        FLY AWAY WITH ART
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

      <div className='Author_location'>
       <div className='Author_location_icon'> <GoLocation/> Location </div>
       <div className='Author_location_text'>San Antonio, Texas</div>
      </div>

      <div className='Homepage_footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default Homepage
