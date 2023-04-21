import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function BasketBody() {
  return (
    <BasketBodyStyled>
      <span className="message">Votre commande est vide.</span>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  box-shadow: ${theme.shadows.basket};
  .message {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1;
    height: calc(90vh - 10vh - 70px - 70px);
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: ${theme.weights.regular};
    font-size: ${theme.fonts.P4};
    line-height: 72px;
    color: ${theme.colors.greyBlue};
  }
`;
