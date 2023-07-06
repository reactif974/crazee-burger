import React from "react";
import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../theme";
import { PANEL_ADMIN_MESSAGES } from "../../../../enums/messages";

export default function HintMessage() {
  return (
    <HintMessageStyled className="update-container">
      <span>{PANEL_ADMIN_MESSAGES.HINT_MESSAGE}</span>
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
