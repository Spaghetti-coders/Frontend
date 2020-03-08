import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import Main from "./Dahsboard/Main";
import Login from "./Auth/Login";
import Header from "./Layout/Header";
import Review from "./Layout/Review";
import Lol from "./Layout/Lol";
import "./App.css";
import Create from "./CreateSurvey/Create";

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={innerProps =>
        localStorage.getItem("Token") ? (
          <Component {...innerProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
class App extends Component {
  render() {
    return (
      <Suspense fallback="loading">
        <BrowserRouter>
          <Header />
          <Switch>
            <PrivateRoute path="/dashboard/" component={Main} />
            {/* <PrivateRoute path="/dashboard/" component={Main} /> */}
            <Route exact path="/" component={Login} />
            <Route path="/survey/" component={Review} />
            <Route path="/lol/" component={Lol} />
            <PrivateRoute path="/CreateSurvey/" component={Create} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
