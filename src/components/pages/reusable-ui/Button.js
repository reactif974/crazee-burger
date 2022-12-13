import styled from "styled-components";
import { theme } from "../../../theme";

export default function Button({ text, type, Icon, className }) {
  return (
    <ButtonStyled type={type} className={className}>
      {className !== "button_submit" ? Icon && Icon : null}
      {text}
      {className === "button_submit" ? Icon && Icon : null}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  width: 100%;
  height: ${(props) => (props.className === "button_submit" ? "65px" : "35px")};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.className === "button_submit"
      ? "none"
      : `0.6px solid ${theme.colors.greyDark}`};
  border-radius: ${(props) =>
    props.className === "button_submit"
      ? theme.borderRadius.round
      : `${theme.borderRadius.round} ${theme.borderRadius.round} 0 0`};
  background-color: ${(props) =>
    props.className === "button_submit"
      ? theme.colors.background_button_submit
      : theme.colors.background_white};
  color: ${(props) =>
    props.className === "button_submit"
      ? theme.colors.white
      : theme.colors.background_dark};
  font-family: "Open Sans", sans-serif;
  font-size: ${(props) =>
    props.className === "button_submit" ? theme.fonts.P1 : theme.fonts.XS};
  font-weight: ${theme.weights.bold};
  &:hover {
    cursor: pointer;
  }
`;
