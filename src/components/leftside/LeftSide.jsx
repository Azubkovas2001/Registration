import React from 'react'
import IlliustrationSvg from '../../assets/illustration.svg'
import LogoSvg from '../../assets/logo.svg'
import { LeftContainer, ImageContainer, LogoContainer, Content } from './LeftSide.style'
export default function LeftSide() {
  return (
    <LeftContainer>
        <LogoContainer><img src={LogoSvg} alt="" /></LogoContainer>
        <ImageContainer><img src={IlliustrationSvg} alt="" /></ImageContainer>
        <Content>Start for free & Get <br />Attractive offers Today !</Content>
    </LeftContainer>
  )
}
