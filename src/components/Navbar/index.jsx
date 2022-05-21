import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavbarWrapper, MenuLink, MenuLinksBlock, HamburgerMenu } from "./styled.js";
import LogoNavBar from "./../../assets/LogoNavBar.png";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const { pathname } = useLocation();

    const [isMenu, setIsMenu] = useState(false);
 
    return (
        <>
            <NavbarWrapper>
                <MenuLink to="/" isBorderBottom={true}><img src={LogoNavBar} width="80" height="80" alt="LogoNavBar" /></MenuLink>
             <MenuLinksBlock>
                    <MenuLink to="/about" isActive={pathname === "/about"}>Про нас</MenuLink>

                    <MenuLink to="/drivers" isActive={pathname === "/drivers"}>Для водіїв</MenuLink>

                    <MenuLink to="/business" isActive={pathname === "/business"}>Для бізнесу</MenuLink>

                    <MenuLink to="/technologies" isActive={pathname === "/technologies"}>Технології</MenuLink>

                    <MenuLink to="/services" isActive={pathname === "/services"}>Послуги</MenuLink>

                    <MenuLink to="/contacts" isActive={pathname === "/contacts"}>Контакти</MenuLink>
                </MenuLinksBlock>
                <HamburgerMenu onClick={() => setIsMenu(!isMenu)}>&#9776;</HamburgerMenu>
            </NavbarWrapper>
            {isMenu && <MobileMenu close={() => setIsMenu(!isMenu)} isMenu={isMenu} />}
        </>
    )
}
