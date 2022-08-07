import styled from "styled-components";

const TopContent = styled.div`
  height: 700px;
  background-blend-mode: multiply;
  background-image: url(${({ mainImage }) => mainImage}), 
  linear-gradient(${({ linearGradient }) => linearGradient ? linearGradient : "180deg, transparent, transparent"});
  background-size: 100% 700px;

  @media (max-width:480px){
      display: flex;
      justify-content: center;
      height: 808px;
      background-image: url(${({ mobileImage }) => mobileImage}), 
      linear-gradient(${({ linearGradient }) => linearGradient ? linearGradient : "180deg, transparent, transparent"});
      // linear-gradient(180deg, rgba(6,6,6,0.64) 56.36%, rgba(6,6,6,0.334414) 69.82%, rgba(6,6,6,0) 100%);
      background-size: 100% 808px;
    }
`
export default TopContent