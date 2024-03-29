import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import ImagePreview from "../adminPanel/ImagePreview";
import GlobalContext from "../../../../context/GlobalContext";
import { MdDeleteForever } from "react-icons/md";
import Button from "../../reusable-ui/Button";
import comingSoon from "../../../../assets/coming-soon.png";

export default function BasketCard({
  imageSource,
  title,
  price,
  quantity,
  productId,
}) {
  const { handleDeleteBasketProduct } = useContext(GlobalContext);
  return (
    <BasketCardStyled>
      <div className="card">
        <div className="pics-preview">
          {!imageSource ? (
            <img src={comingSoon} alt={title} className="comingsoon" />
          ) : (
            <ImagePreview imageSource={imageSource} title={title} />
          )}
        </div>
        <div className="infos-card">
          <h3>{title}</h3>
          <div className="price-container">{price}</div>
        </div>
        <div className="count">X{quantity}</div>
        <div className="delete-product-button">
          <Button
            variant="delete"
            Icon={<MdDeleteForever />}
            onClick={() => handleDeleteBasketProduct(productId)}
          />
        </div>
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
    position: relative;
    width: 318px;
    height: 86px;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    background: ${theme.colors.background_white};
    box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    .delete-product-button {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
    &:hover {
      cursor: pointer;
      .delete-product-button {
        opacity: 1;
      }
    }
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
    .comingsoon {
      width: 85px;
      height: 86px;
      object-fit: contain;
    }
    .infos-card {
      display: flex;
      flex-direction: column;
      padding-left: 14px;
      h3 {
        margin: 0;
        font-family: "Amatic SC";
        font-style: normal;
        font-weight: ${theme.weights.bold};
        font-size: ${theme.fonts.P3};
        line-height: 32px;
        color: ${theme.colors.dark};
      }
      .price-container {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: ${theme.weights.regular};
        font-size: ${theme.fonts.P0};
        line-height: 20px;
        color: ${theme.colors.primary};
      }
    }
    .count {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: ${theme.weights.regular};
      font-size: 16px;
      line-height: 22px;
      color: ${theme.colors.primary};
    }
  }
`;
