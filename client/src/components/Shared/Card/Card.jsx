import React from "react";
import "./Card.css";
import { Link, useLocation } from "react-router-dom";

const Card = (props) => {

  const location = useLocation()

  return (
    <div className="card justify-content-center">
      <img className="card-img-top" src={props.src} alt={props.title} />
      <div className="card-body">
        {/* <h5 className="card-title">{props.title}</h5> */}
        {/* <p className="card-text">{props.desc}</p> */}
        {/* <Link to={props.url} className={location.pathname === props.url ? "nav-link active" : "nav-link"}> */}
        <Link to={props.url} charName={props.charName}>
        <button className="btn btn-primary" onClick={props.onClick} charName={props.charName}>
          {props.charName}
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;