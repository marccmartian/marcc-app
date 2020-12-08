import styled from "styled-components";
import bassist from "../../images/bassist.jpg";

export const MusicianContainer = styled.section`
  padding: 80px 0;
  background-color: var(--yellow);

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const MusicianWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px;
  background-image: url(${bassist});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  @media screen and (max-width: 425px) {
    padding: 10px;
  }
`;

export const MusicianContent = styled.div`
  width: 50%;
  border-radius: 10px;
  color: var(--white);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;

  @media screen and (max-width: 768px) {
    margin-top: 80px;
    margin-bottom: 50px;
    width: 65%;
  }

  @media screen and (max-width: 425px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const MusicianTitle = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const MusicianP = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.5rem;
  margin-bottom: 3rem;
`;
