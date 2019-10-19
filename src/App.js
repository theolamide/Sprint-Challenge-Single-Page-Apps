import React from "react";
import Header from "./components/Header.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";


export default function App() {
  return (
    <main>
      <Header />

      <Router>
        <Link to="/">Welcome Page</Link>
        <Link to="/characterlist">Character List</Link>  

        <hr />

        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>

          <Route path="/characterlist">
            <CharacterList />
          </Route>
        </Switch>
           
      </Router>     

    </main>    
  );
}
