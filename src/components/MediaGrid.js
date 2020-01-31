import React from "react";
import styled from "styled-components";

const MediaGridStyled = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  padding: 1rem;

  .navigation {
    display: flex;
    width: 100%;
    height: 4rem;
  }

  .view {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    padding-bottom: 6rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    .view {
      grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    }
  }
`;

function MediaGrid({ children }) {
  return (
    <MediaGridStyled>
      <div className="view">{children}</div>
    </MediaGridStyled>
  );
}

export default MediaGrid;
