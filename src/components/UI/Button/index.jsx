import React from "react";
import BtnStyled from "./styled.js";

export default function Button({ children, backgroundColor, hoverBackgroundColor, borderColor, marginBottomMobile }) {
    return <BtnStyled
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        borderColor={borderColor}
        marginBottomMobile={marginBottomMobile}
    >{children}</BtnStyled>
}
