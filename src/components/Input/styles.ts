import styled from "@emotion/styled";

const backgroundInput = (disabled: boolean | undefined) => {
  return disabled ?  "grey": "white";
}

interface InputComponentProps {
  $error?: string | undefined;
}

const borderInput = (error: string | undefined)=>{
  if((typeof error)=== 'string'){
    return "red"
  }
  else return "#3f3f3f"
}

export const InputWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputLabel = styled("label")`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled("input")<InputComponentProps>`
  width: 100%;
  height: 50px;
  border: 1px solid;
  border-color: ${({$error})=> borderInput($error)};
 
  border-radius: 4px;
  padding: 12px;
  outline: none;
  background-color: ${({disabled}) =>
    backgroundInput(disabled)};
  
  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;

