import { useState, useEffect } from "react";
import axios, {AxiosError} from "axios";

import JokeCard from "components/JokeCard/JokeCard";
import Button from "components/Button/Button";

import { PageWrapper, JokeContainer, ButtonContainer } from "./styles";
import { Joke } from "./types";

function Homework09() {
  const [randomJoke, setRandomJoke] = useState<Joke | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  // функция get c fetch
  // const getRandomJoke = async () => {
  //   setError(undefined);
  //   setRandomJoke(undefined);

  //   const response = await fetch(
  //     "https://official-joke-api.appspot.com/random_joke"
  //   );

  //   const result = await response.json();

  //   if (response.ok) {
  //     let setup = result.setup;
  //     let punchline = result.punchline;
  //     setRandomJoke({ setup, punchline });
  //   } else {
  //     setError("Ошибка при получении данных");
  //   }
  // };

  // // первая шутка грузится при первоначальной отрисовке страницы
  // useEffect(() => {
  //   getRandomJoke();
  // }, []);

  const getRandomJoke = async () => {
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      let setup = `${response.data.setup}`;
      let punchline = `${response.data.punchline}`;
      setRandomJoke({setup, punchline});
      //логіка с успешно полученнымі даннымі
    } catch (error: any) {
     setError (error.message);
    } finally {
    }
  };

  return (
    <PageWrapper>
      <JokeContainer>
        <JokeCard randomJoke={randomJoke} error={error} />
      </JokeContainer>
      <ButtonContainer>
        <Button name="Get a Joke" onClick={getRandomJoke} />
      </ButtonContainer>
    </PageWrapper>
  );
}

export default Homework09;
