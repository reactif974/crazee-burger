import { AiOutlinePlus } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";

export const getTabsConfig = (isPannelCollapsed, panelTabIndex) => {
  return [
    {
      index: 1,
      label: "Ajouter un produit",
      className:
        panelTabIndex === 1 ? "tabs tabs-two is-active-tab" : "tabs tabs-two",
      Icon: <AiOutlinePlus />,
    },
    {
      index: 2,
      label: "Modifier un produit",
      className:
        panelTabIndex === 2
          ? "tabs tabs-three is-active-tab"
          : "tabs tabs-three",
      Icon: <RiPencilFill />,
    },
  ];
};
