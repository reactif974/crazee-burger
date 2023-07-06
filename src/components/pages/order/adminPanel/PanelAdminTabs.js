import styled from "styled-components";
import { theme } from "../../../../theme";
import { useContext } from "react";
import GlobalContext from "../../../../context/GlobalContext";
import BlocTabs from "./BlocTabs";
import { showAdminPanelAnimation } from "../../../../theme/animations";

export default function PanelAdminTabs() {
  const { isModeAdmin } = useContext(GlobalContext);

  const blocTabContainer = isModeAdmin ? "showAdminPanel" : "closeAdminPanel";

  return (
    <PanelAdminTabsStyled>
      {/* @TODO : rendre les className dynamiques*/}
      <div className={blocTabContainer}>
        <BlocTabs />
      </div>
    </PanelAdminTabsStyled>
  );
}

const PanelAdminTabsStyled = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  right: 0;
  z-index: 4;
  .showAdminPanel {
    display: block;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    animation: ${showAdminPanelAnimation} ${theme.animations.speed.fast}
      ease-out;
    z-index: 100;
  }

  .closeAdminPanel {
    display: none;
  }
`;
