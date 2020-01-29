import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SideMenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20rem;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 4rem 0;
  height: 100vh;

  nav {
    & ul {
      padding: 0 2rem;
      display: flex;
      flex-direction: column;
      font-size: 1.6rem;
    }
  }

  .header {
    display: flex;
    justify-content: center;
    height: 10rem;
    .logo {
      text-transform: uppercase;
      font-weight: 800;
      font-size: 2.6rem;
      span {
        font-size: 1.4rem;
        margin-left: 2px;
        color: #0cd0fc;
      }
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.4rem;
`;

function SideMenu() {
  return (
    <SideMenuStyle>
      <div className="header">
        <h1 className="logo">
          Moove<span>&#9632;</span>
        </h1>
      </div>
      <nav>
        <ul>
          <StyledNavLink to="/discover">Discover</StyledNavLink>
          <StyledNavLink to="/trending">Trending</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
          <StyledNavLink to="/tvshows">TV Shows</StyledNavLink>
          <StyledNavLink to="/people">People</StyledNavLink>
        </ul>
      </nav>
    </SideMenuStyle>
  );
}

export default SideMenu;
