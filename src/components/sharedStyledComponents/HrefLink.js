import styled, { keyframes } from "styled-components";

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
  export default HrefLink