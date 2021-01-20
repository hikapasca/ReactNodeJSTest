import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import { Provider } from "react-redux";
import store from "./store/store";
import {
  ProtectedRouteBeforeLogin,
  ProtectedRouteAfterLogin,
} from "./routeProtection";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <ProtectedRouteBeforeLogin
              exact
              path="/register"
              component={Register}
            />
            <ProtectedRouteBeforeLogin exact path="/login" component={Login} />
            <ProtectedRouteAfterLogin exact path="/" component={Home} />
            <ProtectedRouteAfterLogin
              exact
              path="/detail/:id"
              component={Detail}
            />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
