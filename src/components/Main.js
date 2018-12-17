import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const CanvasMain = styled.div`
  border: 10px solid #ffc600;
  margin: 10px;
  height: 80vh;
`;

const Canvas = styled.div`
  border: 10px solid #ffc600;
  margin: 10px;
`;

const Holder = styled.div`
  width: 100%;
  height: 80vh;
`;

const ImageContainer = styled.img`
  height: 100%;
  filter: blur1(px);
`;

const BGText = styled.div`
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
`;

export default class Main extends Component {
  render() {
    var settings = {
      dots: false,
      fade: true,
      autoplay: true,
      arrows: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            fade: true,
            autoplay: true,
            arrows: false,
            infinite: true,
            speed: 2000
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false,
            fade: true,
            autoplay: true,
            arrows: false,
            infinite: true,
            speed: 2000
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            fade: true,
            autoplay: true,
            arrows: false,
            infinite: true,
            speed: 2000
          }
        }
      ]
    };
    return (
      <Container>
        <CanvasMain>
          <Slider {...settings}>
            <Holder>
              <ImageContainer src="/images/image1.jpg" />
              <BGText>best poboys</BGText>
            </Holder>
            <Holder>
              <ImageContainer src="/images/image2.jpg" />
              <BGText>amazing seafoods</BGText>
            </Holder>
          </Slider>
        </CanvasMain>
        <Canvas>item2</Canvas>
      </Container>
    );
  }
}
