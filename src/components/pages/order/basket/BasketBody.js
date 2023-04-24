import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import GlobalContext from "../../../../context/GlobalContext";
import BasketCardList from "./BasketCardList";

export default function BasketBody() {
  const { basket } = useContext(GlobalContext);

  return (
    <BasketBodyStyled>
      {basket.length === 0 ? (
        <span className="message">Votre commande est vide.</span>
      ) : (
        <BasketCardList />
      )}
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
