import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import Login from "./containers/Login/Login";
import NotFound from "./containers/NotFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <main>
          <article>
            <Navbar />
            <Switch>
              <Route exact path={["/", "/login"]}>
                <Login />
              </Route>
              {/* <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path={["/games", "/home"]}>
                <Games />
              </Route>
              <Route exact path="/account">
                <Account />
              </Route>
              <Route exact path="/combos">
                <Combos />
              </Route>
              <Route exact path="/SF2">
                <SF2 />
              </Route>
              <Route exact path="/SF2guile">
                <SF2Guile />
              </Route>
              <Route exact path="/character">
                <CharTemp />
              </Route>
              <Route exact path="/DBFZ">
                <DBFZ />
              </Route>
              <Route exact path="/tekken7">
                <Tek7 />
              </Route>
              <Route exact path="/SSBU">
                <SSBU />
              </Route>*/}
              <Route exact path={["*"]}>
                <NotFound />
              </Route> 
            </Switch>
            <Footer />
          </article>
        </main>
      </Router>
    </>
  );
}
export default App;
