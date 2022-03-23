/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

function ListView() {
  return (
    <>
      <div
        css={css`
          background-color: lightyellow;
          height: 30vh;
        `}
      >
        List
      </div>
      <Controller>
        <Scene duration={1000} offset={0} pin={true}>
          {(progress: number) => (
            <Tween
              wrapper={
                <ul
                  css={css`
                    position: relative;
                  `}
                />
              }
              stagger={0.2}
              from={{ opacity: 0, rotationX: -90 }}
              to={{ opacity: 1, rotationX: 0 }}
              ease="elastic.out(0.2, 0.1)"
              totalProgress={progress}
              paused
            >
              <li>
                <h3>A</h3>
              </li>
              <li>
                <h3>B</h3>
              </li>
              <li>
                <h3>C</h3>
              </li>
              <li>
                <h3>D</h3>
              </li>
              <li>
                <h3>E</h3>
              </li>
              <li>
                <h3>F</h3>
              </li>
              <li>
                <h3>G</h3>
              </li>
              <li>
                <h3>H</h3>
              </li>
              <li>
                <h3>I</h3>
              </li>
              <li>
                <h3>J</h3>
              </li>
              <li>
                <h3>K</h3>
              </li>
            </Tween>
          )}
        </Scene>
      </Controller>
      <div
        css={css`
          background-color: lightyellow;
          height: 70vh;
        `}
      >
        List
      </div>
    </>
  );
}

export default ListView;
