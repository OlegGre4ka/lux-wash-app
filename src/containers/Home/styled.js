import styled from "styled-components";
import MainCarImage from "./../../assets/MainCarImage.png";

const TopContent = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(${MainCarImage});
  opacity: 1.5;
`
const MessagesBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 825px;
  margin-left: 50px;
  padding-top: 169px;
`
const TextMontserrat = styled.span`
  font-family: 'Montserrat Alternates';
  color: ${props => props.color ? props.color : "#E1FCB7"}; 
  font-size: ${props => props.fontSize ? props.fontSize : "40px"};
  font-weight: ${props => props.fontWeight ? props.fontWeight : "700"};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : "50px"};
  text-transform: ${props => props.textDecoration && props.textDecoration}; 
`
export { TopContent, MessagesBlock, TextMontserrat }
