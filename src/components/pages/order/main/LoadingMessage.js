import styled from "styled-components";
import { theme } from "../../../../theme";
import { LOADING_MENU_MESSAGE } from "../../../../enums/messages";

export default function LoadingMessage() {
  return (
    <LoadingMessageStyled>
      <h1>{LOADING_MENU_MESSAGE.LOADING_MESSAGE}</h1>
    </LoadingMessageStyled>
  );
}

const LoadingMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  height: 100%;
  h1 {
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.weights.regular};
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
    margin-top: 0;
    margin-bottom: ${theme.spacing.md};
  }
`;
