/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      css={css`
        background-color: white;
        z-index: 9;
        position: fixed;
        top: 0;
      `}
    >
      <ul>
        <li>
          <Link to="/">Basic</Link>
        </li>
        <li>
          <Link to="/basic2">Basic2</Link>
        </li>
        <li>
          <Link to="/tween">Tween</Link>
        </li>
        <li>
          <Link to="/text">Text</Link>
        </li>

        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="/component">Component</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
