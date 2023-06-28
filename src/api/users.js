import { doc, getDoc, setDoc } from "firebase/firestore";
import db from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (name) => {
  try {
    const docRefToRetrive = doc(db, "users", name);
    const docSnap = await getDoc(docRefToRetrive);

    if (docSnap.exists()) {
      console.log("Utilisateur existant");
      return docSnap.data();
    } else {
      console.log("Utilisateur inexistant");
      return null;
    }
  } catch (error) {
    console.log(
      "Une erreur s'est produite lors de la récupération de l'utilisateur:",
      error
    );
    return null;
  }
};

export const createUser = async (newName) => {
  const newUserId = crypto.randomUUID();
  const newUser = {
    id: newUserId,
    name: newName,
    products: fakeMenu.LARGE,
    isLoggedIn: false,
  };
  setDoc(doc(db, "users", newName), newUser);
};
