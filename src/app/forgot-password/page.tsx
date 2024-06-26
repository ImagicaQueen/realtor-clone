"use client";
import Button from "@/_components/Button";
import InputField from "@/_components/InputField";
import OAuth from "@/_components/OAuth";
import OR from "@/_components/OR";
import { auth } from "@/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Could not send reset password");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={handleSubmit}>
            <InputField
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={handleChange}
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have a account?
                <Link
                  href="/sign-up"
                  className="text-red-600 hover:text-red-700 text:sm transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  href="/sign-in"
                  className="text-blue-600 hover:text-blue-800 text:sm transition duration-200 ease-in-out"
                >
                  Sign In instead
                </Link>
              </p>
            </div>
            {/* <Button
              text="Set Reset Password"
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            /> */}
            <Button variant="forgotPassword" type="submit" />

            <OR />

            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
