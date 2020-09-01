import React from "react";
import Main from "./Components/Main";
import AddUser from "./Components/AddUser";
import UpdateUser from "./Components/UpdateUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/add" component={AddUser} exact />
          <Route path="/update" component={UpdateUser} exact />
        </Switch>
      </div>
    </Router>
  );
}
