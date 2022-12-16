import styled, { keyframes } from "styled-components";
import { theme } from "../../../theme";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { BiChevronUp } from "react-icons/bi";
import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";
import { useState } from "react";
import Tab from "../reusable-ui/Tab";

export default function PanelTabs() {
  const contextValue = useContext(GlobalContext);

  const [toggleTabs, setToggleTabs] = useState(2);

  const [isPanelReduce, setIsPanelReduce] = useState(false);

  // style for icon panel tabs
  const style = {
    fontSize: theme.fonts.P1,
    paddingRight: theme.spacing.xs,
    fontSize: theme.fonts.P2,
  };

  // management of the display of different content according to the index
  const toggleTab = (index) => {
    setToggleTabs(index);
    if (isPanelReduce) {
      setIsPanelReduce(false);
    }
  };

  // display show or hide panel tabs
  const togglePanelTabs = () => {
    setIsPanelReduce(!isPanelReduce);
  };

  return (
    <PanelTabsStyled contextValue={contextValue} isPanelReduce={isPanelReduce}>
      <div className="bloc-tabs">
        <Tab
          text={""}
          className="tabs tabs-one"
          Icon={
            isPanelReduce ? (
              <BiChevronUp style={style} />
            ) : (
              <BsChevronDown style={style} />
            )
          }
          onClick={togglePanelTabs}
        />
        <Tab
          text={"Ajouter un produit"}
          className={
            toggleTabs === 2 ? "tabs active-tabs tabs-two" : "tabs tabs-two"
          }
          Icon={<AiOutlinePlus style={style} />}
          onClick={() => toggleTab(2)}
        />
        <Tab
          text={"Modifier un produit"}
          className={
            toggleTabs === 3 ? "tabs active-tabs tabs-three" : "tabs tabs-three"
          }
          Icon={<RiPencilFill style={style} />}
          onClick={() => toggleTab(3)}
        />
      </div>
      <div className="content-tabs">
        <div className={toggleTabs === 2 ? "active-content" : "content"}>
          <h2>contenu 2</h2>
        </div>
        <div className={toggleTabs === 3 ? "active-content" : "content"}>
          <h2>contenu 3</h2>
        </div>
      </div>
    </PanelTabsStyled>
  );
}

const panelTabsAnimation = keyframes`
 0% { height: 0px; width: 100%; opacity: 0}
 100% { height: 250px; width: 100%; opacity: 1 }
`;

const PanelTabsStyled = styled.div`
  position: absolute;
  width: 100%;
  height: ${(props) => (props.isPanelReduce ? "9px" : "250px")};
  background-color: ${theme.colors.background_white};
  bottom: 0;
  right: 0;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: ${(props) => (props.contextValue.isModeAdmin ? "block" : "none")};
  animation: ${panelTabsAnimation} 0.6s ease-in-out;
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  .bloc-tabs {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    background-color: transparent;
    width: 100%;
    margin-top: -35px;
    .tabs {
      cursor: pointer;
      border: 1px solid ${theme.colors.greyLight};
      color: ${theme.colors.greyDark};
    }
    .tabs-one {
      grid-column-start: 2;
      grid-column-end: 3;
    }
    .tabs-two {
      grid-column-start: 3;
      grid-column-end: 5;
    }
    .tabs-three {
      grid-column-start: 5;
      grid-column-end: 7;
    }
    .active-tabs {
      background-color: ${theme.colors.background_dark};
      color: ${theme.colors.background_white};
      svg {
        color: ${theme.colors.background_white};
      }
    }
  }
  .content-tabs {
    display: ${(props) => (props.isPanelReduce ? "none" : "block")};
    .active-content {
      display: block;
    }
    .content {
      background: white;
      padding: 20px;
      width: 100%;
      height: 100%;
      display: none;
      h2 {
        padding: 0px 0 5px 0px;
      }
    }
  }
`;
