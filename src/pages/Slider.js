import React from "react";
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
const Container = styled.div`
  margin:0;
  padding:0;
  height:550px;
  background-color: ${props => props.theme.slider.bgColor};
`;
const Title = styled.h2`
  color:${props => props.theme.slider.color};
  margin:0;
  line-height: 2.5;
`
function Slider() {
  const {t} = useTranslation();
  return (
    <Container id="slider" data-testid="slider-container">
      <Title>{t('slider.title')}</Title>
    </Container>
  );
}

export default Slider;


