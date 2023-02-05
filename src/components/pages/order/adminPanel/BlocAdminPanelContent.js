import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import { theme } from "../../../../theme";

export default function BlocAdminPanelContent() {
  const { isPannelCollapsed, panelTabIndex } = useContext(GlobalContext);

  return (
    <BlocAdminPanelContentStyled isPannelCollapsed={isPannelCollapsed}>
      <div
        className={`${
          panelTabIndex === 2 ? "content active-content" : "content"
        }`}
      >
        <h2>contenu 2</h2>
      </div>
      <div
        className={`${
          panelTabIndex === 3 ? "content active-content" : "content "
        }`}
      >
        <h2>contenu 3</h2>
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
