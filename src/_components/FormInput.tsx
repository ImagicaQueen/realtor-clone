import React from "react";
import Link from "next/link";

interface FormInputProps {
  type: string;
  id: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
    />
  );
};

export default FormInput;
