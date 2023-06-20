import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array/array";
import { addProductToDb, updateProduct } from "../api/products";

export const useMenuProduct = (name) => {
  const [menu, setMenu] = useState(fakeMenu.EMPTY);

  const handleAdd = (productToAdd) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [productToAdd, ...menuCopy];
    setMenu(menuUpdated);
    // update de la db firestore
    addProductToDb(name, productToAdd);
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
    const newMenu = fakeMenu.LARGE;
    setMenu(newMenu);
    updateProduct(name, newMenu);
  };

  return { menu, setMenu, handleAdd, handleDelete, resetMenu, handleEdit };
};
