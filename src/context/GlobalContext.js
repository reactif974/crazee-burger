import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  isPannelCollapsed: false,
  panelTabIndex: "add",
  menu: [],
  isSubmitSuccess: false,
  isProductSelected: false,
  productSelected: {},
  setIsModeAdmin: () => {},
  setIsPannelCollapsed: () => {},
  setPanelTabIndex: () => {},
  setIsSubmitSuccess: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
  handleProductSelected: () => {},
});
