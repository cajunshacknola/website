import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import background from "./images/hero.jpg";

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Title = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  grid-column: 1/2;
`;

const Nav = styled.nav`
  color: white;
  grid-column: 3/4;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuItem = styled.li`
  margin-left: 2em;
  :hover {
    color: black;
  }
`;

const Background = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
`;

const Header = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr auto minmax(600px, 1fr) 1fr;
  position: fixed;
  top: 0;
  font-size: 1.5em;
  height: ${props => (props.isTop ? 80 : 50)}px;
  width: 100%;
  background-color: rgb(33, 33, 33, ${props => (props.isTop ? 0.5 : 1)});
  transition: all 500ms ease-in-out;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true
    };
  }

  componentDidMount() {
    const that = this;
    window.onscroll = function() {
      if (window.pageYOffset === 0) {
        that.setState({
          isTop: true
        });
      } else {
        that.setState({
          isTop: false
        });
      }
    };
  }

  render() {
    return (
      <Container>
        <Background img={background} />
        <Header isTop={this.state.isTop}>
          <Title>cajun shack nola</Title>
          <Nav>
            <Menu>
              <MenuItem>item 1</MenuItem>
              <MenuItem>item 2</MenuItem>
              <MenuItem>item 2</MenuItem>
              <MenuItem>item 2</MenuItem>
              <MenuItem>item 2</MenuItem>
            </Menu>
          </Nav>
        </Header>
      </Container>
    );
  }
}

export default App;
