import styled from 'styled-components';
import media from 'styled-media-query';

interface CardOnlyTextProps {
  titleColor?: string;
  bodyColor?: string;
  backgroundColor?: string;
  borderHoverColor?: string;
}

export const CardOnlyTextWrapper = styled.div<CardOnlyTextProps>`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.backgroundColor};
  border-radius: 6px 6px;
  padding: 30px 30px;
  margin: 10px 10px;
  width: 300px;

  ${media.lessThan('large')`
    margin: 10px 0 10px 0;
  `}

  &:hover {
    border: 1px solid ${props => props.borderHoverColor};
  }
`;

export const CardOnlyTextTitle = styled.h3<CardOnlyTextProps>`
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.9rem;
  color: ${props => props.titleColor};
`;

export const CardOnlyTextDescription = styled.p<CardOnlyTextProps>`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.7rem;
  margin-top: 10px;
  color: ${props => props.bodyColor};
`;
