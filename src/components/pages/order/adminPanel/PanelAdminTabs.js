import styled, { keyframes } from "styled-components";
import { theme } from "../../../../theme";
import { useContext } from "react";
import GlobalContext from "../../../../context/GlobalContext";
import BlocTabs from "./BlocTabs";

export default function PanelAdminTabs() {
  const { isModeAdmin } = useContext(GlobalContext);

  const blocTabContainer = isModeAdmin ? "showAdminPanel" : "closeAdminPanel";

  return (
    <PanelAdminTabsStyled>
      {"@TODO : rendre les className dynamiques"}
      <div className={blocTabContainer}>
        <BlocTabs />
      </div>
    </PanelAdminTabsStyled>
  );
}

const showPanelTabsAnimation = keyframes`
   0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
`;

const hidePanelTabsAnimation = keyframes`
  0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
`;

const PanelAdminTabsStyled = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  right: 0;

  .showAdminPanel {
    display: block;
    height: 100%;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    animation: ${showPanelTabsAnimation} 0.6s ease;
  }

  .closeAdminPanel {
    display: block;
    height: 0;
    transition: height 0.5s;
    animation: ${hidePanelTabsAnimation} 0.5s;
  }
`;
