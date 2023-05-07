import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import BasketCard from "./BasketCard";

export default function BasketCardList() {
  const { basket } = useContext(GlobalContext);
  return (
    <BasketCardListStyled>
      {basket.map((product) => {
        return (
          <BasketCard
            key={product.id}
            imageSource={product.imageSource}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            productId={product.id}
          />
        );
      })}
    </BasketCardListStyled>
  );
}

const BasketCardListStyled = styled.div``;
