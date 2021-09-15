import { Global } from "@emotion/react";

import { reset } from "./style/reset";
import Comments from "pages/Comments/Comments";

function App() {
  return (
    <>
      <Global styles={reset} />
      <Comments />
    </>
  );
}

export default App;
