import { css } from "styled-components";

// roll effect animation on total price in basket header
export const totalPriceAnimation = css`
  // phase de mounting du composant
  .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: 300ms;
  }

  // phase de unMounting du composant
  .count-animated-exit {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(0%);
  }
  .count-animated-exit-active {
    transition: 300ms;
    transform: translateY(-100%);
  }
`;

// slide effect animation on basket cards
export const basketCardsAnimation = css`
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
