import './VideoCarousel.css';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Vid1 from './logopics/High Regulation/WhatsApp Video 2024-09-15 at 01.17.55_8b4c513c.mp4';
import Vid2 from './logopics/High Regulation/WhatsApp Video 2024-09-15 at 01.17.55_8b4c513c.mp4';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.css';


const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: Vid1,
      link: "https://www.youtube.com/embed/VwSFpOGAwKg?si=GmEegiiwDJAJqBv1",
      
    },
    {
      id: 2,
      title: "Video 2",
      src: Vid2,
      link: "https://www.youtube.com/embed/d8gqXgLzSDk?si=v9Y1p7H9TEAOjYXC",
    },
  ]

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        {videoProperties.map((videoObj, index) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <a href={videoObj.link} target="_blank" rel="noopener noreferrer">
                <ReactPlayer 
                  url={videoObj.src}
                  pip={true}
                  controls={true}
                  // playing={true}
                  playing={activeIndex === index}
                  link={true}
                />
              </a>
              {/* <Carousel.Caption>
                <h3>{videoObj.title}</h3>
                <p>{videoObj.credit}</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default VideoCarousel;