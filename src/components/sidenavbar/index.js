import React from "react";
import styled, { css } from 'styled-components';
import { NavLink as Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export const SideNavBar = () => {

  /* Write the necessary functions to show and hide the side bar on small devices */
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    return <div>
    {isMobile ?
        <Menu>
            <SideNav/>
        </Menu> :
        <SideNav/>
    }
    </div>
}

const SideNav = () => {
    return <SideNavBarCont>
        {/* Implement a hamburger icon slide in effect for small devices */}
        <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
            Wesley
            <img src={Arrow} alt="expand arrow"/>
        </SideNavMainLink>
        <SideNavMainLink className="menu_nav_link" to="/discover">
            Discover
            <img src={SearchWhite} alt="search icon"/>
        </SideNavMainLink>
        <SideNavHeader>Watched</SideNavHeader>
        <NavLink className="menu_nav_link" to="/watched/movies">Movies</NavLink>
        <NavLink className="menu_nav_link" to="/watched/tv-shows">Tv Shows</NavLink>
        <SideNavHeader>Saved</SideNavHeader>
        <NavLink className="menu_nav_link" to="/saved/movies">Movies</NavLink>
        <NavLink className="menu_nav_link" to="/saved/tv-shows">Tv Shows</NavLink>
    </SideNavBarCont>
}

const SideNavBarCont = styled.div`
    position: fixed;
    margin-right: 280px;
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

const NavLink = styled(Link)`
  position: relative;
  display: block;
  color: white;
  font-weight: 300;
  padding-left: 35px;
  padding-bottom: 10px;
  font-size: 1.4em;
`
