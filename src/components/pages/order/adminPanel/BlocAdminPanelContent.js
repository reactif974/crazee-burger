import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import { theme } from "../../../../theme";
import { getTabsConfig } from "./getTabsConfig";

export default function BlocAdminPanelContent() {
  const { isPannelCollapsed, panelTabIndex } = useContext(GlobalContext);

  const tabs = getTabsConfig(isPannelCollapsed, panelTabIndex);
  const tabSelected = tabs.find((tab) => tab.index === panelTabIndex);

  return (
    <BlocAdminPanelContentStyled isPannelCollapsed={isPannelCollapsed}>
      <div
        className={`${
          panelTabIndex === tabSelected.index
            ? "content active-content"
            : "content"
        }`}
      >
        {panelTabIndex === tabSelected.index && tabSelected.label}
      </div>
    </BlocAdminPanelContentStyled>
  );
}

const BlocAdminPanelContentStyled = styled.div`
  display: ${(props) => (props.isPannelCollapsed ? "none" : "block")};
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
