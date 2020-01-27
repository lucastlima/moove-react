import React from 'react';
import styled from 'styled-components';

const SvgStyle = styled.div`
  display: flex;
  width: ${props => props.size}rem;
  justify-content: center;
  align-items: center;
  & svg {
    width: 100%;
    height: 100%;
    fill: white;
    opacity: ${props => props.opacity};
    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.3));
    transform: ${({ direct }) => {
      switch (direct) {
        case 'left':
          return 'rotate(180deg)';
        case 'top':
          return 'rotate(-90deg)';
        case 'down':
          return 'rotate(90deg)';
        default:
          return null;
      }
    }};
  }
`;

function SvgArrow({ direction, size, opacity }) {
  return (
    <SvgStyle size={size} opacity={opacity} direct={direction}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 450">
        <path d="M345.44,248.29,151.15,442.57a31.64,31.64,0,0,1-44.75-44.74L278.32,225.92,106.41,54A31.64,31.64,0,0,1,151.16,9.27L345.45,203.55a31.64,31.64,0,0,1,0,44.74Z" />
      </svg>
    </SvgStyle>
  );
}

SvgArrow.defaultProps = {
  size: 4,
  opacity: 1
};

export default SvgArrow;
