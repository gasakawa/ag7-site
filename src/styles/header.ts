import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100vw;
  padding: 10px 0 10px 0;

  background-image: linear-gradient(
    180deg,
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;

  ${media.lessThan('large')`
  justify-content: space-between;
  `}
`;

export const HeaderFlags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lessThan('large')`
   display: none;
  `}
`;
