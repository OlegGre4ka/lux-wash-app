import React from "react";
import { FooterWrapper } from "./styled.js";
import MiddleLogo from "./../../assets/MiddleLogo.png";

export default function Footer() {
    return (
        <FooterWrapper>
            <img src={MiddleLogo} width="163" height="163" alt="FooterLogo" />
        </FooterWrapper>
    )
}