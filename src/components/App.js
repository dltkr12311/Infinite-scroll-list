import { Global } from "@emotion/react";

import reset from "../styles/Reset";
import CommentList from "./CommentList";

function App() {
  return (
    <>
      <Global styles={reset} />
      <CommentList />
    </>
  );
}

export default App;
