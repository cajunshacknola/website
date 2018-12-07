import React, { Component } from "react";
import "./App.css";
import { Grid, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>This should be the body</Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
