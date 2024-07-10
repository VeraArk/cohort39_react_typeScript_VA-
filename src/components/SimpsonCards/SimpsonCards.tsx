import { userDataProps } from "./types";

import {CardWrapper, CardItem, CardInfo} from "./styles";

// Компоненты, как и обычные функции могут принимать аргументы
// Но может принимать в себя только 1 аргумент - это ОБЬЕКТ!!!
// Этот объект называется props
// По умолчанию props - пустой объект, если вы в него ничего не передаете
function SimponsCard(
  { avatar, firstName, lastName, job, hobby }: userDataProps)
  {
  return (
    <CardWrapper>
      <img className="avatar" src={avatar} alt="Avatar"/>
      <CardItem>Full name:</CardItem>
      <CardInfo> `${firstName} ${lastName}` </CardInfo>
      <CardItem>Job: </CardItem>
      <CardInfo> {job}</CardInfo>
      <CardItem>Hobby:</CardItem>
      <CardInfo> {hobby}</CardInfo>
    </CardWrapper>
  );
}

export default SimponsCard;
