import styled from "styled-components";
import { theme } from "../../../theme";

export default function PanelTabs() {
  return <PanelTabsStyled>panel</PanelTabsStyled>;
}

const PanelTabsStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 250px;
  background-color: red;
  bottom: 0;
  right: 0;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
