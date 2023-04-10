import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/number/format";
import Button from "../../reusable-ui/Button";

export default function PriceContainer({ price, className }) {
  return (
    <PriceContainerStyled className={className}>
      <h3>{formatPrice(price)}</h3>
      <Button
        text="Ajouter"
        type="submit"
        variant="add"
        className={className}
      />
    </PriceContainerStyled>
  );
}

const PriceContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 30px 30px 30px;
  h3 {
    font-family: "Open Sans", sans-serif;
    color: ${(props) =>
      props.className === "selected"
        ? theme.colors.white
        : theme.colors.primary_burger};
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.light};
  }
`;
