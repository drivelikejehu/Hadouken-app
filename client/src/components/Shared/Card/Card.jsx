import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";


const Card = ({pic, name, url}) => {

  return (
    <div className="card justify-content-center">
      <img className="card-img-top" src={pic} alt={name} />
      <div className="card-body">
        <Link to={url} name={name}>
          {name}
        </Link>
      </div>
    </div>
  );
};

export default Card;