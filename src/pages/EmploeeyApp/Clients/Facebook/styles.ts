import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  padding: 60px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap:50px;
  justify-content: center;
  align-items: center;

`;

export const InfoAboutCompany = styled.div`
display: flex;
flex-direction: column;
gap:10px;
width: 600px;
height: fit-content;
padding: 30px;
border: 5px black solid;
border-radius: 5px;
background-color: #6DB5BC;
color:white;
`;

export const Title = styled.h4`
font-size: 20px;
font-weight: 700;
`

export const Description = styled.h4`
font-size: 16px;
font-weight: 500;
`

export const ButtonControl =styled.div`
width: 300px;
height: fit-content;
padding: 5px;
`