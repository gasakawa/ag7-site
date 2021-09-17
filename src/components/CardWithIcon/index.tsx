import React from 'react';
import Image from 'next/image';

import * as S from 'styles/card-with-icon';

interface CardWithIconProps {
  title: string;
  description: string;
  iconUrl: string;
  iconAlt: string;
  iconBackgroundColor: string;
  iconBorderRadius: string;
}

const CardWithIcon = ({
  title,
  description,
  iconUrl,
  iconAlt,
  iconBackgroundColor,
  iconBorderRadius,
}: CardWithIconProps) => {
  return (
    <S.CardWithIconWrapper>
      <S.CartdWithIconImage
        iconBackgroundColor={iconBackgroundColor}
        iconBorderRadius={iconBorderRadius}
      >
        <Image src={iconUrl} width={34} height={40} alt={iconAlt} />
      </S.CartdWithIconImage>
      <S.CardWithIconTitle>{title}</S.CardWithIconTitle>
      <S.CardWithIconDescription>{description}</S.CardWithIconDescription>
    </S.CardWithIconWrapper>
  );
};

export default CardWithIcon;
