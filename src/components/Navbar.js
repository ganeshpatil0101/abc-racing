import React from "react";
import styled from 'styled-components';
const Container = styled.div`
  margin:0;
  padding:0;
  background-color: ${props => props.theme.navbar.bgColor};
`;
const Title = styled.h2`
  color:${props => props.theme.navbar.color};
  margin:0;
  line-height: 2.5;
  display: inline;
`;
const Menus = styled.div`
  float:right;
  margin-top:1em;
`;
const Button = styled.button`
  color: ${props => props.theme.slider.bgColor};
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 5px;
  margin-left:0.5em;
  text-decoration: none;
`;
function Navbar() {
  return (
    <Container>
      <header>
        <Title>ABC Racing</Title>
        <Menus>
          <Button as="a" href="#slider">Slider</Button>
          <Button as="a" href="#topRacers">Top Racers</Button>
          <Button as="a" href="#fixtures">Fixtures</Button>
        </Menus>
      </header>
    </Container>
  );
}

export default Navbar;

