import React, { useState } from "react";
import Loader from "./Loader";
import styled from "styled-components";

const Image = styled.img`
  visibility: ${p => (p.loading ? "hidden" : "visible")};
  opacity: ${p => (p.loading ? 0 : 1)};
  transition: all 1s ease-in;
  width: 100%;
  height: auto;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function Poster({ src, size, alt }) {
  const [source, setSource] = useState(src);
  const [loading, setLoading] = useState(1);

  const handleLoad = e => {
    setLoading(0);
  };

  const handleError = e => {
    setSource("");
  };

  return (
    <ImageWrapper>
      {loading ? <Loader loading={loading} /> : null}
      <Image
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        src={`https://image.tmdb.org/t/p/${size}${source}`}
        alt={alt}
      />
    </ImageWrapper>
  );
}

Poster.defaultProps = {
  size: "w500",
  src: "",
  alt: "image"
};

export default Poster;
