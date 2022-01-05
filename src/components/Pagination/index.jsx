/* eslint-disable react/prop-types */
import React from 'react';
//styles
import './Pagination.styles.css';

function Pagination({ onPrev, onNext, prev, next }) {
  const handlePrev = () => {
    onPrev();
  };
  const handleNext = () => {
    onNext();
  };
  return (
    <div className="pagination">
      {prev === undefined || null ? (
        <button disabled={true}>Previous</button>
      ) : (
        <button onClick={handlePrev}>Previous</button>
      )}
      {next === undefined || null ? (
        <button disabled={true}>Next</button>
      ) : (
        <button onClick={handleNext}>Next</button>
      )}
    </div>
  );
}

export default Pagination;
