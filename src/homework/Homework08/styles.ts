import styled from "@emotion/styled";

export const PageWrapper = styled("div")`
  width: 100%;
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 50px;
  padding: 50px;
  justify-content: center;
  align-items: center;
  background-color: wheat;
`;

export const InputsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
`;


export const ButtonsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 200px;
`;