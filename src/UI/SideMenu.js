import React from 'react';
import styled from 'styled-components';

const SideMenuStyle = styled.div`
  display: flex;
  min-width: 20rem;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  height: 100vh;
`;

function SideMenu() {
  return (
    <SideMenuStyle>
      <h1>Moove.</h1>
    </SideMenuStyle>
  );
}

export default SideMenu;
