import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  height: 30px;
  width: 30px;
  color: black;
  background-color: white;
  border-radius: 50%;
  border: 1px solid #f8049c;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotate} 1s linear infinite;
`;

export { Spinner };
