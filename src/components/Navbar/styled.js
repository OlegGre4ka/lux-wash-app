import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 90px;
 background-color: #090808;
`
const MenuLink = styled(Link)`
 display: flex;
 font-family: 'Roboto';
 font-size: 20px;
 font-weight: 400;
 color: ${props => props.isActive ? "#00b900" : "white"}; 
 text-decoration: ${props => props.isActive ? "underline" : "none"};
 margin-left: 80px;
 &:last-child {
     margin-right: 101px;
 }
 &:hover {
     color: #00b900;
     text-decoration: underline;
 }
`

const MenuLinksBlock = styled.div`
 display: flex;
 align-items: center;
 height: 90px;
`
export { NavbarWrapper, MenuLink, MenuLinksBlock }