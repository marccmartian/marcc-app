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
          <MusicianTitle>The Musician</MusicianTitle>
          <MusicianP>
            También soy un amante de la música; y más que un pasa tiempo,
            también es una de mis pasiones. Aprendí empíricamente música hace ya
            hace varios años atrás, y ahora me encanta tocar este gran
            instrumento que es el bajo eléctrico. Soy musico aficionado, pero
            trato de dar lo mejor no solo en ello, sino en todo lo que hago.
          </MusicianP>
        </MusicianContent>
      </MusicianWrapper>
    </MusicianContainer>
  );
};

export default MusicianSection;
