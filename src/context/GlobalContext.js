import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  isPannelCollapsed: false,
  panelTabIndex: "add",
  menus: [],
  isSubmitSuccess: false,
  setIsModeAdmin: () => {},
  setIsPannelCollapsed: () => {},
  setPanelTabIndex: () => {},
  setMenus: () => {},
  setIsSubmitSuccess: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
});
