import React from "react";
import {
  PortfolioContainer,
  PortfolioWrap,
  PortTitle,
  PortfolioList,
} from "./PortfolioElements";
import PortfolioCard from "./PortfolioCard";
import { objProjects } from "../../data/objProjects";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioWrap>
        <PortTitle>Portafolio</PortTitle>
        <PortfolioList>
          {objProjects.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))}
        </PortfolioList>
      </PortfolioWrap>
    </PortfolioContainer>
  );
};

export default Portfolio;
