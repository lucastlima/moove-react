import React from "react";
import styled from "styled-components";
import SideMenu from "./SideMenu";
import MobileMenu from "./MobileMenu";

const LayoutStyle = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;

  @media ${props => props.theme.mediaQueries.small} {
    flex-direction: column;
  }
  #content {
    display: flex;
    flex: 1;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

function Layout({ children }) {
  return (
    <LayoutStyle>
      <MobileMenu />
      <SideMenu />
      <div id="content">{children}</div>
    </LayoutStyle>
  );
}

export default Layout;
