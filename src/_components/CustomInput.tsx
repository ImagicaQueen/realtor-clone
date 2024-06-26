import { CustomInputProps } from "@/app/create-listing/page";

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  value,
  onChange,
  type,
  placeholder,
  maxLength,
  minLength,
  required = false,
  className = "",
  min,
  max,
}) => {
  return (
    <input
      className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6 ${className}`}
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      minLength={minLength}
      required={required}
      min={min}
      max={max}
    />
  );
};
export default CustomInput;
