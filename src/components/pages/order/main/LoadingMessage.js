import styled from "styled-components";
import { theme } from "../../../../theme";

export default function LoadingMessage() {
  return (
    <LoadingMessageStyled>
      <h1>Chargement du menu ...</h1>
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
  h1 {
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.weights.regular};
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
    margin-top: 0;
    margin-bottom: ${theme.spacing.md};
  }
`;
