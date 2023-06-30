import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "./firebase-config";

export const getMenuProducts = async (user) => {
  const productsMenuRef = doc(db, "users", user);
  const productsMenuSnapshot = await getDoc(productsMenuRef);

  if (productsMenuSnapshot.exists()) {
    return productsMenuSnapshot.data().products;
  } else {
    console.log("Pas de document disponible !");
  }
};

export const addProductToDb = async (user, newProduct) => {
  try {
    const userRef = doc(db, "users", user);
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

export const deleteProductFromUser = async (user, productId) => {
  try {
    const userRef = doc(db, "users", user);
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

export const updateProduct = async (user, newMenu) => {
  try {
    const userRef = doc(db, "users", user);
    await updateDoc(userRef, { products: newMenu });
    console.log("Produit mis à jour avec succès !");
  } catch (error) {
    console.log("Erreur lors de la mise à jour du produit :", error);
  }
};