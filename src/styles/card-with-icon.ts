import styled from 'styled-components';
import media from 'styled-media-query';

interface CardWithIconProps {
  iconBackgroundColor: string;
  iconBorderRadius: string;
}

export const CardWithIconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border: 1px solid #d2d2d2;
  padding: 60px 30px 30px 30px;
  margin: 15px 20px 0 0;
  border-radius: 6px;
  height: auto;

  ${media.lessThan('large')`
    height: auto;
    padding: 30px 15px;
    margin: 15px 0
  `}
`;

export const CartdWithIconImage = styled.div<CardWithIconProps>`
  display: flex;
  border-radius: ${props => props.iconBorderRadius};
  background-color: ${props => props.iconBackgroundColor};
  padding: 30px;
`;

export const CardWithIconTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.3rem;
  color: var(--color-primary);
  margin-top: 25px;

  ${media.lessThan('large')`
    font-size: 1.3rem;
  `}
`;

export const CardWithIconDescription = styled.p`
  color: var(--color-text);
  font-weight: 400;
  font-size: 1rem;
  margin-top: 25px;

  ${media.lessThan('large')`
    font-size: 0.9rem;
  `}
`;
