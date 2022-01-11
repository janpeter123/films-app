import "./App.css";
import Home from "./Home";
import Detalhes from "./Components/Detalhes";
import DetalhesSeries from "./Components/DetalhesSeries";
import ErrorPage from "./Components/ErrorPage";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:id" component={Detalhes} />
            <Route path="/details_tv_show/:id" component={DetalhesSeries} />
            <Route component={ErrorPage} />
         </Switch>
    </BrowserRouter>
  );
}

export default App;
