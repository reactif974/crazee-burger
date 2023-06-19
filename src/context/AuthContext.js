import React, { createContext } from "react";
import db from "../api/firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const signUp = async (username) => {
    try {
      const userRef = doc(db, "users", username);
      await updateDoc(userRef, { isLoggedIn: true });
      navigate(`/order/${username}`);
    } catch (error) {
      console.log("L'utilisateur n'existe pas");
    }
  };

  const signOut = async (username) => {
    try {
      const userRef = doc(db, "users", username);
      await updateDoc(userRef, { isLoggedIn: false });
      console.log("Utilisateur déconnecté avec succès");
    } catch (error) {
      console.log(
        "Une erreur s'est produite lors de la déconnexion de l'utilisateur:",
        error
      );
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
