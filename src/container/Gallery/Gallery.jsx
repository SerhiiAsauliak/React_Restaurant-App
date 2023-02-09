import React, { useRef } from 'react';
import SubHeading from './../../components/SubHeading/SubHeading';
import images from "../../constants/images";
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = useRef(null)
  console.log(scrollRef.current)
  const scroll = (direction) => {
    const {current} = scrollRef;
    if(direction === 'left') {
      current.scrollLeft -= 300 
    } else {
      current.scrollLeft += 300
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram'/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p style={{color: '#AAA', margin: '2rem 0'}} className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center'>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className='app__galery-images_arrows'>
          <BsArrowLeftShort 
            className='gallery-arrow-icon' 
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort  
            className='gallery-arrow-icon' 
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery;
