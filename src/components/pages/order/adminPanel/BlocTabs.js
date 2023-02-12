import styled from "styled-components";
import Tab from "../../reusable-ui/Tab";
import { theme } from "../../../../theme";
import { useContext } from "react";
import GlobalContext from "../../../../context/GlobalContext";
import BlocAdminPanelContent from "./BlocAdminPanelContent";
import { getTabsConfig } from "./getTabsConfig";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function BlocTabs() {
  const {
    isPannelCollapsed,
    setPanelTabIndex,
    panelTabIndex,
    setIsPannelCollapsed,
  } = useContext(GlobalContext);

  // management of the display of different content according to the index
  const toggleTab = (index) => {
    setPanelTabIndex(index);
    if (isPannelCollapsed) {
      setIsPannelCollapsed(false);
    }
  };

  const hideAndShowAdminPanelContent = () => {
    setIsPannelCollapsed(!isPannelCollapsed);
  };

  const tabs = getTabsConfig(isPannelCollapsed, panelTabIndex);

  return (
    <>
      <BlocTabsStyled>
        <Tab
          index="0"
          label=""
          className={
            isPannelCollapsed ? "tabs tabs-one is-active-tab" : "tabs tabs-one"
          }
          Icon={isPannelCollapsed ? <BsChevronUp /> : <BsChevronDown />}
          onClick={() => hideAndShowAdminPanelContent()}
        />
        {tabs.map((tab) => (
          <Tab
            key={tab.index}
            label={tab.label}
            className={tab.className}
            Icon={tab.Icon}
            onClick={() => toggleTab(tab.index)}
          />
        ))}
      </BlocTabsStyled>
      <BlocAdminPanelContent />
    </>
  );
}

const BlocTabsStyled = styled.div`
  display: flex;
  justify-content: start;
  padding-left: 71px;
  background-color: transparent;
  .tabs {
    cursor: pointer;
    border: 1px solid ${theme.colors.greyLight};
    color: ${theme.colors.greyDark};
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
`;
