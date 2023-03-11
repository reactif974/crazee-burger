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
      index: "chevronUpDown",
      label: "",
      className: isPannelCollapsed
        ? "tabs tabs-one is-active-tab"
        : "tabs tabs-one",
      Icon: isPannelCollapsed ? <BsChevronUp /> : <BsChevronDown />,
      onClick: () => setIsPannelCollapsed(!isPannelCollapsed),
    },
    {
      index: "add",
      label: "Ajouter un produit",
      className:
        panelTabIndex === "add"
          ? "tabs tabs-two is-active-tab"
          : "tabs tabs-two",
      Icon: <AiOutlinePlus />,
      onClick: () => toggleTab("add"),
      content: "Ajouter un produit",
    },
    {
      index: "edit",
      label: "Modifier un produit",
      className:
        panelTabIndex === "edit"
          ? "tabs tabs-three is-active-tab"
          : "tabs tabs-three",
      Icon: <RiPencilFill />,
      onClick: () => toggleTab("edit"),
      content: "modifier un produit",
    },
  ];
};
