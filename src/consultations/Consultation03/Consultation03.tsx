import Button from "components/Button/Button";


import { PageWrapper, ButtonControl } from "./styles";

function Consultation_03() {
  const openModal = () => {};

  return (
    <PageWrapper>
      <ButtonControl>
        <Button name="Open Modal" onClick={openModal} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Consultation_03;