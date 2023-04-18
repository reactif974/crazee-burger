import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import { theme } from "../../../../theme";
import Card from "../../reusable-ui/Card";
import PanelAdminTabs from "../adminPanel/PanelAdminTabs";
import EmptyMenu from "./EmptyMenu";
import { checkIfProductIsClicked } from "./helper";

export default function Menu() {
  const {
    menu,
    onDelete,
    handleProductSelected,
    isModeAdmin,
    productSelected,
  } = useContext(GlobalContext);

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
                onDelete={(e) => onDelete(e, id)}
                onClick={isModeAdmin ? () => handleProductSelected(id) : null}
                hasButton={isModeAdmin}
                isSelected={checkIfProductIsClicked(id, productSelected.id)}
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
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  .card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
    row-gap: 4em;
    column-gap: 1em;
    justify-content: center;
    height: 80vh;
    padding-top: 45px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 170px;
    background-color: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.strong};
    overflow-y: scroll;
    .grille-item {
      display: flex;
      justify-content: center;
    }
  }
`;
