import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import ImagePreview from "../adminPanel/ImagePreview";

export default function BasketCard({ imageSource, title, price, quantity }) {
  return (
    <BasketCardStyled>
      <div className="card">
        <div className="pics-preview">
          <ImagePreview imageSource={imageSource} title={title} />
        </div>
        <div className="infos-card">
          <h3>{title}</h3>
          <div className="price-container">{price}</div>
        </div>
        <div className="count">X{quantity}</div>
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px 0;
  .card {
    width: 318px;
    height: 86px;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    background: ${theme.colors.background_white};
    box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    .pics-preview {
      height: 86px;
      & > div {
        height: 86px !important;
        img {
          width: 85px;
          height: 60px;
        }
      }
    }
    .infos-card {
      display: flex;
      flex-direction: column;
      padding-left: 14px;
      h3 {
        margin: 0;
        font-family: "Amatic SC";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #17161a;
      }
    }
    .count {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #ffa01b;
    }
  }
`;
