import styled from 'styled-components';
import media from 'styled-media-query';

export const WhatWeDoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

export const WhatWeDoSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px 20px;
  margin-top: 50px;

  ${media.lessThan('large')`
   padding: 20px 0 ;
  `}
`;

export const WhatWeDoColumns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const WhatWeDoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px;

  ${media.lessThan('large')`
    margin: 0;
  `}

  h2 {
    margin: 30px 0;
    color: var(--color-primary);
    font-size: 1.5rem;
  }

  p {
    color: var(--color-text);
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 25px;
  }

  hr {
    display: none;
    ${media.lessThan('large')`
      display: block;
      width: 100%;
      
    `}
  }
`;

export const WhatWeDoImage = styled.div`
  display: flex;
  margin: 0;

  ${media.lessThan('large')`
      margin:  20px 0;
  `}
`;
