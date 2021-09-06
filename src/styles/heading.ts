import styled from 'styled-components';
import media from 'styled-media-query';

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background-image: linear-gradient(
    160deg,
    var(--color-primary) 36%,
    var(--color-text) 100%
  );
  padding-bottom: 50px;
  clip-path: ellipse(105% 100% at 25.25% 0%);

  ${media.lessThan('large')`
  clip-path: ellipse(150% 100% at 30% 0%);

  `}
`;

export const HeadingSection = styled.section`
  display: flex;
  width: 80%;

  ${media.lessThan('large')`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const HeadingImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-top: 60px;

  ${media.lessThan('large')`
    width: 100%;
  `}
`;

export const HeadingTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;

  ${media.lessThan('large')`
    margin-top: 30px;
    width: 100% ;
    padding-left: 25px;
  `}

  h1 {
    color: #fff;
    font-size: 4.2rem;
    font-weight: 500;
    line-height: 1;

    ${media.lessThan('large')`
      font-size: 2.5rem;
      
    `}
  }
`;

export const HeadingPaper01 = styled.div`
  left: 230px;
  width: 103px;
  max-width: 103px;
  top: 105px;
  position: absolute;

  ${media.lessThan('large')`
    left: 42px;
  `}
`;
