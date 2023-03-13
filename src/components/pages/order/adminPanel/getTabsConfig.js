import { AiOutlinePlus } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const getTabsConfig = (isPannelCollapsed, panelTabIndex) => {
  return [
    {
      index: "chevronUpDown",
      label: "",
      className: isPannelCollapsed
        ? "tabs tabs-one is-active-tab"
        : "tabs tabs-one",
      Icon: isPannelCollapsed ? <BsChevronUp /> : <BsChevronDown />,
    },
    {
      index: "add",
      label: "Ajouter un produit",
      className:
        panelTabIndex === "add"
          ? "tabs tabs-two is-active-tab"
          : "tabs tabs-two",
      Icon: <AiOutlinePlus />,
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
      content: "modifier un produit",
    },
  ];
};
