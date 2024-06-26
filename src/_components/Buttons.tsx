import { CustomButtonProps } from "@/interfaces/create-listing";

const Buttons: React.FC<CustomButtonProps> = ({
  id,
  value,
  onClick,
  isActive,
  children,
  className,
  type,
  text,
}) => {
  return (
    <button
      type="button"
      id={id}
      value={value}
      onClick={onClick}
      className={className}
      // className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
      //   isActive ? "bg-white text-black" : "bg-slate-600 text-white"
      // } ${className}`}
    >
      {text} {children}
    </button>
  );
};
export default Buttons;
