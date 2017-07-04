import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { PageContainer } from "./components/StyledContainers";
import NavBar from "./components/NavBar";
import Tabs from "./components/Tabs";

const WelcomeSplash = () =>
  <PageContainer>
    <NavBar searchVisible={false} />
    <h2>Welcome to React</h2>
    <p>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <div>Another app</div>
  </PageContainer>;

const Tabss = () =>
  <PageContainer>
    <Tabs />
  </PageContainer>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={WelcomeSplash} />
          <Route path="/" component={Tabss} />
        </div>
      </Router>
    );
  }
}

export default App;
