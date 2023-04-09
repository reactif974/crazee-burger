import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../context/GlobalContext";
import { theme } from "../../../theme";
import PriceContainer from "../order/main/PriceContainer";
import comingSoon from "../../../assets/coming-soon.png";
import { TiDelete } from "react-icons/ti";

export default function Card({ title, imageSource, price, onDelete }) {
  const { isModeAdmin } = useContext(GlobalContext);

  return (
    <CardStyled image={imageSource} title={title}>
      {isModeAdmin && (
        <button className="delete-button" onClick={onDelete}>
          <TiDelete className="icon" />
        </button>
      )}
      <div className="pics-container"></div>
      <h2>{title}</h2>
      <PriceContainer price={price} />
    </CardStyled>
  );
}

const CardStyled = styled.div`
  position: relative;
  width: 240px;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.extraRound};
  .delete-button {
    border: 1px solid red;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    color: ${theme.colors.primary};
    z-index: 2;
    padding: 0;
    border: none;
    background: none;

    .icon {
      /* border: 1px solid blue; */
      height: 100%;
      width: 100%;
    }

    :hover {
      color: ${theme.colors.red};
      /* background-color: red; */
    }

    :active {
      color: ${theme.colors.primary};
    }
  }
  .pics-container {
    height: 145px;
    margin: 29px 30px 20px 27px;
    background: url(${(props) => (!props.image ? comingSoon : props.image)});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  h2 {
    width: 100%;
    text-align: left;
    font-family: "Amatic SC", cursive;
    padding-left: 27px;
    font-size: ${theme.fonts["P3.1"]};
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
