import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import './ArtPage.scss'

function ArtPage() {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }
  const images = importAll(require.context('../../../imgArts', false, /\.JPG$/));
  let imgArr = []
  for (let i = 1; i <=5;++i){
    imgArr.push(images[`${i}.JPG`])
  }

  const listImg = imgArr.map(img => {
    return <img src={img} alt='img' className='imgArt'/>
  })
  return (
    <div className='ArtPage'>
    <div className='ArtPage_header'>
      <Header/>
    </div>
    <div className='ArtPage_img'>
        {
          listImg
        }
    </div> 
    <div className='ArtPage_footer'>
      <Footer/>
    </div>
  </div>
  )
}

export default ArtPage