import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "@mui/material/Container";

import "./App.css";
import { Topics } from "./pages/topics";
import { TopicRepos } from "./pages/topicsRepos";
import { Header } from "./header";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/topics/1" />} />
        <Route path="/topics/:page" component={Topics} />
        <Route path="/topic/:name" component={TopicRepos} />
      </Switch>
    </Fragment>
  );
}

export default App;
