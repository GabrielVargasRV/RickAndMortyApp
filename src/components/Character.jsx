import React from "react";
import { Link } from "react-router-dom";
import "./style/Character.css"
const Character = (props) => {
  return (
    <div className="Character" >
      <Link className="link" to={`/${props.id}`} >
        <img src={props.image} alt="" />
        <p>{props.name}</p>
      </Link>
    </div>
  );
};
export default Character;
