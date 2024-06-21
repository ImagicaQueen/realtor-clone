// "use client";

// import { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/firebase";

// export function useAuthStatus() {
//   const [loggedIn, setLoggedIn] = useState(false);
// const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       console.log("-------users----------------", user);
//       if (user) {
//         setLoggedIn(false);
//         console.log("---------t---------loggedIn", loggedIn);
//       } else {
//         setLoggedIn(true);
//         console.log("---------f----------loggedIn", loggedIn);
//       }
//     });

//     return unsubscribe;
//   }, []);
// setLoading(false);
//   return { loggedIn,loading };
// }

// useAuthStatus.js
"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

export function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // New state for loading

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("-------user----------------", user);
      if (user === null) {
        setLoggedIn(false);
        console.log("-------f----------------", user);
      } else {
        setLoggedIn(true);
        console.log("---------t----------loggedIn", loggedIn);
      }
      setLoading(false); // Update loading state when authentication check is complete
    });

    return unsubscribe;
  }, []);

  return { loggedIn, loading }; // Return loading state along with loggedIn
}
