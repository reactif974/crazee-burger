import styled from "styled-components";
import TextInput from "../../../reusable-ui/TextInput";
import Button from "../../../reusable-ui/Button";
import { useContext } from "react";
import GlobalContext from "../../../../../context/GlobalContext";
import ImagePreview from "../ImagePreview";
import SubmitMessage from "../SubmitMessage";
import { getInputTextConfig } from "../inpuTextConfig";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import { replaceFrenchCommaWithDot } from "../../../../../utils/number/format";

export default function AddProductForm() {
  // state
  const {
    isSubmitSuccess,
    setIsSubmitSuccess,
    handleAdd,
    setNewProduct,
    newProduct,
    errors,
    setErrors,
  } = useContext(GlobalContext);

  const inputTexts = getInputTextConfig(newProduct);

  const validateForm = () => {
    const validationErrors = [];

    if (!isValidURL(newProduct.imageSource)) {
      validationErrors.push("Veuillez saisir une URL valide");
    }
    if (!isValidPrice(newProduct.price)) {
      validationErrors.push("Veuillez saisir un prix valide");
    }

    return validationErrors;
  };

  const isValidURL = (url) => {
    const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
    return regex.test(url);
  };
  const isValidPrice = (price) => {
    const regex = /^[\d]+(?:[.,][\d]+)?$/;
    return regex.test(price);
  };

  // gestionnaire d'événements -> event handlers

  const handleChange = (event) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    handleAdd({
      ...newProduct,
      id: crypto.randomUUID(),
      price: replaceFrenchCommaWithDot(newProduct.price),
    });
    setIsSubmitSuccess(true);
    setTimeout(() => {
      setIsSubmitSuccess(false);
    }, 2000);
    setNewProduct(EMPTY_PRODUCT);
    setErrors([]);
  };

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
        {errors.length > 0 && (
          <ErrorContainer>
            {errors.map((error, index) => (
              <ErrorMessage key={index}>{error}</ErrorMessage>
            ))}
          </ErrorContainer>
        )}
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

const ErrorContainer = styled.ul`
  list-style-type: none;
  margin-bottom: 0px;
  margin-top: -7px;
  padding-left: 4px;
`;

const ErrorMessage = styled.li`
  color: red;
  margin-top: 2px;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  .separator {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;
