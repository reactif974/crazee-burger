import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "./firebase-config";

export const getProductsMenu = async (users) => {
  const currentUser = users && users[0] ? users[0].name : null;

  if (currentUser) {
    const productsMenuRef = doc(db, "users", currentUser);
    const productsMenuSnapshot = await getDoc(productsMenuRef);

    if (productsMenuSnapshot.exists()) {
      return productsMenuSnapshot.data().products;
    } else {
      console.log("Pas de document disponible !");
      return null;
    }
  }
};

export const deleteProductFromUser = async (users, productId) => {
  try {
    const currentUser = users && users[0] ? users[0].name : null;
    const userRef = doc(db, "users", currentUser);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      const products = userDoc.data().products;
      const updatedProducts = products.filter(
        (product) => product.id !== productId
      );
      await updateDoc(userRef, { products: updatedProducts });
      console.log("Produit supprimé avec succès !");
    }
  } catch (error) {
    console.log("Erreur lors de la suppression du produit :", error);
  }
};

export const updateProduct = async (users, newMenu) => {
  try {
    const currentUser = users && users[0] ? users[0].name : null;
    const userRef = doc(db, "users", currentUser);
    await updateDoc(userRef, { products: newMenu });
    console.log("Produit mis à jour avec succès !");
  } catch (error) {
    console.log("Erreur lors de la mise à jour du produit :", error);
  }
};

export const addProductToDb = async (users, newProduct) => {
  try {
    const currentUser = users && users[0] ? users[0].name : null;
    const userRef = doc(db, "users", currentUser);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      const products = userDoc.data().products;
      const productsUpdated = [newProduct, ...products];
      await updateDoc(userRef, { products: productsUpdated });
    }
    console.log("Produit ajouté avec succès !");
  } catch (error) {
    console.log("Erreur lors de l'ajout du produit :", error);
  }
};
