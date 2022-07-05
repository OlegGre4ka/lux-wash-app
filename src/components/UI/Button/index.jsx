import React from "react";
import BtnStyled from "./styled.js";

export default function Button({ children, clickHandler, disabled,
     width, height, backgroundColor, hoverBackgroundColor, borderColor, marginBottomMobile }) {   
    return (<BtnStyled
        onClick={clickHandler}
        disabled={disabled}
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        borderColor={borderColor}
        marginBottomMobile={marginBottomMobile}
    >{children}</BtnStyled>)
}
