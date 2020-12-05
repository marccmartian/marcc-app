import React from "react";
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderContent,
  HeaderH1,
} from "./HeaderElements";
import TextSlider from "./TextSlider";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderContent>
          <HeaderH1>Marvin Carrasco</HeaderH1>
          <TextSlider />
        </HeaderContent>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
