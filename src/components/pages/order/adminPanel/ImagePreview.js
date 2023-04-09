import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function ImagePreview({ imageSource }) {
  return (
    <ImagePreviewStyled>
      {imageSource ? (
        <img src={imageSource} alt="pics product" />
      ) : (
        <div className="empty-image">Aucune image</div>
      )}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;

  .empty-image {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
