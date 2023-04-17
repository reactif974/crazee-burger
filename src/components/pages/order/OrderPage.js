import { useParams } from "react-router-dom";
import NavBar from "../reusable-ui/NavBar";
import styled from "styled-components";
import { theme } from "../../../theme";
import logoOrange from "../../../assets/logo-orange.png";
import Menu from "./main/Menu";
import { useRef, useState } from "react";
import GlobalContext from "../../../context/GlobalContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { deepClone } from "../../../utils/array/array";

export default function OrderPage() {
  const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
  };

  const { name } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [panelTabIndex, setPanelTabIndex] = useState("add");
  const [isPannelCollapsed, setIsPannelCollapsed] = useState(false);
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const [isProductSelected, setIsProductSelected] = useState(false);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const inputTitleRef = useRef();

  const handleAdd = (productToAdd) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [productToAdd, ...menuCopy];
    setMenu(menuUpdated);
  };

  const handleDelete = (id) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = menuCopy.filter((menu) => menu.id !== id);
    setMenu(menuUpdated);
    if (isProductSelected) {
      setIsProductSelected(false);
    }
  };

  const onDelete = (event, id) => {
    event.stopPropagation();
    handleDelete(id);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  const handleProductSelected = async (id) => {
    const menuCopy = deepClone(menu);
    const productSelected = menuCopy.find((product) => product.id === id);
    await setProductSelected(productSelected);
    await setPanelTabIndex("edit");
    await setIsProductSelected(true);
    inputTitleRef.current?.focus();
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
    onDelete,
    resetMenu,
    handleProductSelected,
    productSelected,
    setProductSelected,
    isProductSelected,
    inputTitleRef,
    EMPTY_PRODUCT,
    newProduct,
    setNewProduct,
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
