import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import BasketCard from "./BasketCard";

export default function BasketCardList() {
  const { basketProducts } = useContext(GlobalContext);
  return (
    <BasketCardListStyled>
      {basketProducts.map((product) => {
        return (
          <BasketCard
            key={product.id}
            imageSource={product.imageSource}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
          />
        );
      })}
    </BasketCardListStyled>
  );
}

const BasketCardListStyled = styled.div``;
