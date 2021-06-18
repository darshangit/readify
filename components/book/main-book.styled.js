import styled from "styled-components";

export const Card = styled.div`
  width: 140px;
  height: 140px;
  float: left;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  background-color: transparent;
  cursor: pointer;
  text-overflow: ellipsis;
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`;

export const CardTop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  backface-visibility: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 6px 4px 15px 1px #585856;
`;

export const CardBody = styled(CardTop)`
  transform: rotateY(180deg);
  box-shadow: 0 10px 16px -6px #585856;

  border-radius: 20px;
  display: grid;
  grid-template:
    "pc pc pc"
    "ath ath ath"
    "b1 b2 b3";
  place-items: center;
`;

export const CardTitle = styled.p`
  height: 15px;
  overflow: hidden;
  white-space: nowrap;
  color: black;
  text-align: center;
  font-size: small;
  font-weight: 600;
  text-overflow: ellipsis;
`;

export const PageCount = styled.div`
  color: darkgray;
  font-weight: bolder;
  font-size: x-small;
  grid-area: pc;
`;

export const AuthorTitle = styled.div`
  font-weight: bold;
  font-size: small;
  text-decoration: underline;
  color: #348cb5;
`;

export const AuthorNames = styled.div`
  padding: 20px;
  height: 25px;
  font-size: small;
  font-style: oblique;
  color: dimgrey;
  font-weight: 600;
  overflow: scroll;
  text-overflow: ellipsis;
  grid-area: ath;
`;

export const MainAuthor = styled.p`
  margin: 0;
`;