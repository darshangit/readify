import { StyledButton } from "./Button.styled";

const Button = (props) => {
  return (
    <StyledButton  onClick={props.onClickHandler} type={props.buttonType} active={props.active}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
