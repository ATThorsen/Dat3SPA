const URL = "http://localhost:8080/dat3";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  /* Insert utility-methods from a latter step (d) here (REMEMBER to uncomment in the returned object when you do)*/
  const setToken = token => {
    localStorage.setItem("jwtToken", token);
  };
  
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };
  const setUserName = username =>{
    localStorage.setItem("username", username);
  }
  const getUserName = () => {
    return localStorage.getItem("username");
  };
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };
  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const register = (user,password) =>{
    const options = makeOptions("POST", false,{
      username: user,
      password: password,
    });
    return fetch(URL + "/api/register", options)
    .then(handleHttpErrors)
    
  }

  
  const saveSearch = (user, search) => {
    const options = makeOptions("POST", false, {
      username: user,
      search_string: search,
    });
    return fetch(URL + "/api/search", options)
      .then(handleHttpErrors)
  };

  

  const login = (user, password) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password
    });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then(res => {
        setToken(res.token);
        setUserName(user);
      });
  };
  const fetchData = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
  };
  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };
  
  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    register,
    fetchData,
    setUserName,
    getUserName,
    saveSearch
  };
}
const facade = apiFacade();
export default facade;
