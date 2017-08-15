import React from "react";
import { Route, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import "./app.less";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Route
          exact
          path="/"
          render={props =>
            <LazyRoute {...props} component={import("@/components/count")} />}
        />
      </div>
    );
  }
}
