import { useParams } from 'react-router-dom';
import { initUrl } from '../../services/fetchData';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//components
import Footer from '../../components/Footer';
//styles
import './Details.styles.css';

function Details() {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${initUrl}/${id}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="details-page">
        <div className="details-container">
          <Link to={'/'}>Back</Link>
          <div className="details">
            <img src={details?.image} alt={`${details?.name}`} />
            <div className="details-text">
              <h1>{details?.name}</h1>
              <p>
                <strong>Species: </strong>
                <br />
                {details?.species}
              </p>
              <p>
                <strong>Gender: </strong>
                <br />
                {details?.gender}
              </p>
              <p>
                <strong>Status: </strong>
                <br />
                {details?.status}
              </p>
              <p>
                <strong>Last location: </strong>
                <br />
                {details?.location?.name}
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Details;
