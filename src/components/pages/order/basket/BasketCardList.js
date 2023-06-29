import React, { useContext } from "react";
import styled from "styled-components/macro";
import GlobalContext from "../../../../context/GlobalContext";
import BasketCard from "./BasketCard";
import { findInArray } from "../../../../utils/array/array";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
              price={menuProduct.price}
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

  // phase de mounting du composant : cible le 1er element de la liste
  .product-card-appear {
    .card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .product-card-appear-active {
    .card {
      transform: translateX(0px);
      opacity: 100%;
      transition: 0.5s;
    }
  }

  // phase de mounting du composant
  .product-card-enter {
    .card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .product-card-enter-active {
    .card {
      transform: translateX(0px);
      opacity: 100%;
      transition: 0.5s;
    }
  }

  // phase de unMounting du composant
  .product-card-exit {
    .card {
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .product-card-exit-active {
    .card {
      transform: translateX(-100px);
      opacity: 0%;
      transition: 0.5s;
    }
  }
`;
