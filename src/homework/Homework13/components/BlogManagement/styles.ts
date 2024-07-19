import styled from "@emotion/styled";
import { colors } from "styles/colors";

export const BlogManagerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 700px;
  height: 700px;

  align-items: center;
  border: 3px;
  border-radius: 10px;
  padding: 10px;
  background-color: #c2e6d9;
`;

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 600px;
  height: fit-content;
  padding: 10px;
`;

export const TextLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.LABEL};
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid;
  border-radius: 4px;
  padding: 12px;
  outline: none;
`;
export const ButtonController = styled.div`
  width: 250px;
  height: 100px;
`;
