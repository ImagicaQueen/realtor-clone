import { PasswordInputProps } from "@/interfaces/passwordinput";
import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  name,
  placeholder,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="relative mb-6">
      <input
        type={showPassword ? "password" : "text"}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
      />
      <div
        className="absolute right-3 top-3 text-xl cursor-pointer"
        onClick={handleTogglePassword}
      >
        {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
      </div>
    </div>
  );
};

export default PasswordInput;
