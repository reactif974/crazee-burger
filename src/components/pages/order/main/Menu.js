import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import { theme } from "../../../../theme";
import Card from "../../reusable-ui/Card";
import PanelAdminTabs from "../adminPanel/PanelAdminTabs";
import EmptyMenu from "./EmptyMenu";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT } from "../../../../enums/product";

export default function Menu() {
  const {
    menu,
    handleDelete,
    setProductSelected,
    isModeAdmin,
    productSelected,
    handleDeleteBasketProduct,
    handleProductSelected,
  } = useContext(GlobalContext);

  // gestionnaire d'événements -> event handlers

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);
    handleDeleteBasketProduct(idProductToDelete);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
  };

  const handleClick = (idProductClicked) => {
    if (!isModeAdmin) return;
    handleProductSelected(idProductClicked);
  };

  return (
    <MenuStyled className="menu-container">
      {!menu.length ? (
        <>
          <EmptyMenu />
        </>
      ) : (
        <div className="card-container">
          {menu?.map(({ id, title, imageSource, price }) => (
            <div key={id} className="grille-item">
              <Card
                title={
                  productSelected.id === id ? productSelected.title : title
                }
                imageSource={
                  productSelected.id === id
                    ? productSelected.imageSource
                    : imageSource
                }
                price={
                  productSelected.id === id ? productSelected.price : price
                }
                onDelete={(event) => handleCardDelete(event, id)}
                onClick={() => handleClick(id)}
                hasButton={isModeAdmin}
                isSelected={checkIfProductIsClicked(id, productSelected.id)}
                isHoverable={isModeAdmin}
                productId={id}
              />
            </div>
          ))}
        </div>
      )}
      <PanelAdminTabs />
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  position: relative;
  overflow: hidden;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  .card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    row-gap: 4em;
    column-gap: 1em;
    justify-content: center;
    height: 80vh;
    padding-top: 45px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 35%;
    background-color: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.strong};
    overflow-y: scroll;
    .grille-item {
      display: flex;
      justify-content: center;
    }
  }
`;
