import styled from "styled-components";

export const AsideCard = styled.div`
  display: grid;
  padding: 5px;
  grid-template-columns: [col-start] 1fr [col-2] 2fr [col-3] 1fr [col-end];
  grid-auto-rows: 70px;
  grid-template-areas: "image details extra";
  gap: 10px;
  cursor: pointer;
`;

export const Image = styled.img``;

export const MiddlePortion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span:nth-child(1) {
    font-weight: bold;
    color: #348cb5;
  }

  span:nth-child(2) {
    font-style: oblique;
    color: dimgrey;
    font-weight: 600;
  }
`;

export const SpanElement = styled.span`
  height: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: small;
`;

export const RightElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: smaller;
  font-weight: bolder;
  color: salmon;
`;
