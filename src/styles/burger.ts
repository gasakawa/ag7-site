import styled, { css } from 'styled-components';
import media from 'styled-media-query';

interface BurgerProps {
  isOpen: boolean;
}

export const BurgerWrapper = styled.div`
  display: none;

  ${media.lessThan('large')`
    display: flex;
    float: right;
    top: 0;
    margin-right: 20px;
    margin-top: 10px;
    
  `}
`;

export const BurgerMenu = styled.div<BurgerProps>`
  ${props =>
    props.isOpen
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

  position: absolute;
  height: 100vh;
  background-color: var(--color-primary);
  margin-top: 69px;
  right: 0;
  width: 300px;
  padding: 30px 15px;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;

    li {
      margin-top: 10px;
      a {
        color: #fff;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
`;
