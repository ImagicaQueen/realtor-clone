import { CustomTextareaProps } from "@/interfaces/formInput";
import React from "react";

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  id,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
    />
  );
};

export default CustomTextarea;
