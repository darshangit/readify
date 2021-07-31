import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-image: linear-gradient(to right, #f8049c, #fdd54f);
  grid-area: h;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  border-bottom: 1px lightgray;
  box-shadow: inset 0 0px 16px -6px lightsalmon;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 20px;

  font-family: "Kaushan Script";

  p {
    padding-left: 60px;
    cursor: pointer;
  }

  > :nth-child(2) {
    justify-self: end;
    padding-right: 60px;
    cursor: pointer;
  }
`;

const Header = (props) => {
  return (
    <HeaderWrapper>
      <p>Readify</p>
      <FontAwesomeIcon icon={faUserCircle} size="2x" title="Account" />
    </HeaderWrapper>
  );
};

export default Header;
