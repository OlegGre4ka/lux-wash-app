import styled from "styled-components";
import MainCarImage from "./../../assets/MainCarImage.png";

const TopContent = styled.div`
  height: 700px;
  background-image: url(${MainCarImage});
  background-size: 100% 700px;
`
const MessagesBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 825px;
  margin-left: 50px;
  padding-top: 169px;
`
// const Text = styled.span`
//   font-family: 'Montserrat Alternates';
//   color: ${props => props.color ? props.color : "#E1FCB7"}; 
//   font-size: ${props => props.fontSize ? props.fontSize : "40px"};
//   font-weight: ${props => props.fontWeight ? props.fontWeight : "700"};
//   margin-bottom: ${props => props.marginBottom ? props.marginBottom : "50px"};
//   text-transform: ${props => props.textDecoration && props.textDecoration}; 
// `
export { TopContent, MessagesBlock }
