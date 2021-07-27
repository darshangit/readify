import styled from "styled-components";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import RightMenu from "./right-menu/RightMenu";

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: grid;

  grid-template-columns:
    [col-start] 6fr [col-2] minmax(300px, 1fr)
    [col-end];
  grid-template-rows: 0.2fr auto 0.2fr;

  grid-template-areas:
    "h h"
    "main ra"
    "f f";
  /* 
  @media only screen and (max-width: 900px) {
    display: grid;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "h"
      "main"
      "ra"
      "f";
  } */
`;

export const Layout = (props) => {
  return (
    <MainWrapper>
      <Header />
      <main>{props.children}</main>
      <RightMenu />
      <Footer />
    </MainWrapper>
  );
};

export default Layout;
