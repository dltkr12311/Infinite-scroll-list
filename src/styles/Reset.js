import { css } from "@emotion/react";

const reset = css`
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

export default reset;
