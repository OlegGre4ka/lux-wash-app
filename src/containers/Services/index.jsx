import React from "react";
import { TopContent } from "./../../components/sharedStyledComponents";
import {ServicesImage, MobileServicesImage} from "./../../assets/TopContentImages";

export default function Services () {
    return (
        <TopContent mainImage={ServicesImage} mobileImage={MobileServicesImage}>
        </TopContent>
    )
}