import React from "react";
import { TopContent } from "./../../components/sharedStyledComponents";
import {ContactsImage, MobileContactsImage} from "./../../assets/TopContentImages";

export default function Contacts () {
    return (
        <TopContent mainImage={ContactsImage} mobileImage={MobileContactsImage}>
        </TopContent>
    )
}