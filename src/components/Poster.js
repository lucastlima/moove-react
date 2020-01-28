import React, { useState } from "react";
import styled from "styled-components";
import Loader from "./Loader";

const ImageStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: ${p => (p.min ? `${p.min}rem` : null)};
  width: 100%;
  height: 100%;
  overflow: hidden;

  & .preload-img {
    display: ${p => (p.loading ? "none" : "block")};
    width: 100%;
    height: auto;
    animation: fadeIn 0.3s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

function Poster({ src, size, alt, min }) {
  const [loading, setLoading] = useState(1);
  const handleLoad = () => setLoading(0);

  return (
    <ImageStyled min={min} loading={loading}>
      <Loader loading={loading} />
      <img
        onLoad={handleLoad}
        className="preload-img"
        src={`https://image.tmdb.org/t/p/${size}${src}`}
        alt={alt}
      />
    </ImageStyled>
  );
}

Poster.defaultProps = {
  size: "w500",
  src: "",
  alt: "image"
};

export default Poster;
