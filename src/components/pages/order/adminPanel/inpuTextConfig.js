import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputTextConfig = (product) => {
  return [
    {
      id: "0",
      Icon: <FaHamburger />,
      name: "title",
      value: product.title,
      placeholder: "Nom du produit (ex: Super Burger)",
      variant: "add",
    },
    {
      id: "1",
      Icon: <BsFillCameraFill />,
      name: "imageSource",
      value: product.imageSource,
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      variant: "add",
    },
    {
      id: "2",
      Icon: <MdOutlineEuro />,
      name: "price",
      value: product.price ? product.price : "",
      placeholder: "Prix",
      variant: "add",
    },
  ];
};
