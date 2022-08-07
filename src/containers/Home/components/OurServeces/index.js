import React from "react";
import { servicesData } from "./data";
import { ServicesWrapper, CardImage, ServiceGrid } from "./styled";
import { FlexBox, Text } from "./../../../../appStyled";
export default function OurServices() {
    return (
        <ServicesWrapper>
            <FlexBox justifyContent="center" alignItems="center" >
                <Text color="white" fontSize="64px" fontWeight="800" fontSizeMobile="32px">Наші послуги</Text>
            </FlexBox>
            <ServiceGrid >
                {servicesData.map(
                    service =>
                        <FlexBox flexDirection="column" width="280px" height="460px" cursor="pointer" hoverTransform="translateY(-10px)"
                        widthMobile="168px" heightMobile="288px">
                            <CardImage image={service.image} alt={service.description} />
                            <FlexBox width="280px" height="125px" justifyContent="center" alignItems="center"
                             backgroundColor="#20097E" widthMobile="168px" heightMobile="64px">
                                <Text fontSize="22px" color="white" textAlign="center" fontSizeMobile="12px">{service.description}</Text>
                            </FlexBox>
                        </FlexBox>
                )}
            </ServiceGrid>
        </ServicesWrapper>

    )
}