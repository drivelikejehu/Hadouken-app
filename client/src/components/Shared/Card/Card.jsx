import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({src, name, url, id}) => {

  return (
    <div className="card justify-content-center">
      <img className="card-img-top" src={src} alt={name} />
      <div className="card-body">
        <Link to={url} key={id}>
          {name}
        </Link>
      </div>
    </div>
  );
};

export default Card;