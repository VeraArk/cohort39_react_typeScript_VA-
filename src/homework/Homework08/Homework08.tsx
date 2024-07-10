import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { PageWrapper, InputsContainer, ButtonsContainer } from "./styles";

function Homework08() {
  return (
    <PageWrapper>
      <InputsContainer>
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          disabled={false}
          label="Email"
          error = {undefined}
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          disabled={true}
          label="Password"
          error ="Some error"
        />
      </InputsContainer>
      <ButtonsContainer>
      <Button
        name="Send"
        onClick={() => {}}
        disabled={false}
        isRed={false}
      />
      <Button
        name="Can't Send"
        onClick={() => {}}
        disabled={true}
        isRed={false}
        />
        <Button
        name="Important Info"
        onClick={() => {}}
        disabled={false}
        isRed={true}
        />
        </ButtonsContainer>
    </PageWrapper>
  );
}

export default Homework08;
