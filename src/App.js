import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { init, setPrevPath } from './store/actions';
import Layout from './components/Layout';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import Movies from './containers/Movies';
import Media from './components/Media';
import Trending from './containers/Trending';
import TvShows from './containers/TvShows';

// import * as Vibrant from 'node-vibrant';

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  useEffect(() => {
    const updatePastLocations = e => {
      const getPrevPath = e.pathname.split('/');
      if (getPrevPath.length === 2) {
        dispatch(setPrevPath(e.pathname));
      }
    };
    const unlisten = history.listen(updatePastLocations);
    return () => unlisten();
  }, [history, dispatch]);

  return (
    <Layout>
      <Switch>
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movie/:id" component={Media} />
        <Route exact path="/tvshows" component={TvShows} />
        <Route exact path="/tv/:id" component={Media} />
        <Route exact path="/trending/:id" component={Media} />
        <Route exact path="/trending" component={Trending} />
        <Redirect to="/trending" />
      </Switch>
    </Layout>
  );
};

export default App;
