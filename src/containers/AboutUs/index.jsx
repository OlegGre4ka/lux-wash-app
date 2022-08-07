import React from "react";
import { TopContent } from "./../../components/sharedStyledComponents";
import { AboutUsImage, MobileAboutUsImage } from "./../../assets/TopContentImages";

export default function AboutUs() {
    return (
        <TopContent mainImage={AboutUsImage} mobileImage={MobileAboutUsImage}
            linearGradient="180deg, rgba(9,8,8,0.8) 41.67%, rgba(9,8,8,0.488) 86.46%, rgba(9,8,8,0) 100%">
        </TopContent>
    )
}