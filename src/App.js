import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Dahsboard/Main";
import Login from "./Auth/Login";
import Header from "./Layout/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Suspense fallback="loading">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/dashboard/" component={Main} />
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
