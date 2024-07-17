import { useNavigate } from "react-router-dom";

import { PageWrapper, InfoAboutCompany, Title, Description, ButtonControl } from "./styles";

import Button from "components/Button/Button";

function Telegram() {
  //хук
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <InfoAboutCompany>
        <Title>Telegram</Title>
        <Description>
          — система мгновенного обмена сообщениями
          (мессенджер) с функциями обмена текстовыми, голосовыми и
          видеосообщениями, а также стикерами, фотографиями и файлами многих
          форматов. Позволяет совершать аудио- и видеозвонки,
          устраивать прямые эфиры в каналах и группах, организовывать
          конференции, многопользовательские группы и каналы. Функциональность
          приложения может быть значительно расширена при помощи ботов.
        </Description>
      </InfoAboutCompany>
      <ButtonControl><Button name="Go back" onClick={goBack} /></ButtonControl>
    </PageWrapper>
  );
}
export default Telegram;
