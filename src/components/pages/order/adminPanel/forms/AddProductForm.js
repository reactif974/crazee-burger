import styled from "styled-components";
import TextInput from "../../../reusable-ui/TextInput";
import Button from "../../../reusable-ui/Button";
import { useContext } from "react";
import GlobalContext from "../../../../../context/GlobalContext";
import ImagePreview from "../ImagePreview";
import SubmitMessage from "../SubmitMessage";
import { getInputTextConfig } from "../inpuTextConfig";

export default function AddProductForm() {
  const {
    isSubmitSuccess,
    setIsSubmitSuccess,
    handleAdd,
    EMPTY_PRODUCT,
    setNewProduct,
    newProduct,
  } = useContext(GlobalContext);

  // gestionnaire d'événements -> event handlers

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

  const inputTexts = getInputTextConfig(newProduct);

  return (
    <AddProductFormStyled action="submit" onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
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
            />
          );
        })}
        <span className="submit-container">
          <Button
            text="Ajouter un nouveau produit au menu"
            type="submit"
            variant="success"
          />
          {isSubmitSuccess && <SubmitMessage />}
        </span>
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
  padding-top: 30px;
  .input-container {
    display: grid;
    grid-gap: 13px;
    width: 645px;
    .submit-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
`;
