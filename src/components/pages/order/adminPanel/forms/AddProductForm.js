import styled from "styled-components";
import TextInput from "../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import Button from "../../../reusable-ui/Button";
import { useContext } from "react";
import GlobalContext from "../../../../../context/GlobalContext";
import ImagePreview from "../ImagePreview";
import SubmitMessage from "../SubmitMessage";

export default function AddProductForm() {
  const {
    isSubmitSuccess,
    setIsSubmitSuccess,
    handleAdd,
    inputTitleRef,
    EMPTY_PRODUCT,
    setNewProduct,
    newProduct,
  } = useContext(GlobalContext);

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

  return (
    <AddProductFormStyled action="submit" onSubmit={handleSubmit}>
      <ImagePreview imageSource={newProduct.imageSource} />
      <div className="input-container">
        <TextInput
          Icon={<FaHamburger />}
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          placeholder="Nom du produit (ex: Super Burger)"
          variant="add"
          ref={inputTitleRef}
        />
        <TextInput
          Icon={<BsFillCameraFill />}
          name="imageSource"
          value={newProduct.imageSource}
          onChange={handleChange}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          variant="add"
        />
        <TextInput
          Icon={<MdOutlineEuro />}
          name="price"
          value={newProduct.price || ""}
          onChange={handleChange}
          placeholder="Prix"
          variant="add"
        />
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
