import { AiOutlinePlus } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const getTabsConfig = (
  isPannelCollapsed,
  panelTabIndex,
  toggleTab,
  setIsPannelCollapsed
) => {
  return [
    {
      index: 0,
      label: "",
      className: isPannelCollapsed
        ? "tabs tabs-one is-active-tab"
        : "tabs tabs-one",
      Icon: isPannelCollapsed ? <BsChevronUp /> : <BsChevronDown />,
      onClick: () => setIsPannelCollapsed(!isPannelCollapsed),
    },
    {
      index: 1,
      label: "Ajouter un produit",
      className:
        panelTabIndex === 1 ? "tabs tabs-two is-active-tab" : "tabs tabs-two",
      Icon: <AiOutlinePlus />,
      onClick: () => toggleTab(1),
      content: "Ajouter un produit",
    },
    {
      index: 2,
      label: "Modifier un produit",
      className:
        panelTabIndex === 2
          ? "tabs tabs-three is-active-tab"
          : "tabs tabs-three",
      Icon: <RiPencilFill />,
      onClick: () => toggleTab(2),
      content: "modifier un produit",
    },
  ];
};
