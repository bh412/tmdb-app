import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import {SideNavBar} from "./components/sidenavbar";

import {Discover} from "./pages/discover";

import './css/app.css';

export default class App extends React.Component {
  render () {
    return (
      <Router>
          <SideNavBar/>
          <ContentWrapper>
            <Switch>
              <Route path="/discover" component={Discover} {...this.props}/>
            </Switch>
          </ContentWrapper>
      </Router>
    );
  }
}


const ContentWrapper = styled.main`
  @media (min-width: 800px) {
    padding-left: 280px;
    float: right;
    position: relative;
    display:inline-block;
    width: max-content - 280px;
  }
`
