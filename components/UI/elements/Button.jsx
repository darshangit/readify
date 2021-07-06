import { StyledButton } from "./Button.styled";

const Button = (props) => {
  return (
    <StyledButton
      onClick={props.onClickHandler}
      buttonType={props.buttonType}
      active={props.active}
      type={props.type || "button"}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
