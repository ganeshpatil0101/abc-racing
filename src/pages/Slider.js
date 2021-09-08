import React from "react";
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
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
function Slider({sliderData}) {
  const {t} = useTranslation();
  return (
    <Container id="slider" data-testid="slider-container">
      <Title>{t('slider.title')}</Title>
      {sliderData && sliderData.urls && 
        <img src={sliderData.urls.small} 
          srcSet={
            `${sliderData.urls.thumb} 100w,
             ${sliderData.urls.small} 400w,
             ${sliderData.urls.regular} 1080w
             `
          }
          width="100%"
        alt={sliderData.alt_description} />}
    </Container>
  );
}
Slider.propTypes = {
  sliderData: PropTypes.object
}
export default Slider;


