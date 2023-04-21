import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function BasketBody() {
  return (
    <BasketBodyStyled>
      <h2>Votre commande est vide.</h2>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  h2 {
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: 400;
    font-size: ${theme.fonts.P4};
    line-height: 72px;
    color: ${theme.colors.greyBlue};
    padding-left: 43px;
    padding-right: 43px;
  }
`;
