import React from "react";
import { TopContent, MessagesBlock } from "./styled.js";
import { Text, FlexBox } from "./../../appStyled";
import Button from "./../../components/UI/Button";
export default function Home() {
    return (
        <TopContent>
            <MessagesBlock>
                <Text fontFamily="Montserrat Alternates" fontSize="40px" textDecoration="uppercase" fontWeight="700">Відкрий світ широких<br /> можливостей з автомийкою<br /> самообслуговування під ключ!</Text>
                <Text fontFamily="Montserrat Alternates" color="#0039FF" fontSize="28px" fontWeight="500">Почни свій бізнес з нами</Text>
                <FlexBox>
                    <Button
                        backgroundColor="linear-gradient(180deg, #8998ce 5.21%, #05207e 40.1%, #1342e8 96.87%)"
                        hoverBackgroundColor="linear-gradient(180deg, #071958 5.21%, #05207e 40.1%, #001b7a 96.87%)"
                        borderColor="linear-gradient(#5276f3 0%, #10153f 100%)"
                    >Зібрати автомийку</Button>
                    <Button>Дізнатися більше</Button>
                </FlexBox>
            </MessagesBlock>
        </TopContent>

    )
}