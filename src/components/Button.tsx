interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  activeSort?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  activeSort,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={label === activeSort ? activeButtonStyle : buttonStyle}
    >
      {label}
    </button>
  );
};

const buttonStyle: React.CSSProperties = {
  height: "40px",
  width: "160px",
  fontSize: "12px",
  padding: "5px 10px",
  margin: "5px",
  cursor: "pointer",
};

const activeButtonStyle: React.CSSProperties = {
  backgroundColor: "#f0eee9",
  color: "#3c3f41",
  height: "40px",
  width: "160px",
  fontSize: "12px",
  padding: "5px 10px",
  margin: "5px",
  cursor: "pointer",
};

export default Button;
