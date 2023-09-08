import React from 'react';
import Gallery from 'react-image-gallery';
import ReactPlayer from 'react-player';
import img from "../Images/main/bg.jpg";
import img1 from "../Images/main/bg2.jpeg"
import img2 from "../Images/main/bg3.jpg"
// import vd from "../Images/video/video1.mp4";
import { useTranslation } from 'react-i18next';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: img1, 
    thumbnail: img1, 
  }
];

const videos = [
  "https://www.youtube.com/watch?v=Ql8uHsXY02s&t=17s",
  "https://www.youtube.com/watch?v=xeUp9lYc-vM"
];

const ImageGallery = () => {
  const [ t , i18n ] = useTranslation("global");

  return (
    <div className="image-gallery-container" id='gallery'>
        <h1 className='info-title'>
            {t("Gallery.G-Title")}
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
