import React from "react";
import { useNavigate } from "react-router-dom";
import { FooterWrapper } from "./styled.js";
import { Text, MenuLink, HrefLink, FlexBox } from "../../appStyled";
import MiddleLogo from "./../../assets/MiddleLogo.png";
import FacebookIcon from "./../../assets/FacebookIcon.png";
import InstagramIcon from "./../../assets/InstagramIcon.png";
import YoutubeIcon from "./../../assets/YoutubeIcon.png";

export default function Footer() {
    let navigate = useNavigate();

    return (
        <FooterWrapper>
            <FlexBox flexDirection="column" width="386px" padding="43px 0px 0px 0px">
                <MenuLink to="/" isBorderBottom={true} fontSize="20px" marginLeft="0px" marginBottom="30px">Інформація про послуги</MenuLink>
                <MenuLink to="/" isBorderBottom={true} fontSize="20px" marginLeft="0px" marginBottom="30px">Каталог</MenuLink>
                <MenuLink to="/" isBorderBottom={true} fontSize="20px" marginLeft="0px" marginBottom="30px">Замовити</MenuLink>
                <MenuLink to="/contacts" isBorderBottom={true} fontSize="20px" marginLeft="0px" marginBottom="30px">Контакти</MenuLink>
                <MenuLink to="/" isBorderBottom={true} fontSize="20px" marginLeft="0px">FAQ</MenuLink>
            </FlexBox>
            <FlexBox alignItems="center" displayMobile="none" onClick={()=>navigate("/")} cursor="pointer">
                <img src={MiddleLogo} width="163" height="163" alt="FooterLogo" />
            </FlexBox>
            <FlexBox width="386px" padding="43px 0px 0px 0px" displayMobile="none">
                <FlexBox flexDirection="column" width="152px">
                    <Text marginBottom="101px">Адреса:</Text>
                    <Text marginBottom="35px">Телефон:</Text>
                    <Text marginBottom="50px">E-mail:</Text>
                </FlexBox>
                <FlexBox flexDirection="column">
                    <Text marginBottom="50px">с. Пасіки-Зубрицькі,<br /> Львівська обл. вул.<br /> Сагайдачного, 64</Text>
                    <HrefLink href="tel:+380679657575" isBorderBottom={true} fontSize="20px" marginLeft="0px" marginBottom="35px">+380679657575</HrefLink>
                    <HrefLink href="mailto:someone@example.com" isBorderBottom={true} fontSize="20px" marginLeft="0px" marginBottom="45px">info@luxwash.com.ua</HrefLink>
                    <FlexBox alignItems="center">
                        <a href="https://www.instagram.com/luxwashofficial/" target="_blank" rel="noopener noreferrer"><img src={FacebookIcon} width="42" height="40" alt="facebook" style={{marginRight: "49px"}}/></a>
                        <a href="https://www.instagram.com/luxwashofficial/" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} width="39" height="37" alt="instagram" style={{marginRight: "49px"}}/></a>
                        <a href="https://www.youtube.com/channel/UCaghTo-aFYraE7hCRJBr1jA" target="_blank" rel="noopener noreferrer"><img src={YoutubeIcon} width="42" height="29" alt="youtube" /></a>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </FooterWrapper>
    )
}