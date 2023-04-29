import styled from "styled-components";
import TextInput from "../../../reusable-ui/TextInput";
import { useContext } from "react";
import GlobalContext from "../../../../../context/GlobalContext";
import ImagePreview from "../ImagePreview";
import { theme } from "../../../../../theme";
import { getInputTextConfig } from "../inpuTextConfig";

export default function EditProductForm() {
  const { productSelected, setProductSelected, inputTitleRef, handleEdit } =
    useContext(GlobalContext);

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

  const inputTexts = getInputTextConfig(productSelected);

  return (
    <EditProductFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="input-container">
        {inputTexts.map((input) => {
          return (
            <TextInput
              key={input.id}
              Icon={input.Icon}
              name={input.name}
              value={input.value}
              onChange={handleChange}
              placeholder={input.placeholder}
              variant={input.variant}
              ref={input.name === "title" ? inputTitleRef : null}
            />
          );
        })}
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
