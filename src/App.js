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
      isTop: true
    };
  }

  componentDidMount() {
    var that = this;
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

  menuClicked() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Container>
        <Header isTop={this.state.isTop} />
        <Main />
      </Container>
    );
  }
}

export default App;
