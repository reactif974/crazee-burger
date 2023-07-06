import React, { useContext } from "react";
import styled from "styled-components/macro";
import GlobalContext from "../../../../context/GlobalContext";
import BasketCard from "./BasketCard";
import { findInArray } from "../../../../utils/array/array";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { basketCardsAnimation } from "../../../../theme/animations";
import { convertStringToBoolean } from "../../../../utils/string/string";
import { formatPrice } from "../../../../utils/number/format";
import { BASKET_MESSAGES } from "../../../../enums/messages";

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
    <TransitionGroup
      component={BasketCardListStyled}
      className={"transition-group"}
    >
      {basket.map((product) => {
        const menuProduct = findInArray(product.id, menu);
        return (
          <CSSTransition
            appear={true}
            classNames={"product-card"}
            key={menuProduct.id}
            timeout={500}
          >
            <BasketCard
              imageSource={menuProduct.imageSource}
              title={menuProduct.title}
              price={
                convertStringToBoolean(menuProduct.isAvailable)
                  ? formatPrice(menuProduct.price)
                  : BASKET_MESSAGES.NOT_AVAILABLE
              }
              quantity={product.quantity}
              productId={menuProduct.id}
              variant={productSelected.id === menuProduct.id ? "selected" : ""}
              onDelete={(event) =>
                handleDeleteProductCard(event, menuProduct.id)
              }
              onClick={(event) => handleOnClick(event, menuProduct.id)}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const BasketCardListStyled = styled.div`
  padding-top: 10px;
  ${basketCardsAnimation}
`;
