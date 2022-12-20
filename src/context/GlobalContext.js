import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  isPanelReduce: false,
  panelTabIndex: 2,
  updateIsModeAdmin: () => {},
  setIsPanelReduce: () => {},
  setPanelTabIndex: () => {},
});
