import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import { FaFacebook,FaInstagram } from "react-icons/fa"



function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer_linkToPage'>
          <Link to='/About' className='Footer_link'>About</Link>
          <Link to='/Tattoos' className='Footer_link'>Tattoos</Link>
          <Link to='/Art' className='Footer_link'>Art</Link>
          <Link to='/Contact' className='Footer_link'>Contact</Link>
          
      </div>
      <div className='Icon_socialMedia'>
        <a href='https://www.instagram.com/pham.minh.phuc/' className='Footer_Icon'><FaInstagram /></a>
        <a href='https://www.facebook.com/profile.php?id=100010078476236' className='Footer_Icon'><FaFacebook /></a>
      </div>
      <div className="Footer_text">
        Made in VietNam
      </div>
    </div>
  )
}

export default Footer