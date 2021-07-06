import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 2px 30px;
  background: ${(props) => getBackgroundColor(props)};
  color: #5d5d6a;
  font-size: medium;
  font-weight: normal;
  border-radius: 5px;
  margin: 2px;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.buttonType === "save"
        ? "#55e85b"
        : props.buttonType === "delete"
        ? "#ff7575"
        : "salmon"};
  }
`;
function getBackgroundColor(props) {
  let color = "";
  if (props.buttonType === "save") {
    color = "#3bff3b";
  } else if (props.buttonType === "delete") {
    color = "#ff0000b8";
  } else if (props.active) {
    color = "lightsalmon";
  }

  return color;
}
