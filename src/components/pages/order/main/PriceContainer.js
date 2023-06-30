import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/number/format";
import Button from "../../reusable-ui/Button";
import GlobalContext from "../../../../context/GlobalContext";

export default function PriceContainer({ price, productId }) {
  const { handleBasketProduct } = useContext(GlobalContext);

  const handleAddButton = (event, productId) => {
    event.stopPropagation();
    handleBasketProduct(productId);
  };

  return (
    <PriceContainerStyled>
      <h3>{formatPrice(price)}</h3>
      <Button
        text="Ajouter"
        type="submit"
        variant="add"
        onClick={(event) => handleAddButton(event, productId)}
        className="add-button"
      />
    </PriceContainerStyled>
  );
}

const PriceContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 30px 30px 30px;
  .add-button {
    font-weight: ${theme.weights.heavy};
  }
  h3 {
    font-family: "Open Sans", sans-serif;
    color: ${theme.colors.primary_burger};
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.light};
  }
`;
