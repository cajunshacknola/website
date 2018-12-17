import React, { Component } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Main from "./components/Main";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
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
        <Main />
      </Container>
    );
  }
}

export default App;
