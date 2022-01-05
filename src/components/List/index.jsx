import React, { useState, useEffect } from 'react';
import { fetchAPI } from '../../services/fetchData';
import { useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
//components
import Card from '../Card';
import Pagination from '../Pagination';
import Filter from '../Filter';
//assets
import logo from '../../images/Rick-And-Morty-PNG-File2.png';
import notfound from '../../images/notfound.png';
//styles
import './List.styles.css';

export default function List() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');

  const queryClient = useQueryClient();
  const { isError, data } = useQuery(['listData', page, filter], () => fetchAPI(page, filter), {
    keepPreviousData: true,
    staleTime: 5000
  });

  let characters = data?.results;
  let info = data?.info;

  useEffect(() => {
    if (localStorage.getItem('filter') !== filter) {
      setPage(1);
      localStorage.setItem('filter', filter);
    }
    if (data?.hasMore) {
      queryClient.prefetchQuery(['listData', page + 1], () => fetchAPI(page + 1));
    }
  }, [data, page, queryClient]);

  const handleBackFromError = () => {
    return setFilter('');
  };

  if (isError) {
    return (
      <div className="error-page">
        <img className="page-title" src={logo} alt="rick and morty logo image" />
        <Link to={'/'} onClick={handleBackFromError}>
          Back
        </Link>
        <img className="error-image" src={notfound} alt="notfound-image" />
        There was an Error!!( Your search is invalid )
      </div>
    );
  }
  return (
    <>
      <div className="title-container">
        <img className="page-title" src={logo} alt="rick and morty logo image" />
      </div>
      <div className="filter-pagination-list-container">
        <div className="filter-pagination-container">
          <Filter onSetFilter={setFilter} />
          <Pagination
            prev={info?.prev}
            next={info?.next}
            onPrev={() => {
              if (page === 1) {
                return setPage(page);
              } else setPage(page - 1);
            }}
            onNext={() => {
              if (info.next === null) {
                return setPage(page);
              } else setPage(page + 1);
            }}
          />
        </div>

        <div className="list-container">
          {characters
            ? characters.map((char) => {
                return (
                  <Card
                    page={page}
                    filter={filter}
                    key={char.id}
                    id={char.id}
                    image={char.image}
                    name={char.name}
                    status={char.status}
                    location={char.location.name}
                  />
                );
              })
            : null}
        </div>
        <Pagination
          prev={info?.prev}
          next={info?.next}
          onPrev={() => {
            if (page === 1) {
              return setPage(page);
            } else setPage(page - 1);
          }}
          onNext={() => {
            if (info.next === null) {
              return setPage(page);
            } else setPage(page + 1);
          }}
        />
      </div>
    </>
  );
}
