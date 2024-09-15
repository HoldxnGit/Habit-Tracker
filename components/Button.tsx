import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "dark" | "light";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "light" }: Props) => {
  return (
    <button className={"btn btn-" + color + " btn-lg"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
