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
  const { isPanelReduce, panelTabIndex, setPanelTabIndex, setIsPanelReduce } =
    useContext(GlobalContext);

  // management of the display of different content according to the index
  const toggleTab = (index) => {
    setPanelTabIndex(index);
    if (isPanelReduce === true) {
      setIsPanelReduce(false);
    }
  };

  const hideAndShowAdminPanelContent = () => {
    setIsPanelReduce(!isPanelReduce);
  };
  return (
    <>
      <BlocTabsStyled>
        <Tab
          text={""}
          className={`tabs tabs-one ${isPanelReduce && "is-active-tab"}`}
          Icon={isPanelReduce ? <BsChevronUp /> : <BsChevronDown />}
          onClick={() => hideAndShowAdminPanelContent()}
        />
        <Tab
          text={"Ajouter un produit"}
          className={`tabs tabs-two ${panelTabIndex === 2 && "is-active-tab"}`}
          Icon={<AiOutlinePlus />}
          onClick={() => toggleTab(2)}
        />
        <Tab
          text={"Modifier un produit"}
          className={`tabs tabs-three ${
            panelTabIndex === 3 && "is-active-tab"
          }`}
          Icon={<RiPencilFill />}
          onClick={() => toggleTab(3)}
        />
      </BlocTabsStyled>
      <BlocAdminPanelContent />
    </>
  );
}

const BlocTabsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  background-color: transparent;
  width: 100%;
  .tabs {
    cursor: pointer;
    border: 1px solid ${theme.colors.greyLight};
    color: ${theme.colors.greyDark};
    &:hover {
      text-decoration: underline;
    }
    svg {
      color: ${theme.colors.greyDark};
      font-size: ${theme.fonts.P1};
      padding-right: ${theme.spacing.xs};
    }
  }
  .tabs-one {
    grid-column-start: 2;
    grid-column-end: 3;
    svg {
      font-size: ${theme.fonts.P3};
    }
  }
  .tabs-two {
    grid-column-start: 3;
    grid-column-end: 5;
  }
  .tabs-three {
    grid-column-start: 5;
    grid-column-end: 7;
  }
  .is-active-tab {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.background_white};
    border: 1px solid ${theme.colors.background_dark};
    svg {
      color: ${theme.colors.background_white};
      font-size: ${theme.fonts.P1};
      padding-right: ${theme.spacing.xs};
    }
  }
`;
