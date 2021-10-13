import { Link, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
// import UsersPage from "./components/Users/users.component";
import HomePage from "./components/home/home.component";
import AboutPage from "./components/About/about.component";
import Header from "./components/header/header.component";
import ProfilePage from "./components/profile/profile.component";
import Topics from "./components/topics/topics.component";
import PageNotFound from "./components/404/404.component";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <Header login={login} setLogin={setLogin} />
      <Switch>
        <Route path="/" exact component={HomePage} />

        <Route path="/about" component={AboutPage} />
        <Route path="/profile-page">
          {login ? <ProfilePage /> : <Redirect to="/" />}
        </Route>
        <Route path="/topics" component={Topics} />

        <Route component={PageNotFound} />
      </Switch>

      {/* <div className="nav-bar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch> */}
    </div>
  );
}

export default App;
