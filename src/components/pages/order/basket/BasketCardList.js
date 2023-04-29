import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import BasketCard from "./BasketCard";
import { findInArray } from "../../../../utils/array/array";

export default function BasketCardList() {
  const { basket, productSelected, menu } = useContext(GlobalContext);
  return (
    <BasketCardListStyled>
      {basket.map((product) => {
        const menuProduct = findInArray(product.id, menu);
        return (
          <BasketCard
            key={menuProduct.id}
            imageSource={menuProduct.imageSource}
            title={menuProduct.title}
            price={menuProduct.price}
            quantity={product.quantity}
            productId={menuProduct.id}
            variant={productSelected.id === menuProduct.id ? "selected" : ""}
          />
        );
      })}
    </BasketCardListStyled>
  );
}

const BasketCardListStyled = styled.div``;
