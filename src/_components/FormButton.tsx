import { FormButtonProps } from "@/interfaces/formButton";
import React from "react";

const FormButton: React.FC<FormButtonProps> = ({ text }) => {
  return (
    <button
      className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
      type="submit"
    >
      {text}
    </button>
  );
};

export default FormButton;
