import React from 'react';
import Gallery from 'react-image-gallery';
import ReactPlayer from 'react-player';
import img from "../Images/main/bg.jpeg"
import vd from "../Images/video/video1.mp4"
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

const videos = [
  vd,
];

const ImageGallery = () => {
  return (
    <div className="image-gallery-container">
        <h1 className='info-title'>
            Galery
        </h1>
        <Gallery items={images} />
        <div className='video-container'>
          <div className="video-gallery-container">
            {videos.map((videoUrl, index) => (
              <div key={index} className="video-item">
                <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default ImageGallery;
