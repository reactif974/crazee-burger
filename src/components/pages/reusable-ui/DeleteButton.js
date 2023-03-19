import React, { useContext } from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import GlobalContext from "../../../context/GlobalContext";
import { theme } from "../../../theme";

export default function DeleteButton({ id }) {
  const { handleDelete } = useContext(GlobalContext);

  return (
    <DeleteButtonStyled onClick={() => handleDelete(id)}>
      <TiDelete />
    </DeleteButtonStyled>
  );
}

const DeleteButtonStyled = styled.button`
  position: absolute;
  top: 15px;
  left: calc(50% - 30px / 2 + 90px);
  background: none;
  border: none;
  color: ${theme.colors.primary};
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
  }
`;
