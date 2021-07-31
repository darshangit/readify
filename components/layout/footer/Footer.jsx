import styled, { css } from "styled-components";

const FooterStyled = styled.footer`
  grid-area: f;
  align-self: center;
  justify-self: center;

  p {
    font-family: "Architects Daughter";
    font-style: italic;
    font-weight: bolder;
    padding-left: 10px;
    margin-top: -15px;
    color: #f8049c;
  }

  p:last-child {
    margin-left: 10px;
  }
`;

const Footer = (props) => {
  return (
    <FooterStyled>
      <p>© Dash</p>
      <p>2021</p>
    </FooterStyled>
  );
};

export default Footer;
