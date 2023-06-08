import React, { createContext, useEffect, useState } from "react";
//import firebase from "../firebase-config";
import db from "../api/firebase-config";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (querySnapshot) => {
      const updatedUsers = [];
      querySnapshot.forEach((doc) => {
        const user = doc.data();
        if (user.isLoggedIn) updatedUsers.push(user);
      });
      setUsers(updatedUsers);
    });

    return () => unsubscribe();
  }, []);

  const signOut = async (userName) => {
    try {
      const userRef = doc(db, "users", userName);
      await updateDoc(userRef, { isLoggedIn: false });
      const updatedUsers = users.filter((user) => user.name !== userName);
      setUsers(updatedUsers);
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
        users,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
