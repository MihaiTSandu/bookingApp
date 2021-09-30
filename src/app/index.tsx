import Login from "app/pages/auth/Login";
import Register from "app/pages/auth/Register";
import Home from "app/pages/booking/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
