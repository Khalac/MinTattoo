import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import './TattoosPage.scss'




function TattoosPage() {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }
  const images = importAll(require.context('../../../imgTattoo', false, /\.webp$/));
  let imgArr = []
  for (let i = 1; i <=66;++i){
    imgArr.push(images[`${i}.webp`])
  }

  const listImg = imgArr.map(img => {
    return <img src={img} alt='img' loading="lazy" className='imgTattoos'/>
  })

  
  return (
    <div className='TattoosPage'>
      <div className='TattoosPage_header'>
        <Header/>
      </div>
      <div className = 'TattoosPage_headImg'>
        <div className='Tattoo_background'> </div>
        <div className='Tattoo_headImg'>
        </div>
      </div>
      <div className='TattoosPage_img'>
          {
            listImg
          }
      </div> 
      <div className='TattoosPage_footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default TattoosPage