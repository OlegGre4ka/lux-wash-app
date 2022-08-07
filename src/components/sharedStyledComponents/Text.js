import styled from "styled-components";

export const Text = styled.span`
display: block;
font-family: ${props => props.fontFamily ? props.fontFamily : 'Roboto'};
color: ${props => props.color ? props.color : "#E1FCB7"}; 
font-size: ${props => props.fontSize ? props.fontSize : "20px"};
font-weight: ${props => props.fontWeight ? props.fontWeight : "400"};
margin-bottom: ${props => props.marginBottom ? props.marginBottom : ""};
text-transform: ${props => props.textDecoration && props.textDecoration}; 
text-align: ${({textAlign}) => textAlign ? textAlign : "left"}; 
white-space: normal;

@media (max-width:480px){
  font-size: ${props => props.fontSizeMobile && props.fontSizeMobile};
  width: 307px;
  height: ${props => props.heightMobile ? props.heightMobile : ""};
  text-align: center;
}
`
export default Text