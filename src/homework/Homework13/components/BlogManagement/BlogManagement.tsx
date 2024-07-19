import { createContext, useState } from "react";

import { MouseEvent, ChangeEvent } from "react";

import Button from "components/Button/Button";
import Card from "homework/Homework13/components/Card/Card";

import {
  BlogManagerWrapper,
  TextareaContainer,
  ButtonController,
  TextLabel,
  Textarea,
} from "./styles";

type textMessage = string;

export const MessageContext = createContext<textMessage>("");

function BlogManagement() {
  const [textMessage, setTextMessage] = useState<textMessage>("");
  const [submittedMessage, setSubmittedMessage] = useState<textMessage>("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextMessage(event.target.value);
  };

  const getMessage = (event: MouseEvent) => {
    event.preventDefault();
    setSubmittedMessage(textMessage);
  };

  return (
    <MessageContext.Provider value={submittedMessage}>
      <BlogManagerWrapper>
        <TextareaContainer>
          <TextLabel htmlFor="text-id">Entry text</TextLabel>
          <Textarea
            id="text-id"
            name="textOfMessage"
            onChange={handleChange}
          ></Textarea>
        </TextareaContainer>
        <ButtonController>
          <Button type="button" name="Запостить" onClick={getMessage} />
        </ButtonController>
        <Card />
      </BlogManagerWrapper>
    </MessageContext.Provider>
  );
}

export default BlogManagement;
