import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  menuClicked() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Container>
        <Header />
      </Container>
    );
  }
}

export default App;
