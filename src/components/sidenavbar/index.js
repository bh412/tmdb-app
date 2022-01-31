import React from "react";
import styled, { css } from 'styled-components';
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export const SideNavBar = (props) => {

  /* Write the necessary functions to show and hide the side bar on small devices */

const { isSideOpen } = false //this.state;

return <SideNavBarCont className={isSideOpen ? 'visible' : '' + 'd-none d-lg-block'}>
    {/* Implement a hamburger icon slide in effect for small devices */}
    <div className="d-none d-lg-block">
        <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
            Wesley
            <NavIcon arrow></NavIcon>
        </SideNavMainLink>
        <SideNavMainLink className="menu_nav_link" to="/discover">
            Discover
            <NavIcon search></NavIcon>
        </SideNavMainLink>
        <SideNavHeader><HeaderText>Watched</HeaderText></SideNavHeader>
        <NavLink className="menu_nav_link" to="/watched/movies">Movies</NavLink>
        <NavLink className="menu_nav_link" to="/watched/tv-shows">Tv Shows</NavLink>
        <SideNavHeader><HeaderText>Saved</HeaderText></SideNavHeader>
        <NavLink className="menu_nav_link" to="/saved/movies">Movies</NavLink>
        <NavLink className="menu_nav_link" to="/saved/tv-shows">Tv Shows</NavLink>
    </div>
  </SideNavBarCont>

}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
`

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.8em;
  font-weight: 700;
  color: white;
`

const NavIcon = styled.div`
  position: absolute;
  right: 35px;
  top: 50%;
`

const SideNavHeader = styled.div`
  position: relative;
  display: block;
  color: white;
  font-weight: 500;
  margin-bottom: 10px;
  padding-bottom: 5px;
  font-size: 1.6em;
  border-bottom: 1px solid grey;
  margin-left: 35px;
`

const HeaderText = styled.div`

`

const NavLink = styled(Link)`
  position: relative;
  display: block;
  color: white;
  font-weight: 300;
  padding-left: 35px;
  padding-bottom: 10px;
  font-size: 1.4em;
`
