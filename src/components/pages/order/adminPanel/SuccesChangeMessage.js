import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { BsCloudCheck } from "react-icons/bs";

export default function SuccesChangeMessage() {
  return (
    <SuccesChangeMessageStyled>
      <span className="succes-message">
        <BsCloudCheck />
        Modifications enregistrées !
      </span>
    </SuccesChangeMessageStyled>
  );
}

const SuccesChangeMessageStyled = styled.div`
  .succes-message {
    display: flex;
    align-items: center;
    color: ${theme.colors.blue};
    font-family: "Open Sans", sans-serif;
    font-size: ${theme.fonts.P0};
    line-height: 20px;
    font-weight: ${theme.weights.regular};
    svg {
      margin-right: 10px;
      width: 18px;
      height: 18px;
    }
  }
`;
