import styled from "styled-components";

const AppWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const InputError = styled.span`
  font-size: 16px;
  color: red;
`
export { AppWrapper, InputError }