import React from "react";
import { useLocation } from "react-router-dom";
import { BigLogo } from "./../../../assets/Logos";
import { FlexBox, MenuLink } from "./../../sharedStyledComponents";
import { MobileMenuWrapper, HamburgerMenu } from "./../styled";

export default function MobileMenu({ close, isMenu }) {
    const { pathname } = useLocation();

    return (
        <MobileMenuWrapper isMenu={isMenu}>
            <FlexBox justifyContent="flex-end" width="100%">
                <HamburgerMenu onClick={close} fontSize="36px" marginTop="14px">&times;</HamburgerMenu>
            </FlexBox>
            <MenuLink to="/about" isActive={pathname === "/about"} marginTop="45px" marginBottom="36px" onClick={close}>Про нас</MenuLink>

            <MenuLink to="/drivers" isActive={pathname === "/drivers"} marginBottom="36px" onClick={close}>Для водіїв</MenuLink>

            <MenuLink to="/business" isActive={pathname === "/business"} marginBottom="36px" onClick={close}>Для бізнесу</MenuLink>

            <MenuLink to="/technologies" isActive={pathname === "/technologies"} marginBottom="36px" onClick={close}>Технології</MenuLink>

            <MenuLink to="/services" isActive={pathname === "/services"} marginBottom="36px" onClick={close}>Послуги</MenuLink>

            <MenuLink to="/contacts" isActive={pathname === "/contacts"} onClick={close}>Контакти</MenuLink>

            <MenuLink to="/" isBorderBottom={true} onClick={close} justifyContent="center" alignItems="center"
                marginTop="40px" marginLeft="0px" isNotFitContent={true}>
                <img src={BigLogo} width="190" height="190" alt="BigLogo" />
            </MenuLink>
        </MobileMenuWrapper>
    )
}