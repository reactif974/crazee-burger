import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  isPannelCollapsed: false,
  panelTabIndex: "add",
  menu: [],
  basket: [],
  isSubmitSuccess: false,
  isProductSelected: false,
  productSelected: {},
  inputTitleRef: {},
  newProduct: {},
  setIsModeAdmin: () => {},
  setIsPannelCollapsed: () => {},
  setPanelTabIndex: () => {},
  setIsSubmitSuccess: () => {},
  setNewProduct: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
  handleProductSelected: () => {},
  handleDeleteBasketProduct: () => {},
});
