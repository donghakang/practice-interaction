/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Controller, Scene } from "react-scrollmagic";

function Basic() {
  return (
    <>
      <div
        css={css`
          height: 100vh;
        `}
      ></div>
      <Controller>
        <Scene duration={600} pin={true} enabled={true}>
          <div
            css={css`
              padding: 30px;
              background-color: greenyellow;
            `}
          >
            <div>Pin Test</div>
          </div>
        </Scene>
        <Scene duration={200} pin={{ pushFollowers: false }}>
          <div
            css={css`
              padding: 30px;
              background-color: dodgerblue;
            `}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              dignissimos quos sed iure aut? At harum aspernatur quos blanditiis
              officiis vitae id ea quisquam porro ex, assumenda architecto
              provident tenetur!
            </div>
          </div>
        </Scene>
        <Scene duration={300} pin={true} offset={100}>
          <div
            css={css`
              padding: 30px;
              background-color: dodgerblue;
            `}
          >
            <div>Pin Test</div>
          </div>
        </Scene>
      </Controller>
      <div
        css={css`
          height: 100vh;
        `}
      ></div>
    </>
  );
}

export default Basic;
