import { useParams } from "react-router-dom";
import NavBar from "../reusable-ui/NavBar";
import styled from "styled-components";
import logoOrange from "../../../assets/logo-orange.png";
import Menu from "./main/Menu";
import { useRef, useState } from "react";
import GlobalContext from "../../../context/GlobalContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { deepClone } from "../../../utils/array/array";
import { EMPTY_PRODUCT } from "../../../enums/product";
import Basket from "./basket/Basket";

export default function OrderPage() {
  const { name } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [panelTabIndex, setPanelTabIndex] = useState("edit");
  const [isPannelCollapsed, setIsPannelCollapsed] = useState(false);
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const [isProductSelected, setIsProductSelected] = useState(false);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const inputTitleRef = useRef();

  // gestionnaire de state - state handlers

  const handleAdd = (productToAdd) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [productToAdd, ...menuCopy];
    setMenu(menuUpdated);
  };

  const handleDelete = (id) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = menuCopy.filter((menu) => menu.id !== id);
    setMenu(menuUpdated);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  const globalContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    panelTabIndex,
    setPanelTabIndex,
    isPannelCollapsed,
    setIsPannelCollapsed,
    menu,
    isSubmitSuccess,
    setIsSubmitSuccess,
    handleAdd,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    isProductSelected,
    inputTitleRef,
    newProduct,
    setNewProduct,
    setIsProductSelected,
  };

  return (
    <GlobalContext.Provider value={globalContextValue}>
      <OrderPageStyled>
        <NavBar userName={name} />
        <main className="main-container">
          <Basket />
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
    grid-template-columns: 350px 1fr;
    align-self: center;
  }
`;
