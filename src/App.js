import { Global } from "@emotion/react";

import reset from "./styles/reset";
import CommentList from "./components/CommentList";

function App() {
  return (
    <>
      <Global styles={reset} />
      <CommentList />
    </>
  );
}

export default App;
