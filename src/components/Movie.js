import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { setSelected, fetchSelected } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import SvgArrow from "./SvgArrow";
import Poster from "./Poster";
import history from "../utils/history";
import Loader from "./Loader";
import { StyledNavLink } from "../components/styledComponents";

const MovieStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    ${({ bg }) => `url(${bg})`};
  background-size: cover;
  background-position: center;

  .arrow-wrapper {
    position: absolute;
    top: 2rem;
    left: 3rem;
    svg:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  .info {
    display: grid;
    width: 90%;
    grid-template-columns: minmax(15rem, 1fr) 4fr;
    grid-template-rows: 1fr, 1fr;
    padding: 3rem 6rem;
  }
  .description {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    font-size: 1rem;

    p {
      width: 60%;
      font-size: 1.4rem;
      padding: 1rem 0;
    }
  }

  .content {
    display: flex;
  }

  .image-wrapper {
    width: 100%;
    height: 100%;
  }

  .m-title {
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  .recomended {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
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
`;

function Movie() {
  const selected = useSelector(s => s.selection.selected);
  const loading = useSelector(s => s.selection.loading);
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = location;

  useEffect(() => {
    console.log(data);
    if (data) {
      dispatch(setSelected(data));
      dispatch(fetchSelected(data));
    }
  }, [data, dispatch, location]);

  const url = "https://image.tmdb.org/t/p/original";

  const handleGoBack = () => {
    history.goBack();
  };

  return loading ? (
    <Loader />
  ) : (
    <MovieStyled bg={url + selected.backdrop_path}>
      <div className="nav">
        <div onClick={handleGoBack} className="arrow-wrapper">
          <SvgArrow size={2} opacity={0.8} direction="left" />
        </div>
      </div>
      <div className="info">
        <div className="image-wrapper">
          <Poster src={selected.poster_path} size="w342" alt={selected.title} />
        </div>
        <div className="description">
          <h2 className="m-title">{selected.title || selected.name}</h2>
          <p>{selected.overview}</p>
          <div className="cast"></div>
        </div>
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
      </div>
    </MovieStyled>
  );
}

export default Movie;
