import BaseButton, { BaseButtonProps } from "components/BaseButton";

interface IProps extends BaseButtonProps {
  onClick?: () => void;
  text: string;
}

const Button = ({ onClick, text, variant = "primary" }: IProps) => {
  return (
    <BaseButton variant={variant}>
      <div onClick={onClick}>{text}</div>
    </BaseButton>
  );
};

export default Button;
