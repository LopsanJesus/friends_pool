import { NavLink } from "react-router-dom";

import BaseButton, { BaseButtonProps } from "components/BaseButton";

interface IProps extends BaseButtonProps {
  linkTo: string;
  text: string;
}

const LinkButton = ({ linkTo, text, variant = "primary" }: IProps) => {
  return (
    <BaseButton variant={variant}>
      <NavLink to={linkTo}>{text}</NavLink>
    </BaseButton>
  );
};

export default LinkButton;
