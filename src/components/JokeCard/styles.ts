import styled from "@emotion/styled";


export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 400px;
  height: fit-content;
  gap: 30px;
  padding: 30px;
  border: 2px solid black;
  border-radius: 8px;
  background-color: blue;
  -webkit-box-shadow: -1px 2px 19px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 19px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 19px 0px rgba(0, 0, 0, 0.75);
`;

export const CardSet = styled.div`
 font-size: 24px;
 font-weight: bold;
`;

export const CardPunchline = styled.div`
 font-size: 26px;
 font-weight: 400;
`;
