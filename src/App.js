import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { init } from "./store/actions";
import Layout from "./components/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./containers/Movies";
import Media from "./components/Media";
import Discover from "./containers/Discover";
import Trending from "./containers/Trending";
import TvShows from "./containers/TvShows";

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
        <Route exact path="/movie/:id" component={Media} />
        <Route exact path="/tvshows" component={TvShows} />
        <Route exact path="/tv/:id" component={Media} />
        <Route exact path="/trending/:id" component={Media} />
        <Route exact path="/trending" component={Trending} />
        <Route exact path="/discover" component={Discover} />
        <Redirect to="/discover" />
      </Switch>
    </Layout>
  );
};

export default App;
