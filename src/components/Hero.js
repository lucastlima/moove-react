import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 70vh;
  overflow: hidden;

  .movie-item {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
  .movie-overlay {
    display: flex;
    position: absolute;
    background: linear-gradient(to top, rgb(14, 19, 23) 0%, transparent 40%);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

function Hero({ movies }) {
  const [randomMovie, setRandomMovie] = useState({});
  console.log(randomMovie);

  useEffect(() => {
    const random = Math.floor(Math.random() * Math.floor(movies.length + 1));
    setRandomMovie(movies[random]);
  }, [movies]);

  return randomMovie ? (
    <StyledHero>
      <div className="movie-overlay">
        <h1>{randomMovie.title}</h1>
      </div>
      <div className="movie-item">
        <img
          src={
            'https://image.tmdb.org/t/p/original/' + randomMovie.backdrop_path
          }
          alt={randomMovie.title}
        />
      </div>
    </StyledHero>
  ) : null;
}

export default Hero;
