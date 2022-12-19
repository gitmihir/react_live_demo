import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Make.module.css";
const Make = (props) => {
  const [visible, setVisible] = useState(10);
  const loadMoreData = () => {
    setVisible((prevValue) => prevValue + 10);
  };
  return (
    <div className={classes.make_parent}>
      {props.items.slice(0, visible).map((make, i) => {
        return (
          <div key={i}>
            <div className="justify-center">{make.MakeName}</div>
            <Link to={`/makelist/${make.MakeId}`}>View Models</Link>
          </div>
        );
      })}
      <button type="button" onClick={loadMoreData}>
        Load More
      </button>
    </div>
  );
};
export default Make;
