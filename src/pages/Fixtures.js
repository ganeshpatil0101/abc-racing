import React from "react";
import styled from 'styled-components';
const Container = styled.div`
  margin:0;
  padding:0;
  height:620px;
  background-color: ${props => props.theme.fixtures.bgColor};
`;
const Title = styled.h2`
  color:${props => props.theme.fixtures.color};
  margin:0;
  line-height: 2.5;
`;
function Fixtures() {
  return (
    <Container id="fixtures">
      <Title>Fixtures</Title>
    </Container>
  );
}

export default Fixtures;


