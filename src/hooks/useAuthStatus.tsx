"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

export function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user === null) {
        setLoggedIn(false);
        console.log("-------f----------------", user);
      } else {
        setLoggedIn(true);
        console.log("---------t----------loggedIn", loggedIn);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { loggedIn, loading };
}
