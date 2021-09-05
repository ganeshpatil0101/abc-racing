import React from "react";
import styled from 'styled-components';
const Container = styled.div`
  margin:0;
  padding:0;
  height:620px;
  background-color: ${props => props.theme.topRacers.bgColor};
`;
const Title = styled.h2`
  color:${props => props.theme.topRacers.color};
  margin:0;
  line-height: 2.5;
`;
function TopRacers() {
  return (
    <Container id="topRacers">
      <Title>TopRacers</Title>
    </Container>
  );
}

export default TopRacers;


