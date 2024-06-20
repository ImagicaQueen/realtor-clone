"use client";
import AuthForm from "@/_components/AuthForm";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc, serverTimestamp, FieldValue } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  timestamp?: string | FieldValue;
}

const SignUp = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (formData: SignUpFormData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: formData.name,
      });

      // Destructure formData to remove password
      const { password, ...formDataCopy } = formData;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      router.push("/");
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Something went wrong with the registration");
    }
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <AuthForm
            initialFormData={formData}
            onSubmit={handleSubmit}
            submitButtonText="Sign Up"
            isSignUp
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
