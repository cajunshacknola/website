import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const CanvasMain = styled.div`
  background-color: black;
  border: 10px solid #ffc600;
  margin: 10px;
  height: 80vh;
`;

const Canvas = styled.div`
  background-color: black;
  border: 10px solid #ffc600;
  margin: 10px;
`;

export default class Main extends Component {
  render() {
    return (
      <Container>
        <CanvasMain>item1</CanvasMain>
        <Canvas>item2</Canvas>
      </Container>
    );
  }
}
