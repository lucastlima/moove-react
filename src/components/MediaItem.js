import React from "react";
import styled from "styled-components";
import Poster from "./Poster";
import moment from "moment";
import SvgRating from "./SvgRating";
import { StyledNavLink } from "./styledComponents";

const MediaItemStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: var(--shadowOne);
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.04);
  transition: all 0.3s ease-in;

  & .raing {
    width: 100%;
    margin: 1rem 0 0.5rem 0;
    height: 1.2rem;
  }

  &:hover > .overlay-info {
    display: flex;
    animation: fadeIn 0.2s ease-in;
  }

  & .overlay-info {
    position: absolute;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: 0;
    left: 0;
    width: calc(100% - 1rem);
    height: calc(100% - 3.7rem);
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.9);
    margin: 0.5rem;
    font-size: 1.6rem;
    text-align: center;

    h4 {
      font-weight: 500;
    }
  }
`;

function MediaItem({ media, mediaType }) {
  return (
    <StyledNavLink
      key={media.id}
      to={{
        pathname: `/${mediaType ? mediaType : media.media_type}/${media.id}`,
        data: mediaType ? { ...media, media_type: mediaType } : media
      }}
    >
      <MediaItemStyled>
        <Poster src={media.poster_path} size="w500" alt={media.title} />
        <div className="overlay-info">
          <h3>{media.title || media.name}</h3>
          <h4>{moment(media.release_date).year()}</h4>
        </div>
        <div className="raing">
          <SvgRating rating={media.vote_average} />
        </div>
      </MediaItemStyled>
    </StyledNavLink>
  );
}

export default MediaItem;
