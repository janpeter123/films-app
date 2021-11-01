import "./App.css";
import Home from "./Home";
import Detalhes from "./Components/Detalhes";
import ErrorPage from "./Components/ErrorPage";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detalhes/:id" component={Detalhes} />
            <Route component={ErrorPage} />
         </Switch>
    </BrowserRouter>
  );
}

export default App;
