import "./style.scss";

export interface BaseButtonProps {
  variant?: "primary" | "secondary";
  children?: JSX.Element;
}

const BaseButton = ({ variant = "primary", children }: BaseButtonProps) => {
  return <div className={`BaseButton ${variant}`}>{children}</div>;
};

export default BaseButton;
