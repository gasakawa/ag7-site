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
    position: fixed;
    z-index: 5;
    right: 0;
  `}
`;

export const BurgerMenu = styled.div<BurgerProps>`
  ${props =>
    props.isOpen
      ? css`
          display: flex;
          flex-direction: column;
        `
      : css`
          display: none;
        `}

  position: fixed;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  right: 0;
  width: 300px;
  padding: 30px 15px;
  z-index: 5;

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

export const BurgerFlags = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 20px;
`;
