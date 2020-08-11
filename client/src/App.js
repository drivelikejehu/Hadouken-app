import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Games from "./containers/Games/Games";
import Characters from "./containers/Characters/Characters"
import StreetFighter2 from "./containers/Games/gamePages/StreetFighter2";
import Combos from "./containers/Combos/Combos";
import Account from "./containers/Account/Account";
import NotFound from "./containers/NotFound/NotFound";
import SuperSmashBrothersUltimate from "./containers/Games/gamePages/SuperSmashBrothersUltimate";

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
              <Route exact path={["/signup"]}>
                <Signup />
              </Route>
              <Route exact path={["/games"]}>
                <Games />
              </Route>
              <Route exact path={["/characters"]}>
                <Characters />
              </Route>
              <Route exact path={["/streetfighter2"]}>
                <StreetFighter2 />
              </Route>
              <Route path='/StreetFighter2/:character'>
                <Combos/>
                </Route>   
              <Route exact path={["/SuperSmashBrosUltimate"]}>
                <SuperSmashBrothersUltimate />
              </Route>
              <Route path='/ssbu/:characters'
              component={Combos}/>
              <Route exact path={["/account"]}>
                <Account />
              </Route>
              <Route exact path={["/combos"]}>
                <Combos />
              </Route>
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
