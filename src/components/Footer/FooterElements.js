import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--bgFooter);
`;

export const FooterWrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 0 50px 0;
  display: flex;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterSocial = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    margin-top: 1.5rem;
    justify-content: space-between;
    width: 70%;
  }
`;

export const FooterSocialLink = styled.a`
  color: var(--white);
  font-size: 1.5rem;
  margin-right: 1.5rem;

  @media screen and (max-width: 425px) {
    margin-right: 0;
  }
`;

export const FooterContact = styled.div`
  width: 50%;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5rem;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    display: flex;
    align-items: center;
  }
`;

export const FooterCopy = styled.div`
  width: 100%;
  font-weight: 300;
  word-spacing: 0.2rem;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0 80px 0;

  @media screen and (max-width: 425px) {
    word-spacing: 0;
    letter-spacing: 0;
  }
`;
