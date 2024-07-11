import { MouseEvent } from "react";
import { StyledButton, ButtonImg } from "./styles";

import { ButtonProps } from "./types";

function Button({
  imgSrc = undefined,
  type = "button",
  name = "Send",
  onClick,
  disabled = false,
  isRed = false
}: ButtonProps) {
  return (
    // еслі прокидывается пропса булеан без значения (disabled, к примеру), то по умолчанию она true
    // соответственно нужно задавать занченіе, только еслі нужно передать false
    <StyledButton $isRed={isRed} disabled={disabled} onClick={onClick} type={type}>
      {/* Если imgSrc === true, то правая часть после && показывается на странице
      Если imgSrc === false, то правая часть после && скрывается */}
      {imgSrc && <ButtonImg src={imgSrc} />}
      {!imgSrc && name}
    </StyledButton>
  );
}

export default Button;