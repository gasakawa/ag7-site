import React, { FC } from 'react';
import ICardOnlyText from 'interfaces/i-card-only-text';

import * as S from 'styles/card-only-text';

interface CardOnlyTextProps {
  bodyColor: string;
  backgroundColor: string;
  titleColor: string;
  title: string;
  description: string;
  borderHoverColor: string;
}

const CardOnlyText: FC<CardOnlyTextProps> = ({
  backgroundColor,
  titleColor,
  title,
  bodyColor,
  description,
  borderHoverColor,
}: CardOnlyTextProps) => {
  return (
    <S.CardOnlyTextWrapper
      backgroundColor={backgroundColor}
      borderHoverColor={borderHoverColor}
    >
      <S.CardOnlyTextTitle titleColor={titleColor}>{title}</S.CardOnlyTextTitle>
      <S.CardOnlyTextDescription bodyColor={bodyColor}>
        {description}
      </S.CardOnlyTextDescription>
    </S.CardOnlyTextWrapper>
  );
};

export default CardOnlyText;
