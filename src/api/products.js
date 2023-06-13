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
  const currentUser = users && users[0] ? users[0].name : null;
  try {
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
