import styled from 'styled-components';
import media from 'styled-media-query';

export const BurgerNavWrapper = styled.div`
  ${media.lessThan('large')`
    display: block;
`}
  display: none;
  position: relative;
  height: 100vh;
  background-color: var(--color-primary);
  z-index: 1;
  right: 0;
  top: 0;
  overflow-x: 0;
  transition: 0.5s;

  ul {
    list-style-type: none;
    display: flex;
    flex-flow: row nowrap;

    ${media.lessThan('large')`
    display: none;
  `}

    li {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 1.188rem;
        font-weight: 500;
        padding: 0 13px;
      }
    }
  }
`;
