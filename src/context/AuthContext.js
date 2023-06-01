import React, { createContext, useEffect, useState } from "react";
import firebase from "../firebase-config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Écoute les changements d'état de l'utilisateur
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Nettoyage au démontage du composant
    return () => unsubscribe();
  }, []);

  const signInAnonymously = async () => {
    try {
      await firebase.auth().signInAnonymously();
    } catch (error) {
      console.log(error);
    }
  };
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signInAnonymously,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
