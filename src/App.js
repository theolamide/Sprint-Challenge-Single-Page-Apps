import React from "react";
import Header from "./components/Header.js";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
// import "/index.css";

const HeaderLink = styled.span`
  background: ${props => (props.primary ? "#FFF" : "#efe8e8")};
  color: ${props => (props.primary ? "#efe8e8" : "#FFF")};
  transition: 0.2s ease-in;
  text-decoration: none;
  border: ${props =>
    props.primary ? "2px solid #99f3eb" : "2px solid #efe8e8"};
  &:hover {
    background: ${props => (props.primary ? "#efe8e8" : "#fff")};
    color: ${props => (props.primary ? "#fff" : "#efe8e8")};
    border: ${props =>
      props.primary ? "2px solid #efe8e8" : "2px solid #99f3eb"};
  }
`;


export default function App() {
  return (
    <main>
      <Header />

      <Router>

        <div className = "links">
          <HeaderLink> <Link to="/">Welcome Page</Link> </HeaderLink>
          <HeaderLink> <Link to="/characterlist">Character List</Link> </HeaderLink>
        </div>  

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
