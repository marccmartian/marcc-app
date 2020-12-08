import styled from "styled-components";

export const PortfolioContainer = styled.section`
  background-color: var(--lightblue);
  padding-bottom: 50px;
`;

export const PortTitle = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  margin-top: 100px;
  margin-bottom: 3rem;
  text-align: center;
`;

export const PortfolioWrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
`;

export const PortfolioList = styled.div`
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 80px;
  }

  @media screen and (max-width: 425px) {
    padding: 0 10px;
  }
`;
