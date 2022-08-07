import React, { useState } from "react";
import InputNumber from "./../../components/UI/InputNumber";
import Button from "./../../components/UI/Button";
import { TopContent, FlexBox } from "./../../components/sharedStyledComponents";
import { InputError } from "./../../appStyled";
import { DriversImage, MobileDriversImage } from "./../../assets/TopContentImages";

export default function Drivers() {
    const [dayDate, setDayDate] = useState("");
    const [monthDate, setMonthDate] = useState("");
    const [yearDate, setYearDate] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [birthDateMilliseconds, setBirthDateMilliseconds] = useState("");

    const [isLeapYear, setIsLeapYear] = useState();
    const [error, setError] = useState();

    const changeDayDateHandler = e => {
        const dayDateValue = e.target.value;
        if ((monthDate === "2" || monthDate === "02") && (dayDateValue === "" || (dayDateValue >= 0 && dayDateValue <= 29))) {
            setDayDate(dayDateValue);
            setError("");
        }
        if ((monthDate === "2" || monthDate === "02") && dayDateValue > 29) {
            setDayDate("");
            setError("Enter correct amount of days, please!");
        }
        else if (["4", "04", "6", "06", "9", "09", "11"].some(month => month === monthDate) && (dayDateValue === "" || (dayDateValue >= 0 && dayDateValue <= 30))) {
            setDayDate(dayDateValue);
            setError("");
        }
        else if (!["4", "04", "6", "06", "9", "09", "11"].some(month => month === monthDate) && (dayDateValue === "" || (dayDateValue >= 0 && dayDateValue <= 31))) setDayDate(dayDateValue);
        if (isLeapYear === false && dayDateValue.length !== 0 && (monthDate && (monthDate === "2" || monthDate === "02")) && (dayDateValue && dayDateValue > 28)) {
            setDayDate("");
            setError("This year value is not a Leap Year! Enter correct amount of days, please!");
        }
    }

    const changeMonthDateHandler = e => {
        const monthDateValue = e.target.value;
        if (monthDateValue === "" || (monthDateValue >= 0 && monthDateValue <= 12)) setMonthDate(monthDateValue);
        if (((monthDateValue === "2" || monthDateValue === "02") && dayDate > 29)
            || (["4", "04", "6", "06", "9", "09", "11"].some(month => month === monthDateValue) && dayDate > 30)) {
            setDayDate("");
            setError("Enter correct amount of days, please!");
        }
    }
    const changeYearDateHandler = e => {
        const yearDateValue = e.target.value;
        const currentYear = new Date().getFullYear();
        yearDateValue.length <= 4 && setYearDate(yearDateValue);
        const isDateLeapYear = yearDateValue.length <= 4 && new Date(yearDateValue, 2, 0).getDate() === 29;
        setIsLeapYear(isDateLeapYear);
        if (yearDateValue === ""
            || (yearDateValue.length === 4 && (yearDateValue < currentYear - 100 || yearDateValue > currentYear))) {
            setYearDate("");
            setError(`The year value most be more than ${currentYear - 101} and less than ${currentYear + 1}! Enter correct year, please!`)
        }
        else if (yearDateValue.length === 4 && (yearDateValue >= currentYear - 100 || yearDateValue <= currentYear)) {
            setError("");
        }
        if (yearDateValue.length === 4 && isDateLeapYear === false && (monthDate && (monthDate === "2" || monthDate === "02")) && dayDate && dayDate > 28) {
            setDayDate("");
            setError("This year value is not a Leap Year! Enter correct amount of days, please!");
        } else {
            isDateLeapYear && setError("");
        }
    }

    const blurYearHandler = () => {
        yearDate.length < 4 && setError("The year value most be 4 chapters! Enter correct year, please!");
        error && yearDate.length === 4 && setError("");
    }

    const submitBirdthDate = () => {
        const fullDayDate = dayDate.length === 1 ? "0" + dayDate : dayDate;
        const fullMonthDate = monthDate.length === 1 ? "0" + monthDate : monthDate;

        setBirthDate([fullDayDate, fullMonthDate, yearDate].join("-"));
        setBirthDateMilliseconds(Date.parse([yearDate, fullMonthDate, fullDayDate].join("-")));
    }
    console.log(monthDate, "monthDate");
    return (
        <>
            <TopContent mainImage={DriversImage} mobileImage={MobileDriversImage}>
            </TopContent>
            <FlexBox flexDirection="column" padding="15px 0px 0px 15px">
                <span>Date of birth</span>
                <FlexBox>
                    <InputNumber size={2} placeholder="DD" dateNumberValue={dayDate} changeHandler={(e) => changeDayDateHandler(e)} />
                    <InputNumber size={2} placeholder="MM" dateNumberValue={monthDate} changeHandler={(e) => changeMonthDateHandler(e)} />
                    <InputNumber size={4} placeholder="YYYY" dateNumberValue={yearDate} changeHandler={(e) => changeYearDateHandler(e)}
                        blurHandler={blurYearHandler} />
                </FlexBox>
                <InputError>{error}</InputError>
                <Button
                    width="100px"
                    height="35px"
                    clickHandler={submitBirdthDate}
                    disabled={dayDate.length === 0 || monthDate.length === 0 || yearDate.length === 0}
                >Save</Button>
                <span>Date: {birthDate}</span>
                <span>Date in milliseconds: {birthDateMilliseconds}</span>
            </FlexBox>
        </>

    )
}