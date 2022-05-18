import React from "react";
import BtnStyled from "./styled.js";

export default function Button({ children, backgroundColor, hoverBackgroundColor, borderColor }) {
    return <BtnStyled
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        borderColor={borderColor}
    >{children}</BtnStyled>
}
