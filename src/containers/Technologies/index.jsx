import React from "react";
import { TopContent } from "./../../components/sharedStyledComponents";
import {TechnologiesImage, MobileTechnologiesImage} from "./../../assets/TopContentImages";

export default function Technologies () {
    return (
        <TopContent mainImage={TechnologiesImage} mobileImage={MobileTechnologiesImage}>
        </TopContent>
    )
}