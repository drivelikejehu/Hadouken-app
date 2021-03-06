import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {

  return (
    <div className="card justify-content-center">
      <img className="card-img-top" src={props.src} alt={props.name} />
      <div className="card-body">
        <Link to={{
        pathname: props.url}}>
        <button className="btn btn-primary" onClick={props.onClick} name={props.name}>
          {props.name}
         </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;