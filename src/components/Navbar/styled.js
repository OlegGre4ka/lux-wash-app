import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
 display: flex;
 height: 90px;
 background-color: #090808;
`
const MenuLink = styled(Link)`
 color: white; 
 text-decoration: none;
 margin: 10px;
`
export { NavbarWrapper, MenuLink }