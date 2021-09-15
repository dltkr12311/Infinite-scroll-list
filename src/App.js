import { Global } from "@emotion/react";

import { resets } from "./styles/reset";
import Comments from "pages/Comments/Comments";

function App() {
  return (
    <>
      <Global styles={resets} />
      <Comments />
    </>
  );
}

export default App;
