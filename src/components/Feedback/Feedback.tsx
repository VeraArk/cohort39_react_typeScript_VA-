// import { useState } from "react";
// import Like from "../../assets/like.png";

import {FeedbackProps} from "./types"

import Button from "components/Button/Button";

import { FeedbackWrapper, FeedbackControl, ButtonWithCountContainer, Count } from "./styles"

function Feedback({like, dislike, onDislike, onLike, resetResults}: FeedbackProps) {
  /*const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const onLike = () => {
    setLike((prevValue) => prevValue + 1);
  };

  const onDislike = () => {
    setDislike((prevValue) => prevValue + 1);
  };
  const resetResults = () => {
    setLike(0);
    setDislike(0);
  };*/

  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonWithCountContainer>
          {/* <Button imgSrc={Like} name="Like" onClick={onLike} /> */}
          <Button name="Like" onClick={onLike} />
          <Count>{like}</Count>
        </ButtonWithCountContainer>
        <ButtonWithCountContainer>
          <Button name="Dislike" type= "button" onClick={onDislike} />
          <Count>{dislike}</Count>
        </ButtonWithCountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;