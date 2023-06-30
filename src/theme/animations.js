import { css, keyframes } from "styled-components";
import { theme } from ".";

// roll effect animation on total price in basket header
export const totalPriceAnimation = css`
  // phase de mounting du composant
  .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: ${theme.animations.speed.fast};
  }

  // phase de unMounting du composant
  .count-animated-exit {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(0%);
  }
  .count-animated-exit-active {
    transition: ${theme.animations.speed.fast};
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
      transition: ${theme.animations.speed.slow};
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
      transition: ${theme.animations.speed.slow};
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
      transition: ${theme.animations.speed.slow};
    }
  }
`;

// slide effect on admin panel
export const showAdminPanelAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

// fadein effect on card delete button
export const fadeInFromRight = keyframes`
  0% {
    opacity:0;
    transform: translateX(100%);
  }
  100% {
    opacity:1;
    transform: translateX(0%);
  }
`;

// menu animations
export const addAndDeleteCardAnimation = css`
  .menu-card-animation-enter {
    .card {
      transform: translateX(-120px);
      opacity: 0;
    }
  }
  .menu-card-animation-enter-active {
    .card {
      transform: translateX(0px);
      opacity: 1;
      transition: ${theme.animations.speed.fast};
    }
  }
  .menu-card-animation-exit {
    .card {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  .menu-card-animation-exit-active {
    .card {
      opacity: 0;
      transition: ${theme.animations.speed.fast};
    }
  }
`;
