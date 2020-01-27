import React from 'react';
import styled from 'styled-components';
import SideMenu from './SideMenu';

const LayoutStyle = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
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
      <SideMenu />
      <div id="content">{children}</div>
    </LayoutStyle>
  );
}

export default Layout;
