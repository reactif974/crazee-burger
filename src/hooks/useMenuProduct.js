import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array/array";

export const useMenuProduct = () => {
  const [menu, setMenu] = useState(fakeMenu.SMALL);

  const handleAdd = (productToAdd) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [productToAdd, ...menuCopy];
    setMenu(menuUpdated);
  };

  const handleDelete = (id) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = menuCopy.filter((menu) => menu.id !== id);
    setMenu(menuUpdated);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  return { menu, handleAdd, handleDelete, resetMenu };
};
