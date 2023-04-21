import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function BasketHeader() {
  return (
    <BasketHeaderStyled>
      <h2>Total</h2>
      <div className="total-price">0,00 €</div>
    </BasketHeaderStyled>
  );
}

const BasketHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: ${theme.colors.background_dark};
  padding: 0 16px;
  h2 {
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: ${theme.weights.regular};
    font-size: ${theme.fonts.P4};
    line-height: 45px;
    color: ${theme.colors.primary};
  }
  .total-price {
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: ${theme.weights.bold};
    font-size: ${theme.fonts.P4};
    line-height: 45px;
    color: ${theme.colors.primary};
  }
`;
