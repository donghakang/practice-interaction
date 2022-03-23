/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Controller, Scene } from "react-scrollmagic";

function ComponentView() {
  return (
    <>
      <div
        css={css`
          background-color: lightgray;
          height: 80vh;
        `}
      ></div>
      <Controller>
        <Scene duration={1000} pin>
          <div
            css={css`
              background-color: greenyellow;
            `}
          >
            1
          </div>
        </Scene>
      </Controller>
      <Controller>
        <Scene duration={1000} pin>
          <div
            css={css`
              background-color: greenyellow;
            `}
          >
            2
          </div>
        </Scene>
      </Controller>
      <Controller>
        <Scene duration={1000} pin>
          <div
            css={css`
              background-color: greenyellow;
            `}
          >
            3
          </div>
        </Scene>
      </Controller>
      <Controller>
        <Scene duration={2000} pin triggerHook="onLeave">
          <div
            css={css`
              width: 100%;
              height: 100vh;
              background-color: dodgerblue;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <h1>Stay in Center !</h1>
          </div>
        </Scene>
      </Controller>

      <div
        css={css`
          background-color: lightgray;
          height: 80vh;
        `}
      ></div>
    </>
  );
}

export default ComponentView;
