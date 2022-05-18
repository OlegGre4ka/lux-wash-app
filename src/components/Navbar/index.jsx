import React from "react";
import { useLocation } from "react-router-dom";
import { NavbarWrapper, MenuLink, MenuLinksBlock } from "./styled.js";
import LogoNavBar from "./../../assets/LogoNavBar.png";

export default function Navbar() {
    const { pathname }=useLocation();
    return (
        <NavbarWrapper>
            <MenuLink to="/"><img src={LogoNavBar} width="80" height="80" alt="LogoNavBar" /></MenuLink>
            <MenuLinksBlock>
                <MenuLink to="/about" isActive={pathname === "/about"}>Про нас</MenuLink>

                <MenuLink to="/drivers" isActive={pathname === "/drivers"}>Для водіїв</MenuLink>

                <MenuLink to="/business" isActive={pathname === "/business"}>Для бізнесу</MenuLink>

                <MenuLink to="/technologies" isActive={pathname === "/technologies"}>Технології</MenuLink>

                <MenuLink to="/services" isActive={pathname === "/services"}>Послуги</MenuLink>

                <MenuLink to="/contacts" isActive={pathname === "/contacts"}>Контакти</MenuLink>
            </MenuLinksBlock>
        </NavbarWrapper>
    )
}
