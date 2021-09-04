import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const MenuWrapper = styled.div`
  display: flex;
`;

export const MenuNav = styled.div`
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
