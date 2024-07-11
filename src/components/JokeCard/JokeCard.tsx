import {CardWrapper, CardSet,CardPunchline} from "./styles"
import {JokeCardProps} from "./types"


function JokeCard({set, punchline}: JokeCardProps){
    return(
    <><CardWrapper>
      <CardSet>{set}</CardSet>
      <CardPunchline>{punchline}</CardPunchline>
    </CardWrapper></>
    )
}
export default JokeCard;