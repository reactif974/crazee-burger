import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  isPannelCollapsed: false,
  panelTabIndex: "add",
  setIsModeAdmin: () => {},
  setIsPannelCollapsed: () => {},
  setPanelTabIndex: () => {},
});
