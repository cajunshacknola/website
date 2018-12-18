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

const Description = styled.div`
  font-size: 0.8em;
  font-style: italic;
  padding: 30px;
`;

export default class Main extends Component {
  render() {
    return (
      <Container>
        <CanvasMain>
          <Holder>
            <ImageContainer src="/images/image1.jpg" />
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea omnis dolorum magnam nostrum nihil iste,
              et repellendus molestias qui eum. Maxime, provident officia voluptates repellendus perspiciatis, quisquam
              deleniti repellat cum voluptate eveniet velit modi consequuntur nam laudantium minima distinctio. Unde
              quaerat dicta dolor recusandae quibusdam eligendi, ipsam iure exercitationem!
            </Description>
          </Holder>
          <Holder>
            <ImageContainer src="/images/image2.jpg" />
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam itaque libero corporis, aliquid
              explicabo distinctio consectetur tempora architecto, corrupti beatae delectus ad nisi quod! Vero, quos?
              Veniam provident nulla dignissimos minima consequatur fuga. Doloribus dolore quidem est ea vero animi
              laborum, distinctio possimus iste ratione nostrum minus error cumque tenetur repellat? Dolore ea ratione
              tenetur totam cum odio temporibus itaque.
            </Description>
          </Holder>
        </CanvasMain>
      </Container>
    );
  }
}
