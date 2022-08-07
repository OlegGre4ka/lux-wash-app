import styled from "styled-components";
// import MainCarImage from "./../../assets/MainCarImage.png";
// import MobileCarImage from "./../../assets/MobileCarImage.png";

// const TopContent = styled.div`
//   height: 700px;
//   background-blend-mode: multiply;
//   background-image: url(${MainCarImage}), linear-gradient(180deg, rgba(6,6,6,0.64) 56.36%, rgba(6,6,6,0.334414) 69.82%, rgba(6,6,6,0) 100%);
//   background-size: 100% 700px;

//   @media (max-width:480px){
//       display: flex;
//       justify-content: center;
//       height: 808px;
//       background-image: url(${MobileCarImage}), linear-gradient(180deg, rgba(6,6,6,0.64) 56.36%, rgba(6,6,6,0.334414) 69.82%, rgba(6,6,6,0) 100%);
//       background-size: 100% 808px;
//     }
// `
const MessagesBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  padding-top: 169px;

  @media (max-width:480px){
    align-items: center;
    margin-left: 0px;
    padding-top: ${({paddingTopMobile}) => paddingTopMobile && paddingTopMobile}
  }
`
export { MessagesBlock }
