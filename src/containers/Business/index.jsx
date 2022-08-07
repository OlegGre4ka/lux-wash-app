import React from "react";
import { TopContent } from "./../../components/sharedStyledComponents";
import {BusinessImage, MobileBusinessImage} from "./../../assets/TopContentImages";

export default function Business () {
    return (
        <TopContent mainImage={BusinessImage} mobileImage={MobileBusinessImage}>
        </TopContent>
    )
}