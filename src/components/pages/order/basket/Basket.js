import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import BasketHeader from "./BasketHeader";
import BasketBody from "./BasketBody";
import BasketFooter from "./BasketFooter";

export default function Basket() {
  return (
    <BasketStyled>
      <BasketHeader />
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background-color: ${theme.colors.background_white};
  height: 80vh;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 1fr 70px;
  align-items: center;
`;
