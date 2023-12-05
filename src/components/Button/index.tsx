import "./style.scss";

interface IProps {
  linkTo: string;
  text: string;
  variant?: "primary" | "secondary";
}

const Button = ({ linkTo, text, variant = "primary" }: IProps) => {
  return (
    <div className={`Button ${variant}`}>
      <a href={linkTo}>{text}</a>
    </div>
  );
};

export default Button;
