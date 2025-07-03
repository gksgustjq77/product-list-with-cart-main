import React from "react";

interface PrimaryButtonProps {
  title: string;
  disabled?: boolean;
  onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-3 py-3 w-full rounded-[20px] border-none text-white bg-[hsl(14,86%,42%)] hover:bg-[hsl(14,86%,37%)] focus:outline-none transition-colors"
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
