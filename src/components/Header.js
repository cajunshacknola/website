import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  position: fixed;
  width: 100%;
  margin: 0;
  padding: ${props => (props.isTop ? 20 : 5)}px 0;
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
  transform: scale(${props => (props.isTop ? 1 : 0.8)});
  transform-origin: left;
  transition: transform 300ms ease-in-out;
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
  z-index: 1001;
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
  position: relative;
  background-color: black;
  color: white;
  height: ${props => (props.isTop ? 30 : 3)}px;
  grid-column: 1 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  font-family: "Roboto";
  font-size: 0.7em;
  /* transform: scale(${props => (props.isTop ? 1 : 0)}); */
  transition: all 300ms ease-in-out;
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  background-color: rgb(255, 255, 255);
  color: black;
  transform: scale(${props => (props.isOpen ? 1 : 0)});
  transition: transform 250ms ease-in-out;
  transform-origin: top;
`;

const Menu = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-top: 20px;
  font-weight: 800;
  font-size: 2em;
  border-bottom: 3px solid black;
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Container istop={this.props.istop}>
        <Title isTop={this.props.isTop}>
          <i className="fas fa-warehouse" />
        </Title>
        <MenuContainer isOpen={this.state.isOpen}>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Menu</MenuItem>
            <MenuItem>Catering</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </MenuContainer>
        <ToggleContainer onClick={this.toggle}>
          <NavToggle />
        </ToggleContainer>
        <Address isTop={this.props.isTop}>{this.props.isTop ? "9036 Lake Forest New Orleans, LA 70127" : ""}</Address>
      </Container>
    );
  }
}
