import { useContext } from "react";
import { MessageContext } from "homework/Homework13/components/BlogManagement/BlogManagement";

import { MessageWrapper } from "./styles";

function Message() {
  
  const text = useContext(MessageContext);

  return <MessageWrapper>{text}</MessageWrapper>;
}

export default Message;
