import React from "react";
import styled from "styled-components";

const Card = styled.a`
  background-color: var(--white);
  text-decoration: none;
  color: var(--black);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.02);
    transition: all 0.1s linear;
    cursor: pointer;
  }
`;

const ProjectImage = styled.img`
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  width: 80%;
`;

const ProjectTitle = styled.h2`
  font-size: 1.3rem;
  margin: 2rem auto 0.5rem auto;
`;

const ProjectP = styled.p`
  text-align: center;
  font-weight: 300;
  line-height: 1.3rem;
`;

const PortfolioCard = ({ id, image, title, description, url }) => {
  return (
    <Card href={url} target="_blank">
      <ProjectImage src={image} alt={title} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectP>{description}</ProjectP>
    </Card>
  );
};

export default PortfolioCard;
