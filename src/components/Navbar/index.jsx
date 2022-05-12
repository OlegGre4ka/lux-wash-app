import { NavbarWrapper, MenuLink } from "./styled.js";
export default function Navbar() {
    return (
        <NavbarWrapper>
                    <MenuLink to="/">Головна</MenuLink>

                    <MenuLink to="/about">Про нас</MenuLink>
     
                    <MenuLink to="/drivers">Для водіїв</MenuLink>
      
                    <MenuLink to="/business">Для бізнесу</MenuLink>
          
                    <MenuLink to="/technologies">Технології</MenuLink>
          
                    <MenuLink to="/services">Послуги</MenuLink>
       
                    <MenuLink to="/contacts">Контакти</MenuLink>
        </NavbarWrapper>
    )
}
