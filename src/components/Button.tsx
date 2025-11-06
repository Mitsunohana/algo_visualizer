interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} style={buttonStyle}>
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

export default Button;
