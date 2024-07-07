import { userDataProps } from "./types";

import "./styles.css";

// Компоненты, как и обычные функции могут принимать аргументы
// Но может принимать в себя только 1 аргумент - это ОБЬЕКТ!!!
// Этот объект называется props
// По умолчанию props - пустой объект, если вы в него ничего не передаете
function SimponsCard({
  avatar,
  firstName,
  lastName,
  job,
  hobby,
}: userDataProps) {
  return (
    <div className="card-wrapper">
      <img className="avatar" src={avatar} alt="Avatar" />
      <p className="card-item">Full name:</p>
      <p className= "card-info"> {`${firstName} ${lastName}`}</p>
      <p className="card-item">Job: </p>
      <p className= "card-info"> {job}</p>
      <p className="card-item">Hobby:</p>
      <p className= "card-info"> {hobby}</p>
    </div>
  );
}

export default SimponsCard;
