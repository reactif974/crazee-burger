import styled from "styled-components";
import { theme } from "../../../../theme";
import refreshPage from "../../../../utils/window/refresh";
import Button from "../../reusable-ui/Button";

export default function EmptyMenu() {
  return (
    <EmptyMenuStyled>
      <h2>Le menu est vide ?</h2>
      <p>Cliquez ci-dessous pour le réinitialiser</p>
      <div className="button-new-product" onClick={() => refreshPage()}>
        <Button text="Générer de nouveaux produits"></Button>
      </div>
    </EmptyMenuStyled>
  );
}

const EmptyMenuStyled = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  h2 {
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
  .button-new-product {
    button {
      font-family: Arial, Helvetica, sans-serif;
      font-size: ${theme.fonts.XS};
      font-weight: ${theme.weights.regular};
      width: 224px;
      height: 50px;
    }
  }
`;
