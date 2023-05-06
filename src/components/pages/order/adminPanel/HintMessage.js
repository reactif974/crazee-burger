import React from "react";
import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../theme";

export default function HintMessage() {
  return (
    <HintMessageStyled className="update-container">
      <span>Cliquer sur un produit du menu pour le modifier</span>
      <span className="cursor-icon">
        <HiCursorClick />
      </span>
    </HintMessageStyled>
  );
}

const HintMessageStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: 73px;
  padding-top: 81px;
  span {
    font-family: "Amatic SC";
    font-weight: ${theme.weights.regular};
    font-size: ${theme.fonts.P3};
    line-height: 30px;
    color: ${theme.colors.greyBlue};
  }
  .cursor-icon {
    padding-left: 10px;
  }
`;
