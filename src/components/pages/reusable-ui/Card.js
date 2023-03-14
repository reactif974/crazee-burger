import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../context/GlobalContext";
import { theme } from "../../../theme";
import PriceContainer from "../order/main/PriceContainer";

export default function Card({ title, imageSource, price, id }) {
  const { menus, setMenus, isModeAdmin } = useContext(GlobalContext);

  const handleDelete = (id) => {
    const menusUpdated = menus.filter((menu) => menu.id !== id);
    setMenus(menusUpdated);
  };

  return (
    <CardStyled image={imageSource} title={title}>
      {isModeAdmin ? (
        <button className="delete-icon" onClick={() => handleDelete(id)}>
          X
        </button>
      ) : (
        <div></div>
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
  .delete-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    background-color: ${theme.colors.primary};
    border: none;
    border-radius: 20px;
    color: ${theme.colors.background_white};
    box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.2);
  }
  .pics-container {
    height: 145px;
    margin: 29px 30px 20px 27px;
    background: url(${(props) => props.image}) no-repeat;
    background-size: contain;
    background-position: center;
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
