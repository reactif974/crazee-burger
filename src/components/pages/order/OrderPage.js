import { useParams } from "react-router-dom";
import NavBar from "../reusable-ui/NavBar";
import styled from "styled-components";
import { theme } from "../../../theme";
import logoOrange from "../../../assets/logo-orange.png";
import Menu from "./main/Menu";
import { useState } from "react";
import GlobalContext from "../../../context/GlobalContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";

export default function OrderPage() {
  const { name } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [panelTabIndex, setPanelTabIndex] = useState("add");
  const [isPannelCollapsed, setIsPannelCollapsed] = useState(false);
  const [menus, setMenus] = useState(fakeMenu.LARGE);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleAdd = (productToAdd) => {
    const menuCopy = [...menus];
    const menuUpdated = [productToAdd, ...menuCopy];
    setMenus(menuUpdated);
  };

  const handleDelete = (id) => {
    const menuCopy = [...menus];
    const menuUpdated = menuCopy.filter((menu) => menu.id !== id);
    setMenus(menuUpdated);
  };

  const globalContextValue = {
    isModeAdmin,
    setIsModeAdmin: setIsModeAdmin,
    panelTabIndex,
    setPanelTabIndex,
    isPannelCollapsed,
    setIsPannelCollapsed,
    menus,
    setMenus,
    isSubmitSuccess,
    setIsSubmitSuccess,
    handleAdd,
    handleDelete,
  };

  return (
    <GlobalContext.Provider value={globalContextValue}>
      <OrderPageStyled>
        <NavBar userName={name} />
        <main className="main-container">
          {/* Keep this basket container for the basket feature ticket */}
          {/* <div className="sideBar-left"></div> */}
          <Menu />
        </main>
      </OrderPageStyled>
    </GlobalContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  // background: url(${logoOrange}), #FF9E1C;
  background: #ff9e1c;
  background-size: 110px;
  background-repeat: repeat;
  background-position: cover;
  .main-container {
    width: 1400px;
    max-width: 1400px;
    display: grid;
    // TODO: with basket container
    /* grid-template-columns: 20% 1fr; */
    grid-template-columns: 1fr;
    align-self: center;
    .sideBar-left {
      background-color: ${theme.colors.background_dark};
      height: 80vh;
      border-bottom-left-radius: ${theme.borderRadius.extraRound};
    }
  }
`;
