import './VideoCarousel.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Vid1 from './logopics/High Regulation/WhatsApp Video 2024-09-15 at 01.17.55_8b4c513c.mp4';
import Vid2 from './logopics/High Regulation/WhatsApp Video 2024-09-15 at 01.17.55_8b4c513c.mp4';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.css';


const VideoCarousel = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: Vid1,
    },
    {
      id: 2,
      title: "Video 2",
      src: Vid2,
    },
  ]
  return (
    <div>
      <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer 
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={true}
              />
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