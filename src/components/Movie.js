import React from 'react';
import styled from 'styled-components';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SvgArrow from './SvgArrow';
import Poster from './Poster';
import history from '../utils/history';

const MovieStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    ${({ bg }) => `url(${bg})`};
  background-size: cover;
  background-position: center;

  .arrow-wrapper {
    svg:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-around;
    padding: 0 6rem;

    .content {
      display: flex;
    }

    .image-wrapper {
      width: 30rem;
    }
  }

  .m-title {
    font-size: 6rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  p {
    font-size: 1.6rem;
  }
`;

function Movie() {
  const movies = useSelector(({ movies }) => movies);
  const Dmovies = useSelector(({ discover }) => discover.movies);
  const { id } = useParams();
  const location = useLocation();
  console.log(location);

  const movie = movies.trending.find(m => m.id === +id);
  const Dmovie = Dmovies.find(m => m.id === +id);

  const data = movie || Dmovie;

  const url = 'https://image.tmdb.org/t/p/original';

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <MovieStyled bg={url + data.backdrop_path}>
      <div className="nav">
        <div onClick={handleGoBack} className="arrow-wrapper">
          <SvgArrow size={2} opacity={0.8} direction="left" />
        </div>
      </div>
      <div className="info">
        <div className="content">
          <div className="image-wrapper">
            <Poster src={data.poster_path} size="w500" alt={data.title} />
          </div>
          <div className="description">
            <h1 className="m-title">{data.title}</h1>
          </div>
        </div>
        <p>{data.overview}</p>
      </div>
    </MovieStyled>
  );
}

export default Movie;
