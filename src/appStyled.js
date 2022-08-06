import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const AppWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const borderAnimation = keyframes`
0% {
  color: white; 
  border-bottom-color: transparent;
}
100% {
  color: #00b900;
  border-bottom-color: #00b900;
}
`
const MenuLink = styled(Link)`
 display: flex;
 position: relative;
 font-family: 'Roboto';
 font-size: ${props => props.fontSize ? props.fontSize : "20px"};
 font-weight: 400;
 color: ${props => props.isActive ? "#00b900" : "white"}; 
 border-bottom: ${props => props.isBorderBottom ? "none" : `2px solid  ${props.isActive ? "#00b900" : "transparent"}`};
 text-decoration: none;
 padding-bottom: 3px;
 margin-left: ${props => props.marginLeft ? props.marginLeft : "80px"};
 margin-bottom: ${props => props.marginBottom ? props.marginBottom : ""};
 &:last-child {
     margin-right: 101px;
 }
 &:hover {
     text-decoration: none;
     padding-bottom: 3px;
     animation:  ${props => !props.isActive && borderAnimation} .4s 1 linear forwards;
 }
`
const HrefLink = styled.a.attrs(({href}) => ({
  href: href ? href : "",
}))`
 display: flex;
 position: relative;
 font-family: 'Roboto';
 font-size: ${props => props.fontSize ? props.fontSize : "20px"};
 font-weight: 400;
 color: ${props => props.isActive ? "#00b900" : "white"}; 
 border-bottom: ${props => props.isBorderBottom ? "none" : `2px solid  ${props.isActive ? "#00b900" : "transparent"}`};
 text-decoration: none;
 padding-bottom: 3px;
 margin-left: ${props => props.marginLeft ? props.marginLeft : "80px"};
 margin-bottom: ${props => props.marginBottom ? props.marginBottom : ""};
 &:last-child {
     margin-right: 101px;
 }
 &:hover {
     text-decoration: none;
     padding-bottom: 3px;
     animation:  ${props => !props.isActive && borderAnimation} .4s 1 linear forwards;
 }
`
const FlexBox = styled.div`
  display: flex;
  justify-content ${({justifyContent})=> justifyContent ? justifyContent : null};
  flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : null};
  align-items: ${({alignItems}) => alignItems ? alignItems : null};
  width: ${({width}) => width ? width : ""};
  height: ${({height}) => height ? height : ""};
  margin: ${({margin}) => margin ? margin : ""};
  padding: ${({padding}) => padding ? padding : ""};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ""};
  wrap: wrap;
  cursor:${({cursor}) => cursor ? cursor : "auto"};
  transition: all 0.3s ease 0s;

  &:hover {
    transform: ${({hoverTransform}) => hoverTransform ? hoverTransform : null};
  }

  @media (max-width:480px){
    display: ${({displayMobile}) => displayMobile ? displayMobile : null};
    flex-direction: ${({flexDirectionMobile}) => flexDirectionMobile ? flexDirectionMobile : null};
    width: ${props => props.widthMobile ? props.widthMobile : ""};
    padding: ${props => props.padding ? props.padding : ""};
  }
`
const Text = styled.span`
  display: block;
  font-family: ${props => props.fontFamily ? props.fontFamily : 'Roboto'};
  color: ${props => props.color ? props.color : "#E1FCB7"}; 
  font-size: ${props => props.fontSize ? props.fontSize : "20px"};
  font-weight: ${props => props.fontWeight ? props.fontWeight : "400"};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : ""};
  text-transform: ${props => props.textDecoration && props.textDecoration}; 
  text-align: ${({textAlign}) => textAlign ? textAlign : "left"}; 
  white-space: normal;

  @media (max-width:480px){
    font-size: ${props => props.fontSizeMobile && props.fontSizeMobile};
    width: 307px;
    height: ${props => props.heightMobile ? props.heightMobile : "185px"};
    text-align: center;
  }
`
const InputError = styled.span`
  font-size: 16px;
  color: red;
`
export { AppWrapper, Text, MenuLink, HrefLink, FlexBox, InputError }