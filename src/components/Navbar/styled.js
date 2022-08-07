import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 height: 90px;
 background-color: #090808;
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
 justify-content ${({justifyContent})=> justifyContent ? justifyContent : null};
 align-items: ${({alignItems}) => alignItems ? alignItems : null};
 position: relative;
 font-family: 'Roboto';
 font-size: 20px;
 font-weight: 400;
 width: 100%;
 width: ${({isNotFitContent}) => isNotFitContent ? null : "fit-content"};
 color: ${props => props.isActive ? "#00b900" : "white"}; 
 border-bottom: ${props => props.isBorderBottom ? "none" : `2px solid  ${props.isActive ? "#00b900" : "transparent"}`};
 text-decoration: none;
 padding-bottom: 3px;
 margin-left: 80px;
 margin-top: ${({marginTop}) => marginTop ? marginTop : ""}; 
 margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : ""}; 

 &:last-child {
     margin-right: 101px;
 }
 &:hover {
     text-decoration: none;
     padding-bottom: 3px;
     animation:  ${props => !props.isActive && borderAnimation} .4s 1 linear forwards;
 }
 
 @media (max-width:480px){
   margin-left: ${({marginLeft}) => marginLeft ? marginLeft : "24px"};
}
`

const MenuLinksBlock = styled.div`
 display: flex;
 align-items: center;
 height: 90px;
 
 @media (max-width:480px){
   display: none;
 }
`
const MobileMenuWrapper = styled.div`
 display: flex;
 flex-direction: column;
 background-color: #090808;
 height: 100%;
 width: ${({isMenu}) => isMenu ? "100%" : "0%"};
 position: fixed;
 z-index: 1;
 top: 0;
 left: 0;
 overflow-x: hidden;
 transition: 2s;
`
const HamburgerMenu = styled.div`
 font-size: ${({fontSize}) => fontSize ? fontSize : "20px"};
 color: white;
 margin-top: ${({marginTop}) => marginTop ? marginTop : "0px"};;
 margin-right: 24px;
 text-align: right;
 cursor: pointer;

 @media (min-width:480px){
  display: none;
}
`
export { NavbarWrapper, MenuLink, MenuLinksBlock, MobileMenuWrapper, HamburgerMenu }