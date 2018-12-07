import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import styled from "styled-components";

const Title = styled.a`
  font-size: 1.5em;
  color: red !important;
  padding: 1em;
`;

const SubTitle = styled.span`
  color: gray !important;
  font-style: italic;
`;

const StyledMenu = styled.div`
  color: black !important;
  font-size: 1.2em;
  font-family: "Tahoma";
  font-weight: bold;
  padding: 0.25em;
`;

const StyledNavbar = styled(Navbar)`
  background-color: white;
  border: none;
`;

export default class Header extends Component {
  render() {
    return (
      <StyledNavbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Title href="https://www.google.com">
              cajun store<SubTitle> nola</SubTitle>
            </Title>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <StyledMenu>Menu</StyledMenu>
            </NavItem>
            <NavItem>
              <StyledMenu>Story</StyledMenu>
            </NavItem>
            <NavItem>
              <StyledMenu>Rewards</StyledMenu>
            </NavItem>
            <NavItem>
              <StyledMenu>Catering</StyledMenu>
            </NavItem>
            <NavItem>
              <StyledMenu>Contact us</StyledMenu>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>
    );
  }
}
