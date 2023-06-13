import { doc, getDoc } from "firebase/firestore";
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
