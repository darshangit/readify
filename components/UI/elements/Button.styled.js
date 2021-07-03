import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 2px 30px;
  background: ${(props) =>
    props.type === "save"
      ? "#3bff3b"
      : props.type === "delete"
      ? "#ff9699"
      : "lightsalmon"};
  color: #5d5d6a;
  font-size: medium;
  font-weight: normal;
  border-radius: 5px;
  margin: 2px;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.type === "save"
        ? "#55e85b"
        : props.type === "delete"
        ? "#ff7575"
        : "salmon"};
  }
`;
