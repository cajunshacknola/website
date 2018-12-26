import React, { Component } from "react";
import styled from "styled-components";
import ScrollLock from "react-scrolllock";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: white;
  position: fixed;
  width: 100%;
  margin: 0;
  padding: ${props => (props.isTop ? 20 : 5)}px 0;
  display: grid;
  grid-template-columns: 1fr 15%;
  grid-row-gap: 5px;
  z-index: 999;
`;

const Title = styled.div`
  display: flex;
  letter-spacing: 0.1em;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.7em;
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
    /* border-bottom: 5px solid black; */
  }

  ::after {
    content: "shack";
    text-transform: uppercase;
    margin: 0 10px;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    /* border-bottom: 5px solid black; */
  }
`;

const ToggleContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 30px;
  z-index: 1001;
`;

const NavToggle = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 30px;
  height: 4px;
  background-color: ${props => (props.isOpen ? "white" : "black")};
  ::before {
    content: "";
    display: block;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 10px;
    width: 30px;
    height: 4px;
    background-color: black;
    transform: rotate(${props => (props.isOpen ? -41 : 0)}deg);
    transform-origin: left;
    transition: transform 250ms ease-in-out;
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    margin: 0;
    padding: 0;
    top: -10px;
    width: 30px;
    height: 4px;
    background-color: black;
    transform: rotate(${props => (props.isOpen ? 41 : 0)}deg);
    transform-origin: left;
    transition: transform 250ms ease-in-out;
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  z-index: 1000;
  background-color: rgb(255, 255, 255);
  color: black;
  transform: scale(${props => (props.isOpen ? 1 : 0)});
  transition: transform ${props => (props.isOpen ? 250 : 0)}ms ease-in-out;
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
  font-weight: 500;
  font-size: 1.5em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: white;
  color: #333;
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  navigate() {
    this.setState({
      isOpen: false
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Container istop={this.props.istop}>
        {this.state.isOpen && <ScrollLock />}
        <Title isTop={this.props.isTop}>
          <i className="fas fa-warehouse" />
        </Title>
        <MenuContainer isOpen={this.state.isOpen}>
          <Menu>
            <MenuItem>
              <StyledLink onClick={this.navigate} to="/">
                Home
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink onClick={this.navigate} to="/menu">
                Menu
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/catering">Catering</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/about">About</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/contact">Contact</StyledLink>
            </MenuItem>
          </Menu>
        </MenuContainer>
        <ToggleContainer onClick={this.toggle}>
          <NavToggle isOpen={this.state.isOpen} />
        </ToggleContainer>
        <Address isTop={this.props.isTop}>{this.props.isTop ? "9036 Lake Forest New Orleans, LA 70127" : ""}</Address>
      </Container>
    );
  }
}
