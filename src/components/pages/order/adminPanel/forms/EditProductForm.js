import styled from "styled-components";
import TextInput from "../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { useContext } from "react";
import GlobalContext from "../../../../../context/GlobalContext";
import ImagePreview from "../ImagePreview";
import { theme } from "../../../../../theme";

export default function EditProductForm() {
  const { productSelected, setProductSelected, inputTitleRef } =
    useContext(GlobalContext);

  // gestionnaire d'événements -> event handlers

  const handleChange = (event) => {
    setProductSelected({
      ...productSelected,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <EditProductFormStyled>
      <ImagePreview imageSource={productSelected.imageSource} />
      <div className="input-container">
        <TextInput
          Icon={<FaHamburger />}
          name="title"
          value={productSelected.title}
          onChange={handleChange}
          placeholder="Nom du produit (ex: Super Burger)"
          variant="add"
          ref={inputTitleRef}
        />
        <TextInput
          Icon={<BsFillCameraFill />}
          name="imageSource"
          value={productSelected.imageSource}
          onChange={handleChange}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          variant="add"
        />
        <TextInput
          Icon={<MdOutlineEuro />}
          name="price"
          value={productSelected.price || ""}
          onChange={handleChange}
          placeholder="Prix"
          variant="add"
        />
        <span className="title-action">
          Cliquer sur un produit du menu pour le modifier
          <span className="underline">en temps réel</span>
        </span>
      </div>
    </EditProductFormStyled>
  );
}

const EditProductFormStyled = styled.form`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 16% 48% 1fr;
  grid-gap: 15px;
  padding-left: 73px;
  padding-top: 30px;
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
      padding-left: 3px;
    }
    .submit-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
`;
