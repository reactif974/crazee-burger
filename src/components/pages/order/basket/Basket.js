import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="total-container">
        <h2>Total</h2>
        <div className="total-price">0,00 €</div>
      </div>
      <div className="select-card-container">
        <h2>Votre commande est vide.</h2>
      </div>
      <div className="copyright">
        Codé avec <span className="heart-icon">❤️</span> et React.JS
      </div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background-color: ${theme.colors.background_white};
  height: 80vh;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 1fr 70px;
  align-items: center;
  .total-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.background_dark};
    h2 {
      font-family: "Amatic SC";
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 45px;
      color: ${theme.colors.primary};
      padding-left: 16px;
    }
    .total-price {
      font-family: "Amatic SC";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 45px;
      color: ${theme.colors.primary};
      padding-right: 16px;
    }
  }
  .copyright {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background_dark};
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: ${theme.colors.white};
    padding-top: 23px;
    padding-bottom: 23px;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    .heart-icon {
      padding-left: 8px;
      padding-right: 8px;
    }
  }
  .select-card-container {
    h2 {
      font-family: "Amatic SC";
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 72px;
      color: ${theme.colors.greyBlue};
      padding-left: 43px;
      padding-right: 43px;
    }
  }
`;
