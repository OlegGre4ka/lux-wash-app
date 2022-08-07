import styled from "styled-components";

const NavbarWrapper = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 height: 90px;
 background-color: #090808;
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
export { NavbarWrapper, MenuLinksBlock, MobileMenuWrapper, HamburgerMenu }