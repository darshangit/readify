import { StyledButton } from "./Button.styled";

const Button = (props) => {
  return <StyledButton type={props.buttonType}>{props.children}</StyledButton>;
};

export default Button;
