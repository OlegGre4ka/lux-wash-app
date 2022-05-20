import styled from "styled-components";
import MainCarImage from "./../../assets/MainCarImage.png";

const TopContent = styled.div`
  height: 700px;
  background-blend-mode: multiply;
  background-image: url(${MainCarImage}), linear-gradient(180deg, rgba(6,6,6,0.64) 56.36%, rgba(6,6,6,0.334414) 69.82%, rgba(6,6,6,0) 100%);
  background-size: 100% 700px;
`
const MessagesBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 825px;
  margin-left: 50px;
  padding-top: 169px;
`
export { TopContent, MessagesBlock }
