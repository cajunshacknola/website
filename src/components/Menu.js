import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0;
  margin: 0;
  background-color: #fcf8f4;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  height: 100%;
`;

const Heading = styled.div`
  width: 80%;
  height: 100%;
  font-size: 1.1em;
  font-family: "Roboto";
  letter-spacing: 0.1em;
  padding-bottom: 15px;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
  font-weight: 800;
  margin: 20px 0;
`;

const Item = styled.div`
  padding: 8px;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.div`
  width: 75%;
  font-style: italic;
`;

const Price = styled.div`
  width: 20%;
  font-style: italic;
  display: flex;
  justify-content: flex-start;
  ::before {
    content: "$ ";
  }
`;

export default class Menu extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Heading>sandwiches</Heading>
          <Item>
            <Title>shrimp poboy</Title>
            <Price>9.99</Price>
          </Item>
          <Item>
            <Title>roastbeef poboy</Title>
            <Price>8.99</Price>
          </Item>
          <Item>
            <Title>oyster poboy</Title>
            <Price>10.99</Price>
          </Item>
          <Item>
            <Title>shrimp & oyster poboy</Title>
            <Price>9.99</Price>
          </Item>
          <Item>
            <Title>hot sausage poboy</Title>
            <Price>11.99</Price>
          </Item>
          <Item>
            <Title>ham poboy</Title>
            <Price>8.99</Price>
          </Item>
          <Item>
            <Title>chicken poboy</Title>
            <Price>10.99</Price>
          </Item>
          <Item>
            <Title>fish poboy</Title>
            <Price>10.99</Price>
          </Item>
          <Item>
            <Title>special poboy</Title>
            <Price>10.99</Price>
          </Item>
          <Item>
            <Title>veggie poboy</Title>
            <Price>10.99</Price>
          </Item>
          <Item>
            <Title>vietnamese poboy</Title>
            <Price>10.99</Price>
          </Item>
          <Heading>Platters</Heading>
          <Item>
            <Title>shrimps plate</Title>
            <Price>15.99</Price>
          </Item>
          <Item>
            <Title>oysters plate</Title>
            <Price>15.99</Price>
          </Item>
          <Item>
            <Title>shrimps & oysters</Title>
            <Price>16.99</Price>
          </Item>
        </Wrapper>
      </Container>
    );
  }
}
