import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import { theme } from "../../../../theme";
import AddProductForm from "./forms/AddProductForm";
import { HiCursorClick } from "react-icons/hi";

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
        <div className="update-container">
          <span>Cliquer sur un produit du menu pour le modifier</span>
          <span className="cursor-icon">
            <HiCursorClick />
          </span>
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
  .update-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 73px;
    span {
      font-family: "Amatic SC";
      font-weight: ${theme.weights.regular};
      font-size: ${theme.fonts.P3};
      line-height: 30px;
      color: ${theme.colors.greyBlue};
    }
    .cursor-icon {
      padding-left: 10px;
    }
  }
`;
