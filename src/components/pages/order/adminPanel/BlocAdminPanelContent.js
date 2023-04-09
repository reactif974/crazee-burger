import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import { theme } from "../../../../theme";
import AddProductForm from "./forms/AddProductForm";

export default function BlocAdminPanelContent() {
  const { panelTabIndex } = useContext(GlobalContext);

  const dataInAdminPanelContent = (panelTabIndex) => {
    if (panelTabIndex === "add") {
      return (
        <div className="content active-content">
          <AddProductForm />
        </div>
      );
    }
    if (panelTabIndex === "edit") {
      return (
        <div className="content active-content">
          <h4>Modifier un produit</h4>
        </div>
      );
    }
  };

  return (
    <BlocAdminPanelContentStyled>
      {dataInAdminPanelContent(panelTabIndex)}
    </BlocAdminPanelContentStyled>
  );
}

const BlocAdminPanelContentStyled = styled.div`
  height: 250px;
  background: ${theme.colors.background_white};
  .content {
    display: none;
    width: 100%;
    background: ${theme.colors.background_white};
    padding-top: 30px;
    height: 250px;
    h2 {
      padding: 0px 0 5px 0px;
    }
  }
  .active-content {
    display: block;
    box-shadow: ${theme.shadows.medium};
  }
`;
