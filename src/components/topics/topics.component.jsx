import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Topic from "../topic/topic.component";
import "./topics.styles.css";
const Topics = () => {
  const match = useRouteMatch();
  return (
    <div className="topics">
      <div className="side-nav">
        <h2>
          <Link className="text small" to={`${match.url}`}>
            Topics
          </Link>
        </h2>
        <ul>
          <li>
            <Link className="text smaller" to={`${match.url}/component`}>
              Topic
            </Link>
          </li>
        </ul>
      </div>

      <div className="main">
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3 className="text smaller"> Please Select a Topic</h3>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Topics;
