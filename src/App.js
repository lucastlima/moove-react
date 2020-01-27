import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { init } from './store/actions';
import Layout from './components/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import Movies from './containers/Movies';
import Movie from './components/Movie';
import Discover from './containers/Discover';

// import * as Vibrant from 'node-vibrant';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return (
    <Layout>
      <Switch>
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movie/:id" component={Movie} />
        <Route exact path="/discover" component={Discover} />
        <Redirect to="/discover" />
      </Switch>
    </Layout>
  );
};

export default App;
