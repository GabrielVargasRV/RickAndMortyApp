import React from "react";
import { Link } from "react-router-dom";

const Character = (props) => {
  return (
    <div>
      <Link to={`/${props.id}`} >
        <img src={props.image} alt="" />
        <p>{props.name}</p>
      </Link>
    </div>
  );
};
export default Character;
