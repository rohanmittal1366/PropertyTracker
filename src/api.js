import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
  } from "react-router-dom";

  export default function App() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }