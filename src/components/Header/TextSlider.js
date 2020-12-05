import React from "react";
import styled from "styled-components";

const SliderTextContainer = styled.div`
  color: white;
  font-size: 1.3rem;
  font-style: italic;
  height: 40px;
  overflow: hidden;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
`;

const SliderWrapper = styled.div`
  animation: slide 6s ease-in-out alternate infinite;
`;

const SliderText = styled.div`
  height: 40px;
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  border-radius: 0.3rem;
`;

const TextSlider = () => {
  return (
    <SliderTextContainer>
      <SliderWrapper>
        <SliderText style={{ background: "var(--lightblue)", color: "black" }}>
          #developer
        </SliderText>
        <SliderText style={{ background: "var(--yellow)" }}>
          #musician
        </SliderText>
        <SliderText style={{ background: "var(--green)" }}>#coder</SliderText>
        <SliderText style={{ background: "var(--purple)" }}>#bass</SliderText>
        <SliderText style={{ background: "var(--red)" }}>#software</SliderText>
      </SliderWrapper>
    </SliderTextContainer>
  );
};

export default TextSlider;
