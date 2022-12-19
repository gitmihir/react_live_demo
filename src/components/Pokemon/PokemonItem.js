import React from "react";

const PokemonItem = (props) => {
  return (
    <div>
      {props.items.map((p, i) => {
        return <div key={i}>{p}</div>;
      })}
    </div>
  );
};
export default PokemonItem;
