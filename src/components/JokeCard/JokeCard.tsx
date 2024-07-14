import { CardWrapper, CardSet, CardPunchline } from "./styles";
import { JokeCardProps } from "./types";

function JokeCard({ randomJoke, error }: JokeCardProps) {
  return (
    <>
      <CardWrapper>
        {randomJoke && (
          <>
            <CardSet>{randomJoke.setup}</CardSet>
            <CardPunchline>{randomJoke.punchline}</CardPunchline>
          </>
        )}
        {error && <p>{error}</p>}
      </CardWrapper>
    </>
  );
}
export default JokeCard;
