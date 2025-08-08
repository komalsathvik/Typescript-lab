import { useState } from "react";
import Names from "./Names";
function App() {
  const names = [
    {
      firstName: "tony",
      lastName: "stark",
    },
    {
      firstName: "peter",
      lastName: "parker",
    },
  ];
  return (
    <>
      <h1>TypeScript lab</h1>
      <Names name={names} />
    </>
  );
}

export default App;
