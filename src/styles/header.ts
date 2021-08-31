import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  max-height: 68px;
  padding: 5px 0 5px 0;

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

export const HeaderMenuNav = styled.nav`
  ul {
    list-style-type: none;
  }

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const HeaderMenuItem = styled.li`
  float: left;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.188rem;
    font-weight: 500;
    padding: 0 13px;
  }
`;

export const HeaderFlags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    margin: 5px;
  }

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const HeaderBurgerMenuIcon = styled.div`
  display: none;

  color: #fff;

  ${media.lessThan('large')`
    display: flex;
  `}
`;

export const HeaderBurgerMenuContent = styled.div`
  display: none;

  background-image: linear-gradient(
    180deg,
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
  color: #fff;

  height: 100vh;
  width: 100vw;

  ${media.lessThan('large')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
  `}
`;
