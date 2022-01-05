/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
//styles
import './Card.styles.css';

function Card({ image, name, id, status, location }) {
  return (
    <div className="card">
      <Link to={`/details/${id}`}>
        <img src={image} alt={`${name}`} />
        <p>
          <span>NAME: </span>
          {name}
        </p>
        <p>
          <span>STATUS: </span>
          {status}
        </p>
        <p>
          <span>LAST LOCATION: </span>
          {location}
        </p>
      </Link>
    </div>
  );
}

export default Card;
