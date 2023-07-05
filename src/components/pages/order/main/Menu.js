import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import { theme } from "../../../../theme";
import Card from "../../reusable-ui/Card";
import EmptyMenu from "./EmptyMenu";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT } from "../../../../enums/product";
import { deleteProductFromUser } from "../../../../api/products";
import EmptyMessageForCustomers from "./EmptyMessageForCustomers";
import LoadingMessage from "./LoadingMessage";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { addAndDeleteCardAnimation } from "../../../../theme/animations";
import PanelAdminTabs from "../adminPanel/PanelAdminTabs";

export default function Menu() {
  const {
    menu,
    handleDelete,
    setProductSelected,
    isModeAdmin,
    productSelected,
    handleDeleteBasketProduct,
    handleProductSelected,
    name,
    isLoading,
  } = useContext(GlobalContext);

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
    <TransitionGroup component={MenuStyled}>
      {menu.map(({ id, title, imageSource, price }) => (
        <CSSTransition
          classNames={"menu-card-animation"}
          timeout={300}
          key={id}
        >
          <Card
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
        </CSSTransition>
      ))}
      <PanelAdminTabs />
    </TransitionGroup>
  );
}

const MenuStyled = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  grid-column-gap: 5px;
  justify-items: center;
  height: 80vh;
  padding: 45px 10px 35% 10px;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  overflow: hidden;
  overflow-y: scroll;
  ${addAndDeleteCardAnimation}
`;
