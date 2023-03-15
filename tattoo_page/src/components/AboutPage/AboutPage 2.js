import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './AboutPage.scss'

function AboutPage() {
  return (
    <div className='AboutPage'>
      <div className='AboutPage_header'>
        <Header/>
      </div>
      <div className='Author_name'>
        Minh Phuc Pham
      </div>
      <div className='About_text'>
        Text
      </div>
      <div className='AboutPage_footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default AboutPage