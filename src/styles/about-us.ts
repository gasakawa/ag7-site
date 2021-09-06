import styled from 'styled-components';
import media from 'styled-media-query';

export const AboutUsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 100px 0;

  ${media.lessThan('large')`
    padding: 50px 30px;

  `}
`;

export const AboutUsSection = styled.section`
  display: flex;
  width: 60%;
  padding: 20px 20px 0 0;

  ${media.lessThan('large')`
    flex-direction: column;
    width: 100%;
    padding: 0;
  `}
`;

export const AboutUsTextSection = styled.div`
  display: flex;
  width: 50%;

  ${media.lessThan('large')`
    width: 100%;
  `}
`;

export const AboutUsCardsSection = styled.div`
  display: flex;
  margin-left: 20px;

  ${media.lessThan('large')`
    margin: 10px 0 10px 0;
    flex-direction: column;
  `}
`;

export const AboutUsCardsColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
