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
      <Names name={names} />
    </>
  );
}

export default App;
