import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import GlobalContext from "../../../../context/GlobalContext";
import BasketCardList from "./BasketCardList";
import EmptyBasket from "./EmptyBasket";

export default function BasketBody() {
  const { basket } = useContext(GlobalContext);

  const isEmptyBasket = basket.length === 0;

  return (
    <BasketBodyStyled>
      {isEmptyBasket ? <EmptyBasket /> : <BasketCardList />}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  box-shadow: ${theme.shadows.basket};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
