import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 2px 30px;
  background-image: ${(props) => getBackgroundColor(props)};
  color: #5d5d6a;
  font-size: medium;
  font-weight: normal;
  border-radius: 5px;
  margin: 2px;
  font-family: 'Architects Daughter';
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.buttonType === "save"
        ? "#55e85b"
        : props.buttonType === "delete"
        ? "#ff7575"
        : "linear-gradient(to left,  #f8049c, #f8049c)"};
  }
`;
function getBackgroundColor(props) {
  let color = "";
  if (props.buttonType === "save") {
    color = "linear-gradient(to right, #11998e, #38ef7d);";
  } else if (props.buttonType === "delete") {
    color = "linear-gradient(to right, #FF416C, #FF4B2B);";
  } else if (props.active) {
    color = "linear-gradient(to right, #f8049c, #fdd54f);";
  }

  return color;
}
