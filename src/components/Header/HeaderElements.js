import styled from "styled-components";
import img from "../../images/header.jpg";

export const HeaderContainer = styled.header`
  margin-top: -80px;
  height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;

  :before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
  }
`;

export const HeaderWrapper = styled.div`
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    width: 80%;
  }
`;

export const HeaderContent = styled.div`
  z-index: 1;
`;

export const HeaderH1 = styled.h1`
  text-transform: uppercase;
  font-size: 75px;
  font-family: "Numans", sans-serif;
  word-spacing: 1rem;
  border-bottom: 1px solid #fff;
  margin-bottom: 1rem;
  z-index: 1;

  @media screen and (max-width: 768px) {
    font-size: 60px;
  }

  @media screen and (max-width: 425px) {
    font-size: 40px;
  }
`;
