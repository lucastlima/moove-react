import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SvgArrow from './SvgArrow';
import SvgStars from './SvgStars';

const CarrouselStyle = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-height: 50vh;
  background: rgba(255, 255, 255, 0.04);

  .wrapper {
    display: flex;
    flex: 1;
    transform: ${({ counter }) => `translate(-${counter}00%)`};
    transition: transform 0.3s;
    transition-timing-function: cubic-bezier(0.41, 0.49, 0.58, 0.99);
  }

  .movie-item {
    display: flex;
    position: relative;
    min-width: 100%;
    background: linear-gradient(
      to right,
      rgb(14, 19, 23) 10%,
      transparent 40%,
      transparent 60%,
      rgb(14, 19, 23) 90%
    );

    & .movie-info {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      padding: 2rem;
      justify-content: flex-end;

      & .counter {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: flex-end;
        h2 {
          font-weight: 200;
          letter-spacing: 0.2rem;
        }
      }
      & .rating {
        display: flex;
        align-items: center;
        span {
          font-size: 1.2rem;
          padding-top: 2px;
          font-weight: bold;
        }
      }
      h1 {
        font-size: 2.5rem;
      }
    }
    & img {
      z-index: -1;
      object-position: center top;
      object-fit: cover;
      width: 80%;
      margin: 0 auto;
      height: auto;
    }
  }
  .arrow {
    display: flex;
    z-index: 2;
    position: absolute;
    width: 5rem;
    height: 100%;
    justify-content: center;
    align-items: center;
    top: 0;
  }
  .left {
    left: 0;
  }

  .right {
    right: 0;
  }
`;

function Carrousel() {
  const movies = useSelector(({ movieDB }) => movieDB.movies.trending);
  const [count, setCount] = useState(0);
  const url = 'https://image.tmdb.org/t/p/original';

  const handleLeft = () => {
    if (count > 0) setCount(prev => prev - 1);
  };
  const handleRight = () => {
    if (count < movies.length - 1) setCount(prev => prev + 1);
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 37 && count > 0) setCount(prev => prev - 1);
      if (e.keyCode === 39 && count < movies.length - 1)
        setCount(prev => prev + 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [count, movies]);

  console.log(movies);

  return (
    <CarrouselStyle counter={count}>
      <div onClick={handleRight} className="arrow right">
        <SvgArrow />
      </div>
      <div onClick={handleLeft} className="arrow left">
        <SvgArrow direction="left" />
      </div>
      <div className="wrapper">
        {movies.map((movie, i) => (
          <div key={movie.id} className="movie-item">
            <div className="movie-info">
              <div className="counter">
                <h2>{`${String(i + 1).padStart(2, '0')}/${movies.length}`}</h2>
              </div>
              <h1>{movie.title}</h1>
              <div className="rating">
                <span>{movie.vote_average}</span>
                <SvgStars id={movie.id} rating={movie.vote_average} />
              </div>
            </div>
            <img src={`${url}${movie.backdrop_path}`} alt={movie.title} />
          </div>
        ))}
      </div>
    </CarrouselStyle>
  );
}

export default Carrousel;
