import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import { theme } from "../../../../theme";
import Card from "../../reusable-ui/Card";
import PanelAdminTabs from "../adminPanel/PanelAdminTabs";
import EmptyMenu from "./EmptyMenu";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT } from "../../../../enums/product";
import {
  deleteProductFromUser,
  getMenuProducts,
} from "../../../../api/products";
import EmptyMessageForCustomers from "./EmptyMessageForCustomers";
import LoadingMessage from "./LoadingMessage";

export default function Menu() {
  const {
    menu,
    setMenu,
    handleDelete,
    setProductSelected,
    isModeAdmin,
    productSelected,
    handleDeleteBasketProduct,
    handleProductSelected,
    name,
  } = useContext(GlobalContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMenuProducts = async () => {
      try {
        setIsLoading(true);
        const menuProductsFromDb = await getMenuProducts(name);
        setMenu(menuProductsFromDb);
        setIsLoading(false);
      } catch (error) {
        console.log(
          "Erreur lors de la récupération des produits du menu :",
          error
        );
        setIsLoading(false);
      }
    };
    fetchMenuProducts();
  }, [name]);

  // gestionnaire d'événements -> event handlers

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);
    deleteProductFromUser(name, idProductToDelete);
    handleDeleteBasketProduct(idProductToDelete);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
  };

  const handleClick = (idProductClicked) => {
    if (!isModeAdmin) return;
    handleProductSelected(idProductClicked);
  };

  if (isLoading) return <LoadingMessage />;
  if (!isModeAdmin && !menu.length) return <EmptyMessageForCustomers />;
  if (isModeAdmin && !menu.length) return <EmptyMenu />;

  return (
    <MenuStyled className="menu-container">
      <div className="card-container">
        {menu.map(({ id, title, imageSource, price }) => (
          <div key={id} className="grille-item">
            <Card
              key={id}
              title={productSelected.id === id ? productSelected.title : title}
              imageSource={
                productSelected.id === id
                  ? productSelected.imageSource
                  : imageSource
              }
              price={productSelected.id === id ? productSelected.price : price}
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
