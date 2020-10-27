import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Navigation from "./Navigation";
import Products from "./Products";
import Profile from "./Profile";
import RegisterFunction from "./RegisterFunction";
import Table from "./Table";

const loggContext = createContext();

export default function Main() {
  const [users, setUsers] = useState([
    { name: "Jane", mail: "jane@example.com", date: "1.1.2000", pwd: "pwd" },
    {
      name: "Fahim",
      mail: "best.teacher@gmail.com",
      date: "1985",
      pwd: "fahim",
    },
    { name: "Ola", mail: "caaaats@catmom.com", date: "1986", pwd: "cat3" },
  ]);
  const [isLogged, setIsLogged] = useState(false);
  return (
    <loggContext.Provider value={isLogged}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/users">
            <Table users={users} />
          </Route>
          <Route path="/register">
            <RegisterFunction users={users} setUsers={setUsers} />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/log-in">
            <Login setIsLogged={setIsLogged} users={users} />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </Router>
    </loggContext.Provider>
  );
}
