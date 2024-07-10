import { useState } from "react";

import Feedback from "components/Feedback/Feedback";
import SimponsCard from "components/SimpsonCards/SimpsonCards";
import LoginForm from "components/LoginForm/LoginForm";

import simpson from "../../assets/simpson.jpg";
import simpsonM from "../../assets/simpsonM.jpg";
import {PageWrapper, LoginContainer, CardsContainer, FeedbackContainer} from "./styles"


function Homework07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = (): void => {
    setLike((prevValue: number) => prevValue + 1);
  };

  const onDislike = (): void => {
    setDislike((prevValue: number) => prevValue + 1);
  };
  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Safety Inspector",
    hobby: "beer Duff",
    avatar: simpson,
  };

  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    job: "No job",
    hobby: "cooking",
    avatar: simpsonM,
  };

  return (
    <PageWrapper>
      <LoginContainer>
        <LoginForm />
      </LoginContainer>

      <CardsContainer>
        <SimponsCard
          avatar={homerSimpson.avatar}
          firstName={homerSimpson.firstName}
          lastName={homerSimpson.lastName}
          job={homerSimpson.job}
          hobby={homerSimpson.hobby}
        />

        <SimponsCard
          avatar={margeSimpson.avatar}
          firstName={margeSimpson.firstName}
          lastName={margeSimpson.lastName}
          job={margeSimpson.job}
          hobby={margeSimpson.hobby}
        />
      </CardsContainer>

      <FeedbackContainer>
        <Feedback
          like={like}
          dislike={dislike}
          onLike={onLike}
          onDislike={onDislike}
          resetResults={resetResults}
        />
      </FeedbackContainer>
    </PageWrapper>
  );
}

export default Homework07;
