import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import BasketCard from "./BasketCard";
import GlobalContext from "../../../../context/GlobalContext";

export default function BasketBody() {
  const { basketProducts } = useContext(GlobalContext);

  return (
    <BasketBodyStyled>
      {basketProducts.map((product) => {
        return (
          <BasketCard
            key={product.id}
            imageSource={product.imageSource}
            title={product.title}
            price={product.price}
          />
        );
      })}
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
