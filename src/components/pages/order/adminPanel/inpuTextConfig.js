import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
import {
  isAvailableOptions,
  isPublicisedOptions,
} from "../../../../enums/select";

export const getInputTextConfig = (product) => {
  return [
    {
      id: "0",
      Icon: <FaHamburger />,
      name: "title",
      value: product.title,
      placeholder: "Nom du produit (ex: Super Burger)",
      variant: "add",
      className: "title",
    },
    {
      id: "1",
      Icon: <BsFillCameraFill />,
      name: "imageSource",
      value: product.imageSource,
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      variant: "add",
      className: "image-source",
    },
    {
      id: "2",
      Icon: <MdOutlineEuro />,
      name: "price",
      value: product.price ? product.price : "",
      placeholder: "Prix",
      variant: "add",
      className: "price",
    },
  ];
};

export const getInputSelectConfig = (product) => {
  return [
    {
      id: "3",
      name: "isAvailable",
      value: product.isAvailable,
      options: isAvailableOptions,
      Icon: <FiPackage />,
      className: "is-available",
      variant: "add",
    },
    {
      id: "4",
      name: "isPublicised",
      value: product.isPublicised,
      options: isPublicisedOptions,
      Icon: <GoMegaphone />,
      className: "is-publicised",
      variant: "add",
    },
  ];
};
