import styled from "styled-components";
import Tab from "../../reusable-ui/Tab";
import { theme } from "../../../../theme";
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
    .tabs {
      cursor: pointer;
      border-width: 1px 1px 2px 1px;
      border-style: solid;
      border-color: ${theme.colors.greyLight};
      color: ${theme.colors.greyDark};
      box-shadow: ${theme.shadows.subtle};
      &:hover {
        text-decoration: underline;
        border-bottom: 1px solid transparent;
      }
      svg {
        color: ${theme.colors.greyDark};
        font-size: ${theme.fonts.P0};
      }
    }

    .tabs-one {
      width: 60px;
      svg {
        font-size: ${theme.fonts.P0};
      }
    }

    .tabs-two {
      justify-content: space-evenly;
      width: 212px;
    }

    .tabs-three {
      width: 220px;
      justify-content: space-evenly;
    }

    .is-active-tab {
      background-color: ${theme.colors.background_dark};
      color: ${theme.colors.background_white};
      border: 1px solid ${theme.colors.background_dark};
      svg {
        color: ${theme.colors.background_white};
        font-size: ${theme.fonts.P0};
      }
    }
  }
`;
