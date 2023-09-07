// src/components/ImageGallery.js
import React from 'react';
import Gallery from 'react-image-gallery';
import img from "../Images/main/bg.jpeg"
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: img, 
    thumbnail: img, 
  },
  {
    original: img, 
    thumbnail: img, 
  },
];

const ImageGallery = () => {
  return (
    <div className="image-gallery-container">
        <h1 className='info-title'>
            Galery
        </h1>
        <Gallery items={images} />
    </div>
  );
}

export default ImageGallery;
