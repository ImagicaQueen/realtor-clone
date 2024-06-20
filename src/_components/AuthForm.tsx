"use client";
import React, { useState } from "react";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import OAuth from "./OAuth";
import PasswordInput from "./PasswordInput";
import Link from "next/link";
import { AuthFormProps } from "@/interfaces/authForm";

interface FormData {
  name?: string;
  email: string;
  password: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  initialFormData,
  onSubmit,
  submitButtonText,
  isSignUp = false,
}) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((pre: FormData) => ({
      ...pre,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {isSignUp && (
        <FormInput
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          value={formData.name || ""}
          onChange={handleChange}
        />
      )}
      <FormInput
        type="email"
        id="email"
        name="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
      />
      <PasswordInput
        id="password"
        name="password"
        value={formData.password}
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

      <FormButton text={submitButtonText} />
      <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
        <p className="text-center font-semibold mx-4">OR</p>
      </div>
      <OAuth />
    </form>
  );
};

export default AuthForm;
