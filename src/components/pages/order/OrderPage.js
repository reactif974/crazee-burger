import { useParams } from "react-router-dom";
import NavBar from "../reusable-ui/NavBar";
import styled from "styled-components";
import logoOrange from "../../../assets/logo-orange.png";
import Menu from "./main/Menu";
import { useContext, useEffect, useRef, useState } from "react";
import GlobalContext from "../../../context/GlobalContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import Basket from "./basket/Basket";
import { useBasketProduct } from "../../../hooks/useBasketProduct";
import { useMenuProduct } from "../../../hooks/useMenuProduct";
import { deepClone, findInArray } from "../../../utils/array/array";
import { getMenuProducts } from "../../../api/products";

export default function OrderPage() {
  const { name } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [panelTabIndex, setPanelTabIndex] = useState("edit");
  const [isPannelCollapsed, setIsPannelCollapsed] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const [isProductSelected, setIsProductSelected] = useState(false);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const inputTitleRef = useRef();

  // gestionnaire de state - state handlers

  const { menu, setMenu, handleAdd, handleDelete, resetMenu, handleEdit } =
    useMenuProduct();

  const { basket, handleBasketProduct, handleDeleteBasketProduct } =
    useBasketProduct();

  useEffect(() => {
    const fetchMenuProducts = async () => {
      try {
        setIsLoading(true);
        const menuProductsFromDb = await getMenuProducts(name);
        setMenu(menuProductsFromDb);
        setIsLoading(false);
      } catch (error) {
        console.log(
          "Erreur lors de la récupération des produits du menu :",
          error
        );
        setIsLoading(false);
      }
    };
    fetchMenuProducts();
  }, [name]);

  const handleProductSelected = async (id) => {
    if (!isModeAdmin) return;
    const menuCopy = deepClone(menu);
    const productSelected = findInArray(id, menuCopy);
    await setProductSelected(productSelected);
    setPanelTabIndex("edit");
    setIsPannelCollapsed(false);
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
    setMenu,
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
    basket,
    handleBasketProduct,
    handleDeleteBasketProduct,
    handleEdit,
    handleProductSelected,
    errors,
    setErrors,
    name,
  };

  return (
    <GlobalContext.Provider value={globalContextValue}>
      <OrderPageStyled>
        <NavBar userName={name} />
        <main className="main-container">
          <Basket />
          <Menu isLoading={isLoading} />
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
  background: url(${logoOrange}), rgba(255, 158, 28, 0.8);
  background-size: 70px;
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
