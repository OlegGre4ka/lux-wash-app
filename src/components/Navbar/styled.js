import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;
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
 position: relative;
 font-family: 'Roboto';
 font-size: 20px;
 font-weight: 400;
 color: ${props => props.isActive ? "#00b900" : "white"}; 
 border-bottom: ${props => props.isBorderBottom ? "none" : `2px solid  ${props.isActive ? "#00b900" : "transparent"}`};
 text-decoration: none;
 padding-bottom: 3px;
 margin-left: 80px;
 &:last-child {
     margin-right: 101px;
 }
 &:hover {
     text-decoration: none;
     padding-bottom: 3px;
     animation:  ${props => !props.isActive && borderAnimation} .4s 1 linear forwards;
 }
`

const MenuLinksBlock = styled.div`
 display: flex;
 align-items: center;
 height: 90px;
`
export { NavbarWrapper, MenuLink, MenuLinksBlock }