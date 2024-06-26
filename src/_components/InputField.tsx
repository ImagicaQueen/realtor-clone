import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface InputProps {
  type: "text" | "password" | "email";
  id: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<InputProps> = ({
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="relative mb-6">
      <input
        type={type === "password" ? (showPassword ? "password" : "text") : type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
      />
      {type === "password" && (
        <div
          className="absolute right-3 top-3 text-xl cursor-pointer"
          onClick={handleTogglePassword}
        >
          {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
        </div>
      )}
    </div>
  );
};

export default FormInput;
