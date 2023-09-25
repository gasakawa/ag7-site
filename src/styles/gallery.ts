import styled from 'styled-components';
import media from 'styled-media-query';

interface GalleryProps {
  maxWidth: string;
  maxHeight: string;
}

export const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  padding-bottom: 3rem;
`;

export const GalleryItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 3.755rem 0 0 3rem;
  width: 80%;

  ${media.lessThan('large')`
    margin: 2.755rem 1rem 0 0;
    grid-template-columns: repeat(2, 1fr);

  `}
`;

export const GalleryItem = styled.div<GalleryProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    max-width: ${props => props.maxWidth};
    max-height: ${props => props.maxHeight};
  }
`;
