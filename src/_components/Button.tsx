import React from "react";
import buttonConfig from "../util/buttonConfig";

interface ButtonProps {
  id?: string;
  value?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant: keyof typeof buttonConfig;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  id,
  value,
  onClick,
  isActive = false,
  className = "",
  type = "button",
  variant,
  children,
}) => {
  const config = buttonConfig[variant];

  const combinedClassName = `${config.className} ${className}`;

  return (
    <button
      type={type}
      id={id}
      value={value}
      onClick={onClick}
      className={combinedClassName}
    >
      {config.text} {children}
    </button>
  );
};

export default Button;
