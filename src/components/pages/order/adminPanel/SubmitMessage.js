import React from "react";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled>
      <span className="succes-message">
        <FiCheck />
        Ajouté avec succès !
      </span>
    </SubmitMessageStyled>
  );
}

const SubmitMessageStyled = styled.div`
  .succes-message {
    display: flex;
    padding-left: 18px;
    color: ${theme.colors.success};
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    line-height: 20px;
    font-weight: 400;
    svg {
      border: 1px solid ${theme.colors.success};
      border-radius: 20px;
      margin-right: 8px;
      width: 18px;
      height: 18px;
    }
  }
`;
