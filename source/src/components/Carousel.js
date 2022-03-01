import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../App.css';

import diablo from '../images/games/diablo.jpg';
import doom from '../images/games/doom.jpg';
import minecraft from '../images/games/minecraft.png';
import nextIcon from '../images/icons/next.svg';
import backIcon from '../images/icons/back.svg';

export default function Navbar() {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <div className="carousel-control">
              <img className="carousel-images" src={diablo} alt="diablo" />
              <ButtonNext>
                <img className="utility-icons" src={nextIcon} alt="next icon" />
              </ButtonNext>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="carousel-control">
              <ButtonBack>
                <img className="utility-icons" src={backIcon} alt="next icon" />
              </ButtonBack>
              <img className="carousel-images" src={doom} alt="doom" />
              <ButtonNext>
                <img className="utility-icons" src={nextIcon} alt="next icon" />
              </ButtonNext>
            </div>
          </Slide>

          <Slide index={2}>
            <div className="carousel-control">
              <ButtonBack>
                <img className="utility-icons" src={backIcon} alt="next icon" />
              </ButtonBack>
              <img className="carousel-images" src={minecraft} alt="Minecraft" />
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
}
