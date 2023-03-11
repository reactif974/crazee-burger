import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import { theme } from "../../../../theme";
import { getTabsConfig } from "./getTabsConfig";

export default function BlocAdminPanelContent() {
  const { panelTabIndex } = useContext(GlobalContext);

  const tabs = getTabsConfig(panelTabIndex);
  const tabSelected = tabs.find((tab) => tab.index === panelTabIndex);

  return (
    <BlocAdminPanelContentStyled>
      <div
        className={`${
          panelTabIndex === tabSelected.index
            ? "content active-content"
            : "content"
        }`}
      >
        {panelTabIndex === tabSelected.index && tabSelected.content}
      </div>
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
    padding: 20px;
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
