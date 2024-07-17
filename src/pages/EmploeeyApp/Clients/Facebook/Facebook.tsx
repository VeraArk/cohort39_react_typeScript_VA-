import { useNavigate } from "react-router-dom";

import { PageWrapper, InfoAboutCompany, Title, Description, ButtonControl } from "./styles";

import Button from "components/Button/Button";


function Facebook() {
  //хук
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <InfoAboutCompany>
        <Title>Facebook</Title>
        <Description>
          — крупнейшая социальная сеть , начавшая работать 4 февраля 2004 как
          сеть для студентов некоторых американских университетов. Facebook
          принадлежит корпорации Meta Platforms. Основателем и главой сервиса
          является Марк Цукерберг. По данным рейтинга Alexa Rank , сайт
          facebook.com занимает 7 место по посещаемости в мире. По состоянию на март 2023 у сети
          было уже 2,94 млрд пользователей. 
        </Description>
      </InfoAboutCompany>
     <ButtonControl> <Button name="Go back" onClick={goBack} /></ButtonControl>
    </PageWrapper>
  );
}
export default Facebook;
