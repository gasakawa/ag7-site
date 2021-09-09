import styled from 'styled-components';
import media from 'styled-media-query';

export const ServicesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
  padding: 30px 0;

  ${media.lessThan('large')`
    padding: 20px 0;
  `}
`;

export const ServiceTextBlock = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const ServicesCardsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 30px 0;

  ${media.lessThan('large')`
    padding: 10px 0 20px 0;
  `}
`;

export const ServicesCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;

  ${media.lessThan('large')`
    flex-direction: column;
    width: 80%
  `}
`;
