import React from "react";
import {
  MusicianContainer,
  MusicianWrapper,
  MusicianTitle,
  MusicianP,
  MusicianContent,
} from "./MusicianElements";

const MusicianSection = () => {
  return (
    <MusicianContainer>
      <MusicianWrapper>
        <MusicianContent>
          <MusicianTitle>Bassist</MusicianTitle>
          <MusicianP>
            Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia
            cras porttitor condimentum orci suscipit. Leo maecenas in tristique,
            himenaeos elementum placerat. Taciti rutrum nostra, eget cursus
            velit ultricies. Quam molestie tellus himenaeos cubilia congue
            vivamus ultricies. Interdum praesent ut penatibus fames eros ad
            consectetur sed.
          </MusicianP>
        </MusicianContent>
      </MusicianWrapper>
    </MusicianContainer>
  );
};

export default MusicianSection;
