/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
//styles
import './Filter.Styles.css';

function Filter({ onSetFilter }) {
  const [filter, setFilter] = useState({ name: '' });
  const refInput = useRef(null);

  const handleinputChange = (e) => {
    setFilter(e.target.value);
  };
  const handleQuery = (e) => {
    e.preventDefault();
    if (refInput.current.value === '') return;
    onSetFilter(filter);
  };
  const handleClear = () => {
    setFilter('');
    onSetFilter('');
    refInput.current.value = '';
  };

  return (
    <>
      <div className="filter-container">
        <h3>Filter by Name</h3>
        <form onSubmit={handleQuery}>
          <input
            ref={refInput}
            type="text"
            name="name"
            placeholder="Your Search Here"
            onChange={handleinputChange}
          />
          <button type="submit" className="filter-btn">
            Filter
          </button>
          <button className="filter-btn" onClick={handleClear}>
            Clear Filter
          </button>
        </form>
      </div>
    </>
  );
}

export default Filter;
