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
  padding: 50px 0;
`;

export const ServiceTextBlock = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const ServicesCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;

  ${media.lessThan('large')`
    flex-direction: column;
    width: 100%;
  `}
`;
