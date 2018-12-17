import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1
}`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100px;
`;

const CanvasMain = styled.div`
  height: 100vh;
  margin-top: 10px;
`;

const Holder = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: column;
`;

const ImageContainer = styled.img`
  width: 95%;
  border-radius: 20px;
  height: 50%;
  animation: 2s ${fadeIn} ease-in-out;
`;

const Heading = styled.div`
  font-size: 1.5em;
`;

const Description = styled.div`
  font-size: 0.8em;
  font-style: italic;
  padding: 10px;
`;

export default class Main extends Component {
  render() {
    return (
      <Container>
        <CanvasMain>
          <Holder>
            <ImageContainer src="/images/image1.jpg" />
            <Heading>Po-boys</Heading>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam in soluta, accusantium vel placeat at
              alias eos rerum nam.
            </Description>
          </Holder>
          <Holder>
            <ImageContainer src="/images/image2.jpg" />
            <Heading>Seafood</Heading>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quae iure aspernatur magni soluta possimus
              odio facilis velit suscipit sapiente maiores error. Culpa assumenda sapiente dolore, cum iure nulla
              debitis.
            </Description>
          </Holder>
        </CanvasMain>
      </Container>
    );
  }
}
