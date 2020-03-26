import React from "react";
import "./App.css";
import HomePage from "../src/pages/homepage/homepage";
import { Route, Switch, Link } from "react-router-dom";
import ShopPage from "./pages/shop/shop-component";
import Header from "./components/header-component/header";
const Home = () => {
  return <div>asd</div>;
};
function App() {
  return (
    <div>
      <Route path="/" component={Header}></Route>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
