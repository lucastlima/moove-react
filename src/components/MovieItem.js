import React from "react";
import styled from "styled-components";

import Poster from "./Poster";
import moment from "moment";
import SvgRating from "./SvgRating";

const MovieItemStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: var(--shadowOne);
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.04);
  transition: all 0.3s ease-in;

  & .raing {
    width: 100%;
    margin: 1rem 0 0.5rem 0;
    height: 1.2rem;
  }

  &:hover > .overlay-info {
    display: flex;
    animation: fadeIn 0.2s ease-in;
  }

  & .overlay-info {
    position: absolute;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: 0;
    left: 0;
    width: calc(100% - 1rem);
    height: calc(100% - 3.7rem);
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.9);
    margin: 0.5rem;
    font-size: 1.6rem;
    text-align: center;

    h4 {
      font-weight: 500;
    }
  }
`;

function MovieItem({ movie, min }) {
  return (
    <MovieItemStyled>
      <Poster min={min} src={movie.poster_path} size="w500" alt={movie.title} />
      <div className="overlay-info">
        <h3>{movie.title || movie.name}</h3>
        <h4>{moment(movie.release_date).year()}</h4>
      </div>
      <div className="raing">
        <SvgRating rating={movie.vote_average} />
      </div>
    </MovieItemStyled>
  );
}

export default MovieItem;
