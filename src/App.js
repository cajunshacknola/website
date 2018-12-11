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
`;

const Nav = styled.nav`
  color: white;
`;

const Background = styled.div`
  background-image: url(${props => props.img});
  height: 120vh;
`;

const Header = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 4fr;
  position: fixed;
  top: 0;
  height: ${props => (props.isTop ? 100 : 50)}px;
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
      <Header>
        <Background img={background} />
        <Header isTop={this.state.isTop}>
          <Title>cajun shack nola</Title>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 2</li>
            <li>item 2</li>
            <li>item 2</li>
          </ul>
        </Header>
      </Header>
    );
  }
}

export default App;
