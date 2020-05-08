import React, { useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
  
} from "react-router-dom";

import "./style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";
import GeoInfo from "./GeoInfo";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
 


  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    

  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/GeoInfo">
              GeoInfo
            </NavLink>
          </li>
          {loggedIn && <React.Fragment></React.Fragment>}
          {/* If user is logged in, it should show a profile and a logout button instead */}
          {loggedIn ? (
            <li>
              <NavLink exact activeClassName="active" to="/profile">
                Profile
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink exact activeClassName="active" to="/login">
                Login
              </NavLink>
            </li>
          )}
          {loggedIn ? (
            <li>
              <NavLink
                onClick={logout}
                exact
                activeClassName="active"
                to="/"
              >
                Logout
              </NavLink>
            </li>
          ) : (
            <li></li>
          )}

          {/* If user is logged in, don't show the register component */}
          {!loggedIn ? (
            <li>
              <NavLink exact activeClassName="active" to="/register">
                Register
              </NavLink>
            </li>
          ) : (
            <div></div>
          )}
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/GeoInfo">
              <GeoInfo />
            </Route>
            )}
            {!loggedIn ? (
              <Route exact path="/login">
                <LogIn login={login} />
                
              </Route>
            ) : (
              <Route exact path="/profile">
                <LoggedIn />
              </Route>
            )}
            {!loggedIn ? (
              <Route path="/register">
                <Register />
              </Route>
            ) : (
              <Route exact path="/logout">
                
              </Route>
            )}
          </Switch>
        </div>
      </div>
      <div></div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <div className="container">
        <h2>Hello World</h2>
        <h3>Welcome to our Science application!</h3>
      </div>
    </div>
  );
}

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
    
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange}>
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
  );
}
function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...");

  useEffect(() => {
    facade.fetchData().then((data) => setDataFromServer(data.msg));
  }, []);

  return (
    <div>
      <h2>Welcome to your profile page</h2>
      <h3>{dataFromServer}</h3>
    </div>
  );
}
function Register() {
  const init = { username: "", password: "" };
  const [registerCredentials, setRegisterCredentials] = useState(init);

  const performRegister = (evt) => {
    evt.preventDefault();
    facade.register(registerCredentials.username, registerCredentials.password);
  };
  const onChange = (evt) => {
    setRegisterCredentials({
      ...registerCredentials,
      [evt.target.id]: evt.target.value,
    });
  };
  return (
    <div>
      <h2>Register</h2>
      <form onChange={onChange}>
        <input placeholder="Username" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performRegister}>Register</button>
      </form>
    </div>
  );
}
