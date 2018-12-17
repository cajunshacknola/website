import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0;
  background-image: url(/images/header.png);
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr 15%;
  background-color: gold;
  grid-row-gap: 10px;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.4em;
  font-weight: 800;
  ::before {
    content: "cajun";
    text-transform: uppercase;
    margin: 0 10px;
    border-bottom: 5px solid white;
  }

  ::after {
    content: "shack";
    text-transform: uppercase;
    margin: 0 10px;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    border-bottom: 5px solid black;
  }
`;

const NavToggle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 5px;
  background-color: black;

  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 10px;
    width: 40px;
    height: 5px;
    background-color: black;
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    width: 40px;
    height: 5px;
    background-color: black;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Title>
          <i className="fas fa-warehouse fa-2x" />
        </Title>
        <NavToggle />
      </Container>
    );
  }
}
