import styled from "@emotion/styled";

export const PageWrapper = styled("div")`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding: 100px;
  justify-content: center;
  background-color: aquamarine;
`;
export const CardControl = styled("div")`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  margin: 50px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  background-color: blue;
  -webkit-box-shadow: 5px 10px 14px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 10px 14px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 10px 14px -3px rgba(0, 0, 0, 0.75);
`;

export const CardItem = styled("p")`
  font-size: 20px;
  color: white;
`;
