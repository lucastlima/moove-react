import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { setSelected, fetchSelected } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import SvgArrow from "./SvgArrow";
import Poster from "./Poster";
import history from "../utils/history";
import Loader from "./Loader";
import { StyledNavLink } from "./styledComponents";
import YoutubeFrame from "./YoutubeFrame";
import Modal from "./Modal";

const MediaStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8rem 5rem 5rem 5rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    ${({ bg }) => `url(${bg})`};
  background-size: cover;
  background-position: center;
  animation: fadeIn 0.5s ease-in;

  .arrow-wrapper {
    position: absolute;
    top: 2rem;
    left: 3rem;
    svg:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
  @media ${props => props.theme.mediaQueries.small} {
    padding: 6rem 2rem 2rem 2rem;
  }
`;

const Info = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 25rem minmax(0, 1fr);
  grid-gap: 2rem;
  overflow-y: auto;

  & h2 {
    padding-bottom: 1rem;
  }

  .image-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 300px;
    align-items: center;
  }

  .media-info {
    display: flex;
    width: 100%;
    max-width: 60rem;
    flex-direction: column;
    overflow-y: hidden;
    .title {
      display: flex;
      width: 100%;
      height: min-content;
      font-size: 2em;
      line-height: 2em;
      font-weight: 600;
      text-transform: uppercase;
    }
    .genres {
      & :not(:last-child) {
        padding-right: 0.5rem;
      }
      & span {
        text-transform: uppercase;
        font-weight: 600;
        color: #7c98a1;
      }
    }
  }

  .overview {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    font-size: 1rem;
    grid-column: span 2;
    overflow-y: auto;
    & .text {
      & p {
        font-size: 1.4rem;
        min-width: 0;
      }
    }
  }

  .content {
    display: flex;
  }

  .image-wrapper {
    display: flex;
    width: 100%;
    height: auto;
    max-width: 300px;
    align-items: flex-start;
  }

  .recomended {
    display: flex;
    flex-direction: column;
    grid-column: span 2;

    & h2 {
      text-transform: uppercase;
    }

    .r-wrap {
      display: flex;
      overflow-x: auto;
    }

    .r-poster {
      min-width: 10rem;
      box-shadow: 0 0 0.8rem 0.2rem rgba(0, 0, 0, 0.5);
      background-color: rgba(0, 0, 0, 0.8);

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }

  @media ${props => props.theme.mediaQueries.small} {
    .image-wrapper,
    .media-info {
      grid-column: span 2;
    }

    .title {
      justify-content: center;
      text-align: center;
    }

    .image-wrapper {
      max-width: 90%;
      margin: 0 auto;
    }

    .arrow-wrapper {
      top: 2rem;
      left: 1rem;
    }
  }
`;

const Videos = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 2;

  .videos-wrapper {
    display: flex;
    width: 100%;
    height: auto;
    overflow-x: auto;
  }

  .video-item {
    min-width: 20rem;
    height: auto;

    & img {
      width: 100%;
      height: auto;
      object-fit: scale-down;
    }

    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;

const VideoWrapper = styled.div`
  width: 70vw;
  margin: 0 auto;

  @media ${props => props.theme.mediaQueries.small} {
    width: 90vw;
  }
`;

function Media() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSelected, setVideoSelected] = useState(null);
  const selected = useSelector(s => s.selection.selected);
  const loading = useSelector(s => s.selection.loading);
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = location;

  const year = selected.release_date || selected.first_air_date;
  const recommended = selected.recommendations.results.length;

  console.log(selected);

  useEffect(() => {
    if (data) {
      dispatch(setSelected(data));
      dispatch(fetchSelected(data));
    }
  }, [data, dispatch, location]);

  const url = "https://image.tmdb.org/t/p/original";

  const handleGoBack = () => {
    history.goBack();
  };

  const handleVideoSelect = ({ target }) => {
    const video = selected.videos.results.find(e => e.id === target.id);
    setVideoSelected(video);
    setIsModalOpen(true);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return loading ? (
    <Loader />
  ) : (
    <MediaStyled bg={url + selected.backdrop_path}>
      <div onClick={handleGoBack} className="arrow-wrapper">
        <SvgArrow size={2} opacity={0.8} direction="left" />
      </div>

      <Info>
        <div className="image-wrapper">
          <Poster src={selected.poster_path} size="w342" alt={selected.title} />
        </div>
        <div className="media-info">
          <div className="title">
            <h2>{selected.title || selected.name}</h2>
          </div>
          <div className="year">
            <h3>{year.split("-")[0]}</h3>
          </div>
          <div className="media-info">
            <div className="genres">
              <p>
                {selected.genres.map((g, i) => (
                  <span key={i}>{g.name}</span>
                ))}
              </p>
            </div>
          </div>
          <div className="overview">
            <div className="text">
              <p>{selected.overview}</p>
            </div>
            <div className="cast"></div>
          </div>
        </div>
        <Videos>
          <h2>VIDEOS:</h2>
          <div className="videos-wrapper">
            {selected.videos.results.map(m => (
              <div className="video-item" key={m.id}>
                <img
                  id={m.id}
                  onClick={handleVideoSelect}
                  src={`http://i.ytimg.com/vi/${m.key}/mqdefault.jpg`}
                  alt="m.name"
                />
              </div>
            ))}
            {isModalOpen ? (
              <Modal open={isModalOpen} close={handleModal}>
                {videoSelected ? (
                  <VideoWrapper>
                    <YoutubeFrame youtube={videoSelected} />
                  </VideoWrapper>
                ) : null}
              </Modal>
            ) : null}
          </div>
        </Videos>
        {recommended ? (
          <div className="recomended">
            <h2>You may also like:</h2>
            <div className="r-wrap">
              {selected.recommendations.results.map(r => (
                <div key={r.id} className="r-poster">
                  <StyledNavLink
                    to={{
                      pathname: `/${selected.media_type}/${r.id}`,
                      data: { ...r, media_type: selected.media_type }
                    }}
                  >
                    <Poster src={r.poster_path} size="w342" alt={r.title} />
                  </StyledNavLink>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Info>
    </MediaStyled>
  );
}

export default Media;
