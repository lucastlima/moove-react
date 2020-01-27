import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MovieItemStyled = styled.div`
  border-radius: 0.5rem;
  box-shadow: var(--shadowOne);
  transition: all 0.3s ease-in;
  margin: 1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }

  &:hover > .movie-info {
    min-height: 5rem;
  }

  & .movie-info {
    display: flex;
    padding: 0.5rem;
    min-height: 2rem;
    justify-content: center;
    transition: all 0.3s ease-in;

    h4 {
      font-size: 1.2rem;
      width: 90%;
      text-align: center;
    }
  }

  & .movie-img {
    display: flex;
    & img {
      width: 100%;
      max-width: 300px;
      min-width: 180px;
      height: 100%;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
`;

function MovieItem({ movie }) {
  const imgPath = 'https://image.tmdb.org/t/p/w500';

  return (
    <StyledNavLink
      key={movie.id}
      to={`/movie/${movie.id}`}
      location={{ key: movie.id }}
    >
      <MovieItemStyled>
        <div className="movie-img">
          <img src={imgPath + movie.poster_path} alt={movie.title} />
        </div>
        <div className="movie-info">
          <h4>{movie.title}</h4>
        </div>
      </MovieItemStyled>
    </StyledNavLink>
  );
}

export default MovieItem;
