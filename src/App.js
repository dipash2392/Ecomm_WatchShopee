import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import ProductDetails from "./Component/ProductDetails/ProductDetails"
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route key="productDetails"
          exact
          path="/productDetails/:id" component={ProductDetails}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
