import styled from "styled-components";

const ServicesWrapper = styled.section`
  padding-top: 60px;
  background-color: rgba(6,6,6,85%);
`
const CardImage = styled.img.attrs(({ image, alt }) => ({
    src:  image,
    alt: alt
  }))`
  width: 100%;
`
const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 50px;
  padding: 85px;

  @media only screen and (max-width: 1290px) {
    padding: 45px;
    grid-gap: 20px;
  }
  
`

export { ServicesWrapper, CardImage, ServiceGrid }