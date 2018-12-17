import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  position: fixed;
  width: 100%;
  margin: 0;
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr 15%;
  grid-row-gap: 10px;
  z-index: 999;
`;

const Title = styled.div`
  display: flex;
  letter-spacing: 0.1em;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.2em;
  font-weight: 800;
  ::before {
    content: "cajun";
    text-transform: uppercase;
    margin: 0 10px;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    border-bottom: 5px solid black;
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

const ToggleContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 35px;
`;

const NavToggle = styled.div`
  position: relative;
  width: 35px;
  height: 5px;
  background-color: black;

  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 10px;
    width: 35px;
    height: 5px;
    background-color: black;
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    width: 35px;
    height: 5px;
    background-color: black;
  }
`;

const Address = styled.div`
  background-color: black;
  color: white;
  height: 30px;
  grid-column: 1 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  font-family: "Roboto";
  font-size: 0.7em;
`;

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Title>
          <i className="fas fa-warehouse" />
        </Title>
        <ToggleContainer>
          <NavToggle />
        </ToggleContainer>
        <Address>9036 Lake Forest New Orleans, LA 70127</Address>
      </Container>
    );
  }
}
