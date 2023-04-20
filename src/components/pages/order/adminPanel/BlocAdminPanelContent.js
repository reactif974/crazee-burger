import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import { theme } from "../../../../theme";
import AddProductForm from "./forms/AddProductForm";
import EditProductForm from "./forms/EditProductForm";
import HintMessage from "./HintMessage";

export default function BlocAdminPanelContent() {
  const { panelTabIndex, isProductSelected } = useContext(GlobalContext);

  const dataInAdminPanelContent = (panelTabIndex) => {
    if (panelTabIndex === "add") {
      return <AddProductForm />;
    }
    if (panelTabIndex === "edit") {
      return isProductSelected ? <EditProductForm /> : <HintMessage />;
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
  box-shadow: ${theme.shadows.medium};
`;
