import { css } from "@emotion/react";

export const resets = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  em {
    font-style: normal;
  }
  li {
    list-style: none;
  }

  body {
    touch-action: none;
  }
`;
