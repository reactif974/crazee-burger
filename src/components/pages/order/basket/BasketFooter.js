import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function BasketFooter() {
  return (
    <BasketFooterStyled>
      Codé avec <span className="heart-icon">❤️</span> et React.JS
    </BasketFooterStyled>
  );
}

const BasketFooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: ${theme.colors.background_dark};
  font-family: "Amatic SC";
  font-style: normal;
  font-weight: ${theme.weights.regular};
  font-size: ${theme.fonts.P2};
  line-height: 25px;
  color: ${theme.colors.white};
  padding-top: 23px;
  padding-bottom: 23px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  .heart-icon {
    padding-left: 8px;
    padding-right: 8px;
  }
`;
