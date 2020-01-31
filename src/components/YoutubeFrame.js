import React from "react";
import styled from "styled-components";

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;

  & .y-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

function YoutubeFrame({ youtube }) {
  return (
    <VideoWrapper>
      <iframe
        className="y-iframe"
        title={youtube.name}
        src={`https://www.youtube.com/embed/${youtube.key}`}
        frameBorder="0"
        allowFullScreen={1}
      />
    </VideoWrapper>
  );
}

YoutubeFrame.defaultProps = {
  youtube: {
    name: "video",
    key: ""
  }
};

export default YoutubeFrame;
