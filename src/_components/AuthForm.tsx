"use client";
import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import OAuth from "./OAuth";
import Link from "next/link";
import { AuthFormProps, AuthFromData } from "@/interfaces/authForm";
import OR from "./OR";

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  submitButtonText,
  isSignUp = false,
}) => {
  const [formData, setFormData] = useState<AuthFromData>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((pre: AuthFromData) => ({
      ...pre,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {isSignUp && (
        <InputField
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          value={formData.name || ""}
          onChange={handleChange}
        />
      )}
      <InputField
        type="email"
        id="email"
        name="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
      />

      <InputField
        id="password"
        name="password"
        type="password"
        value={formData.password}
        placeholder="Email password"
        onChange={handleChange}
      />
      <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
        {isSignUp ? (
          <p className="mb-6">
            Have an account?
            <Link
              href="/sign-in"
              className="text-red-600 hover:text-red-700 text:sm transition duration-200 ease-in-out ml-1"
            >
              Sign In
            </Link>
          </p>
        ) : (
          <p className="mb-6">
            Don't have an account?
            <Link
              href="/sign-up"
              className="text-red-600 hover:text-red-700 text:sm transition duration-200 ease-in-out ml-1"
            >
              Register
            </Link>
          </p>
        )}
        <p>
          <Link
            href="/forgot-password"
            className="text-blue-600 hover:text-blue-800 text:sm transition duration-200 ease-in-out"
          >
            Forgot password?
          </Link>
        </p>
      </div>

      {/* <Button
        text={submitButtonText}
        className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
      /> */}
      <Button variant={isSignUp ? "signUp" : "signIn"} type="submit" />
      <OR color="red" />
      <OAuth />
    </form>
  );
};

export default AuthForm;
