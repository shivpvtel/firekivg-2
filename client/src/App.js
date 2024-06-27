import spacelogo from "./images/spacelogo.png";
import react, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Hexagon from "./components/background/Hex";

function App() {
  return (
    <>
      <Router>
        <Hexagon />
        {/* <Switch>
          <Route path="/" exact component={Hexagon} />
          <Route path="/aboutme" component={Aboutme} />
        </Switch> */}
      </Router>
    </>
  );
}

export default App;
