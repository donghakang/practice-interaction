/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";

function Basic2() {
  return (
    <Controller>
      <Scene duration={2000} pin>
        <div
          css={css`
            padding: 30px;
            background-color: greenyellow;
          `}
        >
          <div>Pin Test</div>
        </div>
      </Scene>
      <Scene triggerHook="onLeave" duration={3000} pin>
        {(progress: any) => (
          <div
            css={css`
              background-color: aliceblue;
              height: 100vh;
              width: 100%; ;
            `}
          >
            <Timeline totalProgress={progress} paused>
              <Tween
                from={{ x: "10%", top: "60%" }}
                to={{ x: "60%", top: "10%" }}
              >
                <div
                  css={css`
                    width: 100%;
                    height: 100%;
                    position: absolute;
                  `}
                >
                  <div
                    css={css`
                      background-color: greenyellow;
                      width: 60px;
                      height: 60px;
                      border-radius: 8px;
                    `}
                  ></div>
                </div>
              </Tween>
              <Timeline
                target={
                  <div
                    css={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                    `}
                  >
                    <h2>This is a cool heading</h2>
                  </div>
                }
              >
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                <Tween to={{ x: "50%" }} />
              </Timeline>
            </Timeline>
          </div>
        )}
      </Scene>
    </Controller>
  );
}

export default Basic2;
