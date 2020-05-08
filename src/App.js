import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
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
      <div  >
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
          {loggedIn && (
            <React.Fragment>
        

            </React.Fragment>
            
          )}
          <li>
            <NavLink exact activeClassName="active" to="/login">
              Login
            </NavLink>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <div className="content" >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/GeoInfo">

              <GeoInfo />
              
              
            </Route>
          
        
            <Route exact path="/login">
              {!loggedIn ? (
                <LogIn login={login} />
              ) : (
                <div>
                  <LoggedIn />
                  <button onClick={logout}>Logout</button>
                </div>
              )}
            </Route>
          </Switch>
        </div>
      </div>
      <div></div>
    </Router>
  );
}


function Home() {
  
  return (
    <div className="backgroundColorPink" >
      <div className="backgroundColorWhite" >
      <h2>Hello World</h2>
      <h3>Welcome to our Science application!</h3>
      
      </div>
      </div>
      )
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
        <input className="userNameInput" placeholder="User Name" id="username" />
        <input className="passwordInput" placeholder="Password" id="password" />
        <button className="loginButton" onClick={performLogin}>Login</button>
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
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
  );
}
