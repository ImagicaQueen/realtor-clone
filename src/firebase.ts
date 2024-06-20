import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVRygudZgq5XC5BKYlSeNmR9QP3OIjxfM",
  authDomain: "realtor-clone-next-3de18.firebaseapp.com",
  projectId: "realtor-clone-next-3de18",
  storageBucket: "realtor-clone-next-3de18.appspot.com",
  messagingSenderId: "794547469375",
  appId: "1:794547469375:web:84782034b1b5808982cc8a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
