import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={onClick}
      className="bg-gradient-to-b from-orange to-yellow hover:from-yellow hover:to-orange text-white py-2 px-6 rounded cursor-pointer"
    >
      {children}
    </div>
  );
};

export default Button;
