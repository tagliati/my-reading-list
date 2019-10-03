import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Reading from "./pages/Reading";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/reading/:id" component={Reading} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
