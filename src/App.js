import React from "react";
import "./App.css";
import HomePage from "../src/pages/homepage/homepage";
import { Route, Switch, Link } from "react-router-dom";
const Home = () => {
  return <div>asd</div>;
};
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
