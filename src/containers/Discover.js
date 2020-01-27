import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import MovieItem from '../components/MovieItem';

const DiscoverStyled = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem;

  .navigation {
    display: flex;
    width: 100%;
    height: 4rem;
  }

  .view {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
`;

function Discover() {
  const discover = useSelector(state => state.discover);

  // discover.movies.forEach(el => console.log(el));

  return (
    <DiscoverStyled>
      <div className="navigation">Search</div>
      <div className="view">
        {discover.movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </DiscoverStyled>
  );
}

export default Discover;
