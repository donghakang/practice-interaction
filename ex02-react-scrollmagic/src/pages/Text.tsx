import React from "react";
import styled from "@emotion/styled";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, SplitChars, SplitWords } from "react-gsap";

const SplitTextStyled = styled.div`
  overflow: hidden;
  text-align: center;

  .section {
    background-color: salmon;
    height: 100vh;
  }
  .textContainer {
    position: relative;
    display: inline-block;
    transform-origin: center;
  }
  .text,
  .text2 {
    position: relative;
    font-size: 80px;
    font-weight: bold;
    display: inline-block;
  }
`;

const Text = () => (
  <SplitTextStyled>
    <div className="section" />
    <Controller>
      <Scene pin={false} reverse={true} duration={1000}>
        <Tween
          wrapper={<div className="textContainer" />}
          to={{ y: "200px" }}
          stagger={0.2}
          ease="elastic.out(0.2, 0.1)"
        >
          <SplitChars
            wrapper={
              <h2 className="wrapper" style={{ display: "inline-block" }} />
            }
          >
            AIIIIGGGHTTTT
          </SplitChars>
        </Tween>
      </Scene>
      <div className="section" />
    </Controller>
    <div className="section" />
  </SplitTextStyled>
);

export default Text;
