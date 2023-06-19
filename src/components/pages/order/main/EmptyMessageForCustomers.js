import styled from "styled-components";
import { theme } from "../../../../theme";

export default function EmptyMessageForCustomers() {
  return (
    <EmptyMessageForCustomersStyled>
      <h1> Victime de notre succès ! :D</h1>
      <p>De nouvelles recettes sont encours de préparation.</p>
      <p>À très vite !</p>
    </EmptyMessageForCustomersStyled>
  );
}

const EmptyMessageForCustomersStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  h1 {
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.weights.bold};
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
    margin-top: 0;
    margin-bottom: ${theme.spacing.md};
  }
  p {
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.weights.regular};
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
    margin-top: 0;
  }
`;
