import styled from "styled-components";
import TextInput from "../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import Button from "../../../reusable-ui/Button";
import { useState } from "react";
import { useContext } from "react";
import GlobalContext from "../../../../../context/GlobalContext";
import ImagePreview from "../ImagePreview";
import SubmitMessage from "../SubmitMessage";
import { theme } from "../../../../../theme";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddProductForm() {
  const {
    isSubmitSuccess,
    setIsSubmitSuccess,
    handleAdd,
    productSelected,
    isProductSelected,
    panelTabIndex,
  } = useContext(GlobalContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleChange = (event) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd({
      ...newProduct,
      id: crypto.randomUUID(),
    });
    setIsSubmitSuccess(true);
    setTimeout(() => {
      setIsSubmitSuccess(false);
    }, 2000);
    setNewProduct(EMPTY_PRODUCT);
  };

  const toggleHideButton = () => {
    if (isProductSelected && panelTabIndex === "edit") {
      return (
        <span className="title-action">
          Cliquer sur un produit du menu pour le modifier en{" "}
          <span className="underline">temps réel</span>
        </span>
      );
    } else {
      return (
        <span className="submit-container">
          <Button
            text="Ajouter un nouveau produit au menu"
            type="submit"
            variant="success"
          />
          {isSubmitSuccess && <SubmitMessage />}
        </span>
      );
    }
  };

  return (
    <AddProductFormStyled action="submit" onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={
          isProductSelected && panelTabIndex === "edit"
            ? productSelected.imageSource
            : newProduct.imageSource
        }
      />
      <div className="input-container">
        <TextInput
          Icon={<FaHamburger />}
          name="title"
          value={
            isProductSelected && panelTabIndex === "edit"
              ? productSelected.title
              : newProduct.title
          }
          onChange={handleChange}
          placeholder="Nom du produit (ex: Super Burger)"
          variant="add"
        />
        <TextInput
          Icon={<BsFillCameraFill />}
          name="imageSource"
          value={
            isProductSelected && panelTabIndex === "edit"
              ? productSelected.imageSource
              : newProduct.imageSource
          }
          onChange={handleChange}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          variant="add"
        />
        <TextInput
          Icon={<MdOutlineEuro />}
          name="price"
          value={
            isProductSelected && panelTabIndex === "edit"
              ? productSelected.price || ""
              : newProduct.price || ""
          }
          onChange={handleChange}
          placeholder="Prix"
          variant="add"
        />
        {toggleHideButton()}
      </div>
    </AddProductFormStyled>
  );
}

const AddProductFormStyled = styled.form`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 16% 48% 1fr;
  grid-gap: 15px;
  padding-left: 73px;
  .input-container {
    display: grid;
    grid-gap: 13px;
    width: 645px;
    .title-action {
      font-family: "Open Sans", sans-serif;
      font-weight: ${theme.weights.regular};
      font-size: ${theme.fonts.P0};
      color: ${theme.colors.primary};
      padding: 8px, 16px, 8px, 24px;
    }
    .underline {
      text-decoration: underline;
    }
    .submit-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
`;
