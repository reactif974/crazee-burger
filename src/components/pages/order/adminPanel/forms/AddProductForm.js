import styled from "styled-components";
import Button from "../../../reusable-ui/Button";
import { useContext } from "react";
import GlobalContext from "../../../../../context/GlobalContext";
import SubmitMessage from "../SubmitMessage";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import { replaceFrenchCommaWithDot } from "../../../../../utils/number/format";
import Form from "./form/Form";

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
    <AddProductFormStyled>
      <Form
        productSelected={newProduct}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
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
      </Form>
    </AddProductFormStyled>
  );
}

const AddProductFormStyled = styled.div`
  .submit-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
