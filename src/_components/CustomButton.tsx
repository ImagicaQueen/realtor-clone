// _components/CustomButton.tsx

import React from 'react';
import { CustomButtonProps } from '../interfaces/create-listing';

const CustomButton: React.FC<CustomButtonProps> = ({
  id,
  value,
  onClick,
  isActive,
  children,
}) => {
  return (
    <button
      type="button"
      id={id}
      value={value}
      onClick={onClick}
      className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
        isActive ? 'bg-white text-black' : 'bg-slate-600 text-white'
      }`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
