import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 20%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 4fr 1fr;
  background-color: gold;
  grid-row-gap: 10px;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.3em;
  font-weight: 800;
  ::before {
    content: "cajun";
    text-transform: uppercase;
    padding: 0 10px;
  }

  ::after {
    content: "shack";
    text-transform: uppercase;
    padding: 0 10px;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }
`;

const NavToggle = styled.div``;

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Title>
          <i className="fas fa-warehouse" />
        </Title>
        <NavToggle />
      </Container>
    );
  }
}
