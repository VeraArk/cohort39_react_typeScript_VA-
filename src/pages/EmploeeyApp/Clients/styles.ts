import styled from "@emotion/styled";
import {Link as SimpleLink} from 'react-router-dom';



export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LinkContainer = styled.div`
width: 500px;
height: fit-content;
display: flex;
justify-content: center;
padding: 40px 20px;
background-color: #5F7470;
opacity: 90%;
border: 5px solid;
border-radius: 5px;
gap:40px;
`

export const Link = styled(SimpleLink)`
  color: white;
  font-size: 30px;
  font-weight: normal;
  text-decoration: none;
`;