import * as React from "react";

type nameProps = {
  name: { firstName: string; lastName: string }[];
};
function Names(props: nameProps) {
  return (
    <>
      <div>
        <h1>Names of superheros</h1>
        {props.name.map((name) => {
          return (
            <h2>
              {name.firstName} {name.lastName}
            </h2>
          );
        })}
      </div>
    </>
  );
}

export default Names;
