import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  isPannelCollapsed: false,
  panelTabIndex: "add",
  menu: [],
  isSubmitSuccess: false,
  isProductSelected: false,
  productSelected: {},
  inputTitleRef: {},
  EMPTY_PRODUCT: {},
  newProduct: {},
  setIsModeAdmin: () => {},
  setIsPannelCollapsed: () => {},
  setPanelTabIndex: () => {},
  setIsSubmitSuccess: () => {},
  setNewProduct: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
  handleProductSelected: () => {},
});
