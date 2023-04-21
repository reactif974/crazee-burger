import styled from "styled-components";
import Tab from "../../reusable-ui/Tab";
import { useContext } from "react";
import GlobalContext from "../../../../context/GlobalContext";
import BlocAdminPanelContent from "./BlocAdminPanelContent";
import { getTabsConfig } from "./getTabsConfig";

export default function BlocTabs() {
  const {
    isPannelCollapsed,
    setPanelTabIndex,
    panelTabIndex,
    setIsPannelCollapsed,
    isModeAdmin,
  } = useContext(GlobalContext);

  // management of the display of different content according to the index
  const toggleTab = (index) => {
    setPanelTabIndex(index);
    setIsPannelCollapsed(false);
  };

  const tabs = getTabsConfig(
    isPannelCollapsed,
    panelTabIndex,
    toggleTab,
    setIsPannelCollapsed
  );

  const selectTab = (indexTab) => {
    if (indexTab === "chevronUpDown") {
      setIsPannelCollapsed(!isPannelCollapsed);
    } else {
      toggleTab(indexTab);
    }
  };

  return (
    <>
      <BlocTabsStyled>
        <div className={isModeAdmin ? "bloc-tabs-container" : "hidden-bloc"}>
          {tabs.map((tab) => (
            <Tab
              key={tab.index}
              label={tab.label}
              className={tab.className}
              Icon={tab.Icon}
              onClick={() => selectTab(tab.index)}
            />
          ))}
        </div>
        <div
          className={
            !isPannelCollapsed
              ? "show-panel-admin-content"
              : "hidde-panel-admin-content"
          }
        >
          <BlocAdminPanelContent />
        </div>
      </BlocTabsStyled>
    </>
  );
}

const BlocTabsStyled = styled.div`
  .hidden-bloc,
  .hidde-panel-admin-content {
    display: none;
  }
  .show-panel-admin-content {
    display: block;
  }
  .bloc-tabs-container {
    width: 100%;
    display: flex;
    justify-content: start;
    padding-left: 71px;
    background-color: transparent;
  }
`;
