import { FC } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

const Button: FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        {label}
      </button>
    </div>
  );
};

export default Button;
