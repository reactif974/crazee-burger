import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array/array";

export const useMenuProduct = () => {
  const [menu, setMenu] = useState([]);

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

  const handleEdit = (productBeingEdited) => {
    // 1. copie du state (deep clone)
    const menuCopy = deepClone(menu);

    // 2. manip de la copie du state
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    );
    menuCopy[indexOfProductToEdit] = productBeingEdited;

    // 3. update du state
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  return { menu, setMenu, handleAdd, handleDelete, resetMenu, handleEdit };
};
