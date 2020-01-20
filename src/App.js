import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrending, setFromLocal } from './store/actions';
import Layout from './UI/Layout';
import Carrousel from './UI/Carrousel';
import styled from 'styled-components';
import moment from 'moment';
// import * as Vibrant from 'node-vibrant';

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: var(--whiteColor);

  & #movies {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    grid-gap: 1rem;
    padding: 2rem;
  }
`;

const MovieItem = styled.div`
  padding: 1rem 1rem 6rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 0.5rem;
  box-shadow: var(--shadowOne);
  & .movie-img {
    display: flex;
    & img {
      width: 100%;
      height: 100%;
    }
  }
`;

const App = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const loading = useSelector(({ movieDB }) => movieDB.loading);
  const movieDB = useSelector(state => state.movieDB);

  useEffect(() => {
    if ('movieDB' in localStorage) {
      const local = JSON.parse(localStorage.getItem('movieDB'));
      console.log('Current timestamp: ', local.movieDB.timestamp);
      console.log(
        'Timestamp expired: ',
        local.movieDB.timestamp < moment().valueOf()
      );
      local.movieDB.timestamp < moment().valueOf()
        ? dispatch(fetchTrending())
        : dispatch(setFromLocal(local.movieDB));
    } else {
      dispatch(fetchTrending());
    }
  }, [dispatch]);

  const imgPath = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    // const getColor = await Vibrant.from(
    //   imgPath + movie.poster_path
    // ).getPalette();
    // const color = getColor.LightVibrant.rgb.join(',');
    const movies = movieDB.movies.trending.map(movie => (
      <MovieItem key={movie.id}>
        <div className="movie-img">
          <img src={imgPath + movie.poster_path} alt={movie.title} />
        </div>
        <h3>{movie.title}</h3>
      </MovieItem>
    ));
    setMovies(movies);
  }, [movieDB]);

  return loading ? (
    <Layout>
      <AppStyle>
        <h1>Loading...</h1>
      </AppStyle>
    </Layout>
  ) : (
    <Layout>
      <AppStyle>
        <Carrousel movies={movies} />
        <div id="movies">{movies}</div>
      </AppStyle>
    </Layout>
  );
};

export default App;
