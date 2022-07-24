import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <>
      <Counter start={17} interval={600} />;
      <Counter start={-167} interval={200} />;
      <Counter start={167} interval={1000} />;
    </>
  );
};

export default App;
