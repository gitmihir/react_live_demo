import React from "react";

const ModelList = (props) => {
  return (
    <div>
      {props.items.map((model, i) => {
        return (
          <div key={i}>
            <div>{model.Model_Name}</div>
          </div>
        );
      })}
    </div>
  );
};
export default ModelList;
