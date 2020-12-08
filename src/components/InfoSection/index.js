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
    <InfoContainer>
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
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </InfoText>
          <InfoText>
            Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia
            cras porttitor condimentum orci suscipit. Leo maecenas in tristique,
            himenaeos elementum placerat. Taciti rutrum nostra, eget cursus
            velit ultricies. Quam molestie tellus himenaeos cubilia congue
            vivamus ultricies. Interdum praesent ut penatibus fames eros ad
            consectetur sed.
          </InfoText>
        </Column>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
