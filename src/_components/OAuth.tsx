import { auth, db } from "@/firebase";
import { useRouter } from "next/navigation";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const OAuth = () => {
  const router = useRouter();

  const onGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("=======================user", user);

      const docRef = doc(db, "users", user.uid);

      //docRef takes three thainf db name , collection name ,id
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
      }
      router.push("/");
    } catch (error) {
      toast.error("Something went wrong with google auth");
    }
  };

  return (
    <button
      onClick={onGoogleClick}
      type="button"
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
    >
      <FaGoogle className="text-xl rounded-full mr-2" />
      Continue with Google
    </button>
  );
};

export default OAuth;
