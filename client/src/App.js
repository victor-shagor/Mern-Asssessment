import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import OwnersPage from "./pages/ownersPage";

function App() {
  return (
    <div
      className="App"
      style={{
        overflowX: "hidden",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/carowner">
          <OwnersPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
