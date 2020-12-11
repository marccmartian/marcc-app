import styled from "styled-components";

export const InfoContainer = styled.section`
  width: 100%;
`;

export const InfoWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 40px 50px 40px;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 425px) {
    padding: 100px 20px 50px 20px;
  }
`;

export const Column = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const PerfilWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameWrap = styled.div`
  width: 305px;
  height: 305px;
  position: relative;

  @media screen and (max-width: 320px) {
    height: 330px;
  }
`;

export const PerfilImage = styled.img`
  width: 250px;
  border-radius: 50%;
  border: 8px solid white;
  box-shadow: 0px 0px 3px 0px #000000;
`;

export const InfoName = styled.h3`
  background-color: var(--purple);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  color: white;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 170px;
  left: 160px;
`;

export const InfoAlias = styled.h3`
  background-color: var(--yellow);
  width: 60px;
  height: 60px;
  font-size: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const InfoTitle = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  color: var(--green);
  margin-bottom: 2rem;

  @media screen and (max-width: 425px) {
    font-size: 1.5rem;
  }
`;

export const InfoText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.5rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 425px) {
    font-size: 1.2rem;
  }
`;
