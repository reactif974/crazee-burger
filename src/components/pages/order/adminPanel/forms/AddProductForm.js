import styled from "styled-components";
import Input from "../../../reusable-ui/Input";
import { FaHamburger } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import Button from "../../../reusable-ui/Button";
import { theme } from "../../../../../theme";
import { useState } from "react";
import { useContext } from "react";
import GlobalContext from "../../../../../context/GlobalContext";

export default function AddProductForm() {
  const { menus, setMenus, isSubmitSucces, setIsSubmitSucces } =
    useContext(GlobalContext);

  const [name, setName] = useState("");
  const [urlPicture, setUrlPicture] = useState("");
  const [priceProduct, setPriceProduct] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: new Date().getTime(),
      imageSource: urlPicture,
      title: name,
      price: priceProduct,
    };
    setMenus([newProduct, ...menus]);
    setName("");
    setUrlPicture("");
    setPriceProduct("");
    setIsSubmitSucces(true);
    setTimeout(() => {
      setIsSubmitSucces(false);
    }, 2000);
  };

  console.log("urlPicture", urlPicture);
  return (
    <AddProductFormStyled
      action="submit"
      onSubmit={handleSubmit}
      image={urlPicture}
    >
      {urlPicture ? (
        <div className="pics-preview"></div>
      ) : (
        <div className="pics-container">Aucune image</div>
      )}
      <div className="input-container">
        <Input
          Icon={<FaHamburger />}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => (e.target.placeholder = "")}
          placeholder="Nom du produit (ex: Super Burger)"
        />
        <Input
          Icon={<BsFillCameraFill />}
          value={urlPicture}
          onChange={(e) => setUrlPicture(e.target.value)}
          onFocus={(e) => (e.target.placeholder = "")}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        />
        <Input
          Icon={<MdOutlineEuro />}
          value={priceProduct}
          onChange={(e) => setPriceProduct(e.target.value)}
          onFocus={(e) => (e.target.placeholder = "")}
          placeholder="Prix"
        />
        <span className="submit-container">
          <Button
            text="Ajouter un nouveau produit au menu"
            type="submit"
            className="submit"
          />
          {isSubmitSucces ? (
            <span className="succes-message">
              <FiCheck />
              Ajouté avec succès !
            </span>
          ) : (
            <span></span>
          )}
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
  .pics-preview {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column-start: 1;
    height: 132.14px;
    background: url(${(props) => props.image}) no-repeat;
    background-size: contain;
    background-position: center;
  }
  .pics-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    grid-column-start: 1;
    height: 132.14px;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${theme.colors.greySemiDark};
    border: 1px solid ${theme.colors.greyLight};
    border-radius: 5px;
  }
  .input-container {
    display: grid;
    grid-gap: 13px;
    .submit-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .succes-message {
        display: flex;
        padding-left: 18px;
        color: ${theme.colors.success};
        font-family: "Open Sans", sans-serif;
        font-size: 15px;
        line-height: 20px;
        font-weight: 400;
        svg {
          border: 1px solid ${theme.colors.success};
          border-radius: 20px;
          margin-right: 8px;
          width: 18px;
          height: 18px;
        }
      }
    }
    div {
      height: 35px;
      padding-left: 24px;
      span {
        svg {
          width: 15px;
          height: 13px;
        }
      }
      input {
        width: 577.45px;
        height: 35px;
        background-color: ${theme.colors.greyLight};
        border-radius: 5px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 17.25px;
        color: ${theme.colors.greyMedium};
      }
    }
    .submit {
      width: 275px;
      height: 34.05px;
      font-size: 12px;
      background-color: ${theme.colors.success};
    }
  }
`;
