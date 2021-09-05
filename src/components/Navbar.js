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
`
function Navbar() {
  return (
    <Container>
      <header>
        <Title>ABC Racing</Title>
      </header>
    </Container>
  );
}

export default Navbar;

