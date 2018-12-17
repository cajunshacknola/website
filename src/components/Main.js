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
`;

const ImageContainer = styled.img`
  width: 95%;
  border-radius: 20px;
  height: 50%;
  animation: 2s ${fadeIn} ease-in-out;
`;

const BGText = styled.div`
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* white w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 1px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  height: 80%;
  width: 70%;
  overflow: hidden;
  text-align: center;
`;

export default class Main extends Component {
  render() {
    return (
      <Container>
        <CanvasMain>
          <Holder>
            <ImageContainer src="/images/image1.jpg" />
            <BGText>
              <h2>Poboys</h2>
              <p>
                <h6>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit repudiandae corrupti accusamus
                  provident ab quos totam. Nostrum adipisci illo nam.
                </h6>
              </p>
            </BGText>
          </Holder>
          <Holder>
            <ImageContainer src="/images/image2.jpg" />
            <BGText>
              <h2>Amazing Seafood</h2>
              <p>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nisi nostrum ab laboriosam vitae saepe
                  eos debitis aperiam aspernatur nemo!
                </h6>
              </p>
            </BGText>
          </Holder>
        </CanvasMain>
      </Container>
    );
  }
}
