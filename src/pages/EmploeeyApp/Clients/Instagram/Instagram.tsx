import { useNavigate } from "react-router-dom";

import { PageWrapper, InfoAboutCompany, Title, Description, ButtonControl } from "./styles";

import Button from "components/Button/Button";

function Instagram() {
  //хук
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <InfoAboutCompany>
        <Title>Instagram</Title>
        <Description>
          —  американская социальная сеть для
          обмена фотографиями и видео, основанная Кевином Систромом и Майком
          Кригером.Приложение позволяет пользователям загружать медиафайлы, которые можно
          редактировать с помощью фильтров и организовывать с помощью хештегов и
          географических меток. Сообщениями можно делиться публично или с
          заранее одобренными подписчиками. Пользователи могут лайкать
          фотографии и подписываться на других пользователей, чтобы добавить их
          контент в личную ленту.
        </Description>
      </InfoAboutCompany>
     <ButtonControl> <Button name="Go back" onClick={goBack} /></ButtonControl>
    </PageWrapper>
  );
}
export default Instagram;
