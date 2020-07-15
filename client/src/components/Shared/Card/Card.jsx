import React from "react";
import "./Card.css";
import { Link} from "react-router-dom";


const Card = (props) => {

  return (
    <div className="card justify-content-center">
      <img className="card-img-top" src={props.src} alt={props.title} />
      <div className="card-body">
        <Link to={props.url} charname={props.charname}>
        <button className="btn btn-primary" onClick={props.onClick} charname={props.charname}>
          {props.charname}
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;