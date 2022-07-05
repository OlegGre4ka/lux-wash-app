import styled from "styled-components";
// .attrs({
//   // disabled: ${props => props.disabled && props.disabled}
// })`
const BtnStyled = styled.button`
  position: relative;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  width: ${props => props.width ? props.width : "250px"};
  height: ${props => props.height ? props.height : "78px"};
  margin-right: 40px;
  color: #e5e5e5;
  border: none;
  border-radius: 90px;
  background: ${props => props.backgroundColor ? props.backgroundColor : "linear-gradient(180deg, #74f154 0%, #215a0c 37.5%, #0f2e05 100%)"}; 
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 90px; 
    padding: 4px; 
    background: ${props => props.borderColor ? props.borderColor : "linear-gradient(#2faf02 0%, #215a0c 37.5%, #144010 100%)"}; 
    -webkit-mask: 
       linear-gradient(#fff 0 0) content-box, 
       linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude; 
  }
  &:hover{
    background: ${props => props.hoverBackgroundColor ? props.hoverBackgroundColor : "linear-gradient(180deg, #0a3300 0%, #215a0c 37.5%, #0f2e05 100%)"}; 
  }
  @media (max-width:480px){
    margin-bottom: ${({marginBottomMobile}) => marginBottomMobile && marginBottomMobile}
  }
`
export default BtnStyled;