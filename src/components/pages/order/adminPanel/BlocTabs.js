import styled from "styled-components";
import Tab from "../../reusable-ui/Tab";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { theme } from "../../../../theme";
import { useContext } from "react";
import GlobalContext from "../../../../context/GlobalContext";
import BlocAdminPanelContent from "./BlocAdminPanelContent";

export default function BlocTabs() {
  const {
    isPannelCollapsed,
    panelTabIndex,
    setPanelTabIndex,
    setIsPannelCollapsed,
  } = useContext(GlobalContext);

  const classNameForTabOne = `tabs tabs-one ${
    isPannelCollapsed && "is-active-tab"
  }`;
  const classNameForTabTwo = `tabs tabs-two ${
    panelTabIndex === 2 && "is-active-tab"
  }`;
  const classNameForTabThree = `tabs tabs-three ${
    panelTabIndex === 3 && "is-active-tab"
  }`;

  // management of the display of different content according to the index
  const toggleTab = (index) => {
    setPanelTabIndex(index);
    if (isPannelCollapsed === true) {
      setIsPannelCollapsed(false);
    }
  };

  const hideAndShowAdminPanelContent = () => {
    setIsPannelCollapsed(!isPannelCollapsed);
  };

  return (
    <>
      <BlocTabsStyled>
        <Tab
          text={""}
          className={`tabs tabs-one ${classNameForTabOne}`}
          Icon={isPannelCollapsed ? <BsChevronUp /> : <BsChevronDown />}
          onClick={() => hideAndShowAdminPanelContent()}
        />
        <Tab
          text={"Ajouter un produit"}
          className={classNameForTabTwo}
          Icon={<AiOutlinePlus />}
          onClick={() => toggleTab(2)}
        />
        <Tab
          text={"Modifier un produit"}
          className={classNameForTabThree}
          Icon={<RiPencilFill />}
          onClick={() => toggleTab(3)}
        />
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
