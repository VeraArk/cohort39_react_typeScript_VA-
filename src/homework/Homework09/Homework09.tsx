import { useState } from "react";
import { useEffect } from "react";

import JokeCard from "components/JokeCard/JokeCard";
import Button from "components/Button/Button";

import { PageWrapper, JokeContainer, ButtonContainer } from "./styles";
import { Joke } from "./types";

function Homework09() {
  const [randomJoke, setRandomJoke] = useState<Joke | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);


  const getRandomJoke = async () => {
    setError(undefined);
    setRandomJoke(undefined);

    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    const result = await response.json();

    if (response.ok) {
      let setup = result.setup;
      let punchline = result.punchline;
      setRandomJoke({ setup, punchline });
    } else {
      setError("Ошибка при получении данных");
    }
  };

  // первая шутка грузится при первоначальной отрисовке страницы
  useEffect(() => {
    getRandomJoke();
  }, []);
      
  return (
    <PageWrapper>
      <JokeContainer>
          <JokeCard randomJoke={randomJoke} error={error} />
      </JokeContainer>
      <ButtonContainer>
      <Button name = "Get a Joke" onClick={getRandomJoke}/>
      </ButtonContainer>
    </PageWrapper>
  );
}

export default Homework09;