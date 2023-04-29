import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import BasketCard from "./BasketCard";
import { findInArray } from "../../../../utils/array/array";

export default function BasketCardList() {
  const {
    basket,
    productSelected,
    menu,
    handleDeleteBasketProduct,
    handleProductSelected,
  } = useContext(GlobalContext);

  // gestionnaire d'événements -> event handlers
  const handleDeleteProductCard = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id);
  };

  const handleOnClick = (event, idProductClicked) => {
    event.stopPropagation();
    handleProductSelected(idProductClicked);
  };
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
            onDelete={(event) => handleDeleteProductCard(event, menuProduct.id)}
            onClick={(event) => handleOnClick(event, menuProduct.id)}
          />
        );
      })}
    </BasketCardListStyled>
  );
}

const BasketCardListStyled = styled.div``;
