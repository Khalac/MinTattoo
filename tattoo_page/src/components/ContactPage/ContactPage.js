import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './ContactPage.scss'
import { FaFacebook,FaInstagram,FaPhoneAlt } from "react-icons/fa"
import { GoLocation } from "react-icons/go"

function ContactPage() {
  return (
    <div className='ContactPage'>
      <div className='ContactPage_header'>
        <Header/>
      </div>
      <div className='Contact_text'>
        My contact
      </div>
      <div className='Contact_number_socialMedia'>
        <div className='Contact'>
          <FaPhoneAlt className='Icon'/> Number: (210) 843-4253
        </div>
        <div className='Contact'>
          <FaInstagram className='Icon'/> Instagram: pham.minh.phuc 
        </div>
        <div className='Contact'>
          <FaFacebook className='Icon'/> Facebook: Pham Minh Phuc (Double Pi)
        </div>
        <div className='Contact'>
          <GoLocation className='Icon'/> Location: San Antonio, Texas
          </div>
      </div>
      <div className='ContactPage_footer'>
        <Footer/>
      </div>

    </div>
  )
}

export default ContactPage