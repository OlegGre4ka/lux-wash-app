import React from "react";

export default function InputNumber({ size, placeholder, dateNumberValue, changeHandler, blurHandler }) {
    return <input
        type="text"
        pattern={/[0-9]/}
        size={size}
        placeholder={placeholder}
        value={dateNumberValue} 
        onChange={(e) => changeHandler(e)} 
        onBlur = {blurHandler}
        onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
            }
        }}
        />
}