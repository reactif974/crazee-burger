import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import { theme } from "../../../../theme";
import Card from "../../reusable-ui/Card";
import PanelAdminTabs from "../adminPanel/PanelAdminTabs";
import EmptyMenu from "./EmptyMenu";

export default function Menu() {
  const {
    menu,
    handleDelete,
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
          {menu?.map((product) => (
            <div key={product.id} className="grille-item">
              <Card
                {...product}
                onDelete={() => handleDelete(product.id)}
                onClick={
                  isModeAdmin
                    ? () => handleProductSelected(product.id)
                    : undefined
                }
                className={
                  isModeAdmin && productSelected.id === product.id
                    ? "selected"
                    : ""
                }
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
