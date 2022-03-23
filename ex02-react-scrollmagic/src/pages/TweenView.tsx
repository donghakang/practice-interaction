/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

function TweenView() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <h1>Tween</h1>
      <div
        css={css`
          height: 80vh;
        `}
      ></div>
      <div id="trigger"></div>
      <Controller>
        {/* triggerElement는 trigger의 위치에서 시작 된다. */}
        <Scene triggerElement="#trigger" duration={1000}>
          {(progress: number) => (
            <Tween
              to={{ rotation: -360 }}
              ease="Strong.easeOut"
              totalProgress={progress}
              paused
            >
              <div
                css={css`
                  background-color: salmon;
                  width: 80px;
                  height: 80px;
                  border-radius: 10px;
                `}
              ></div>
            </Tween>
          )}
        </Scene>
        <Scene triggerElement="#trigger" duration={600} pin={false}>
          {(progress: number) => (
            <Tween
              from={{
                css: {
                  left: "0px",
                  rotation: -360,
                  width: "200px",
                  height: "200px",
                },
                ease: "Strong.easeOut",
              }}
              to={{
                css: {
                  left: "100px",
                  rotation: -180,
                  width: "50px",
                  height: "50px",
                },
                ease: "Strong.easeOut",
              }}
              totalProgress={progress}
              paused
            >
              <div
                css={css`
                  background-color: skyblue;
                  width: 80px;
                  height: 80px;
                  border-radius: 10px;
                `}
              ></div>
            </Tween>
          )}
        </Scene>
        <Scene triggerElement="#trigger" duration={500}>
          {(progress: number) => (
            <div>
              <Tween
                from={{ css: { x: "700px" } }}
                to={{ css: { x: "0px", rotation: 360 } }}
                stagger={0.15}
                totalProgress={progress}
                paused
              >
                <div
                  css={css`
                    background-color: greenyellow;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    left: 700px;
                    position: ;
                  `}
                />
                <div
                  css={css`
                    background-color: greenyellow;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    left: 700px;
                    position: ;
                  `}
                />
                <div
                  css={css`
                    background-color: greenyellow;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    left: 700px;
                    position: ;
                  `}
                />
                <div
                  css={css`
                    background-color: greenyellow;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    left: 700px;
                    position: ;
                  `}
                />
                <div
                  css={css`
                    background-color: greenyellow;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    left: 700px;
                    position: ;
                  `}
                />
              </Tween>
            </div>
          )}
        </Scene>
      </Controller>
      <div
        css={css`
          height: 100vh;
        `}
      ></div>
    </div>
  );
}

export default TweenView;
