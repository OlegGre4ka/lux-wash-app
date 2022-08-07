import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  justify-content ${({justifyContent})=> justifyContent ? justifyContent : null};
  flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : null};
  align-items: ${({alignItems}) => alignItems ? alignItems : null};
  width: ${({width}) => width ? width : ""};
  height: ${({height}) => height ? height : ""};
  margin: ${({margin}) => margin ? margin : ""};
  padding: ${({padding}) => padding ? padding : ""};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ""};
  cursor:${({cursor}) => cursor ? cursor : "auto"};
  transition: all 0.3s ease 0s;

&:hover {
  transform: ${({hoverTransform}) => hoverTransform ? hoverTransform : null};
}

@media (max-width:480px){
  display: ${({displayMobile}) => displayMobile ? displayMobile : null};
  flex-direction: ${({flexDirectionMobile}) => flexDirectionMobile ? flexDirectionMobile : null};
  width: ${props => props.widthMobile ? props.widthMobile : ""};
  height: ${props => props.heightMobile ? props.heightMobile : ""};
  padding: ${props => props.padding ? props.padding : ""};
}
`
export default FlexBox
