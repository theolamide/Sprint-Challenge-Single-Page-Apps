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

const HeaderLink = styled.a`
width: 100px;
  height: 30px;
  background: ${props => (props.primary ? "#FFF" : "#2a2223")};
  color: ${props => (props.primary ? "#2a2223" : "#FFF")};
  border: 0;
  margin: 5px 10px;
  transition: 0.2s ease-in;
  border: ${props =>
    props.primary ? "2px solid #99f3eb" : "2px solid #2a2223"};
  &:hover {
    background: ${props => (props.primary ? "#2a2223" : "#fff")};
    color: ${props => (props.primary ? "#fff" : "#2a2223")};
    border: ${props =>
      props.primary ? "2px solid #2a2223" : "2px solid #99f3eb"};
  }
`;


export default function App() {
  return (
    <main>
      <Header />

      <Router>
        <HeaderLink> <Link to="/">Welcome Page</Link> </HeaderLink>
        <HeaderLink> <Link to="/characterlist">Character List</Link> </HeaderLink>  

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
