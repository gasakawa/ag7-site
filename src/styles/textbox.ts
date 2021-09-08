import styled from 'styled-components';
import media from 'styled-media-query';

export const TextBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const TextBoxTitle = styled.h2`
  font-size: 3rem;
  color: var(--color-primary);
  font-weight: 800;
  line-height: 1;
  margin-block-start: 0.5em;

  margin-inline-end: 0;
  margin-inline-start: 0;

  ${media.lessThan('large')`
    font-size: 2rem;
  `}
`;

export const TextBoxSubtitle = styled.h3`
  font-size: 0.875rem;
  color: var(--color-secondary);
  font-weight: 700;
  text-transform: uppercase;
  margin-block-start: 1em;
  margin-inline-end: 1em;
  margin-inline-end: 0;
  margin-inline-start: 0;
`;

export const TextBoxDescription = styled.div`
  color: var(--color-text);
  font-size: 1em;
  font-weight: 400;
  margin-block-start: 2em;
  margin-inline-end: 1em;
  margin-inline-end: 0;
  margin-inline-start: 0;
`;
