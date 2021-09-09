import styled from 'styled-components';
import media from 'styled-media-query';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-secondary);
  min-height: 80px;
  color: #fff;

  ${media.lessThan('large')`
    flex-direction: column;
    padding-bottom: 10px;
  `}
`;

export const FooterContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 0.7rem;
    font-weight: 500;
    margin: 0 10px;
  }
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  justify-content: space-around;

  a {
    color: #fff;
    text-decoration: none;
    margin: 5px 5px;
  }
`;

export const FooterCopyright = styled.div`
  display: flex;
  color: #fff;

  p {
    font-size: 0.7rem;
    font-weight: 500;
  }
`;
