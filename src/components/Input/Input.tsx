import { InputProps } from "./types";

import { InputWrapper, InputLabel, InputComponent } from "./styles";

function Input({ id, name, type = "text", placeholder, disabled=false, label, error}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      //  error = {error}
      />
    </InputWrapper>
  );
}

export default Input;
