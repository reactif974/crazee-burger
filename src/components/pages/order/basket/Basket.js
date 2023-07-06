import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import BasketHeader from "./BasketHeader";
import BasketBody from "./BasketBody";
import BasketFooter from "./BasketFooter";
import GlobalContext from "../../../../context/GlobalContext";
import LoadingMessage from "../main/LoadingMessage";

export default function Basket() {
  const { isLoading } = useContext(GlobalContext);

  return (
    <BasketStyled>
      <BasketHeader />
      {isLoading ? <LoadingMessage /> : <BasketBody />}
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background-color: ${theme.colors.background_white};
  height: 80vh;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
`;
