import React from 'react';
import GoogleSvg from '../../assets/google.svg'
import FacebookSvg from '../../assets/facebook.svg'
import { FirstButton, StyledButton, StyledImg, ButtonsContainer, SecondaryButton, StyledSecondButton } from './Button.style';

export default function Button({ text }) {
  return (
    <>
    <ButtonsContainer>
        <FirstButton>
            <StyledImg src={GoogleSvg} alt="" />
            <StyledButton>  
                {text}
            </StyledButton>
        </FirstButton>
        <SecondaryButton>
            <StyledImg src={FacebookSvg} alt=""/>
            <StyledSecondButton>
                {text}
            </StyledSecondButton>
        </SecondaryButton>
    </ButtonsContainer>
    </>
  );
}