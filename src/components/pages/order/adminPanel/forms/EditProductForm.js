import styled from "styled-components";
import { useContext } from "react";
import GlobalContext from "../../../../../context/GlobalContext";
import SuccesChangeMessage from "../SuccesChangeMessage";
import { useState } from "react";
import Form from "./form/Form";
import { theme } from "../../../../../theme";

export default function EditProductForm() {
  const { productSelected, setProductSelected, inputTitleRef, handleEdit } =
    useContext(GlobalContext);

  const [isOutside, setIsOutside] = useState(false);

  // gestionnaire d'événements -> event handlers

  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };
    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated);
  };

  const handleClickOutside = (event) => {
    if (!event?.currentTarget?.contains(event?.relatedTarget)) {
      setIsOutside(true);
      setTimeout(() => {
        setIsOutside(false);
      }, 2000);
    }
  };

  return (
    <EditProductFormStyled>
      <Form
        productSelected={productSelected}
        onChange={handleChange}
        handleClickOutside={handleClickOutside}
        inputTitleRef={inputTitleRef}
      >
        {!isOutside ? (
          <span className="title-action">
            Cliquer sur un produit du menu pour le modifier
            <span className="underline">en temps réel</span>
          </span>
        ) : (
          <span className="title-action">
            <SuccesChangeMessage />
          </span>
        )}
      </Form>
    </EditProductFormStyled>
  );
}

const EditProductFormStyled = styled.div`
  .title-action {
    font-family: "Open Sans", sans-serif;
    font-weight: ${theme.weights.regular};
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.primary};
    padding: 23px, 16px, 8px, 24px;
    .underline {
      text-decoration: underline;
      padding-left: 3px;
    }
  }
`;
