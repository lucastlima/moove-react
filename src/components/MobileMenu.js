import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MobileMenuStyle = styled.div`
  display: none;
  position: relative;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  height: 6rem;
  justify-content: space-between;

  .menu-wrapper {
    display: ${p => (p.isOpen ? "flex" : "none")};
    position: absolute;
    z-index: 5;
    top: 6rem;
    left: 0;
    width: 100%;
    height: calc(100vh - 6rem);
    background-color: #192022;
    nav {
      display: flex;
      flex: 1;
      & ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 0 2rem;
        font-size: 1.6rem;
      }
    }
  }

  .header {
    display: flex;
    justify-content: center;
    .logo {
      text-transform: uppercase;
      font-weight: 800;
      span {
        font-size: 1.4rem;
        margin-left: 2px;
        color: #0cd0fc;
      }
    }
  }

  @media ${props => props.theme.mediaQueries.small} {
    display: flex;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 3rem;
`;

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MobileMenuStyle isOpen={isMenuOpen}>
      <div className="header">
        <h1 className="logo">
          Moove<span>&#9632;</span>
        </h1>
      </div>
      <div onClick={handleMenu}>
        <h1>X</h1>
      </div>
      <div className="menu-wrapper">
        <nav>
          <ul onClick={handleMenu}>
            <StyledNavLink to="/trending">Trending</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
            <StyledNavLink to="/tvshows">TV Shows</StyledNavLink>
            <StyledNavLink to="/people">People</StyledNavLink>
          </ul>
        </nav>
      </div>
    </MobileMenuStyle>
  );
}

export default MobileMenu;
