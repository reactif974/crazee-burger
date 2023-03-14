import styled from "styled-components";
import Input from "../../../reusable-ui/Input";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import Button from "../../../reusable-ui/Button";
import { theme } from "../../../../../theme";

export default function AddProductForm() {
  return (
    <AddProductFormStyled action="submit">
      <div className="pics-container">Aucune image</div>
      <div className="input-container">
        <Input
          Icon={<FaHamburger />}
          value="Nom du produit (ex: Super Burger)"
        />
        <Input
          Icon={<BsFillCameraFill />}
          value="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        />
        <Input Icon={<MdOutlineEuro />} value="Prix" />
        <Button
          text="Ajouter un nouveau produit au menu"
          type="submit"
          className="submit"
        />
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
