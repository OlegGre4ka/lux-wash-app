import React from "react";
import { MessagesBlock } from "./styled.js";
import { TopContent, FlexBox, Text } from "./../../components/sharedStyledComponents";
import Button from "./../../components/UI/Button";
import OurServices from "./components/OurServeces";
import MainCarImage from "./../../assets/TopContentImages/MainCarImage.png";
import MobileCarImage from "./../../assets/TopContentImages/MobileCarImage.png";

export default function Home() {
    return (
        <>
            <TopContent mainImage={MainCarImage} mobileImage={MobileCarImage}
                linearGradient="180deg, rgba(6,6,6,0.64) 56.36%, rgba(6,6,6,0.334414) 69.82%, rgba(6,6,6,0) 100%">
                <MessagesBlock paddingTopMobile="68px">
                    <Text
                        fontFamily="Montserrat Alternates"
                        fontSize="40px"
                        textDecoration="uppercase"
                        fontWeight="700"
                        fontSizeMobile="22px"
                        marginBottom="50px"
                        heightMobile="185px">
                        Відкрий світ широких можливостей з автомийкою самообслуговування під ключ!
                    </Text>
                    <Text fontFamily="Montserrat Alternates" color="#0039FF" fontSize="28px" fontWeight="500"
                        fontSizeMobile="20px" heightMobile="24px" marginBottom="50px">Почни свій бізнес з нами</Text>
                    <FlexBox flexDirectionMobile="column" widthMobile="250px">
                        <Button
                            backgroundColor="linear-gradient(180deg, #8998ce 5.21%, #05207e 40.1%, #1342e8 96.87%)"
                            hoverBackgroundColor="linear-gradient(180deg, #071958 5.21%, #05207e 40.1%, #001b7a 96.87%)"
                            borderColor="linear-gradient(#5276f3 0%, #10153f 100%)"
                            marginBottomMobile="61px"
                        >Зібрати автомийку</Button>
                        <Button>Дізнатися більше</Button>
                    </FlexBox>
                </MessagesBlock>
            </TopContent>
            <OurServices />
        </>

    )
}