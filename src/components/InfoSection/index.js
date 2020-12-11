import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  PerfilWrap,
  NameWrap,
  Column,
  InfoTitle,
  InfoName,
  InfoAlias,
  InfoText,
  PerfilImage,
} from "./InfoElements";
import marcc from "../../images/marcc.jpg";

const InfoSection = () => {
  return (
    <InfoContainer id="about">
      <InfoWrapper>
        <Column>
          <PerfilWrap>
            <NameWrap>
              <PerfilImage src={marcc} />
              <InfoName>
                <div>Marvin</div>
                <div>Carrasco</div>
                <div>Cruz</div>
              </InfoName>
              <InfoAlias>Marcc</InfoAlias>
            </NameWrap>
          </PerfilWrap>
        </Column>

        <Column>
          <InfoTitle>Acerca de mí</InfoTitle>
          <InfoText>
            Ingeniero de Sistemas, amante de la tecnología, de la buena música y
            del deporte. Con toda una vida profesional aun por recorrer,
            tendencia a la resolución de problemas, trabajo en equipo,
            pensamiento estratégico y enfocado. Preparado como Fullstack Web
            Developer con conocimientos en HTML5, CSS3, JavaScript, React,
            Redux, Git, Github, SQL, Ruby, Ruby on Rails y más... "El límite lo
            pones tu." ✌😉
          </InfoText>
          <InfoText>
            En la programación encontré una de mis pasiones, un espacio donde se
            puede ser creativo, un lugar donde las ideas fluyen y puedes
            desafiarte a ti mismo a mejorarlas. Como "Coder" el aprendizaje
            nunca se detiene, quiero asumir nuevos retos que me lleven a ser
            parte de la creación de soluciones tecnológicas que sean de ayuda
            para la sociedad.
          </InfoText>
        </Column>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
