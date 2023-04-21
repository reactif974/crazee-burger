import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import ImagePreview from "../adminPanel/ImagePreview";

export default function BasketCard({ imageSource, title, price }) {
  return (
    <BasketCardStyled>
      <div className="card">
        <div>
          <ImagePreview imageSource={imageSource} title={title} />
        </div>
        <h2>{title}</h2>
        <div className="price-container">{price}</div>
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  .card {
    width: 318px;
    height: 86px;
    background: ${theme.colors.background_white};
    box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;
