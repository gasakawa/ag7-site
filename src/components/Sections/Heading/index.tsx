import React from 'react';
import Image from 'next/image';

import IPageImage from '../../../interfaces/i-page-image';

import * as S from 'styles/heading';

const Heading = (headingData: IPageImage) => {
  const { id, title, image } = headingData;

  return (
    <S.HeadingWrapper>
      <S.HeadingSection>
        <S.HeadingImage>
          <Image
            src={image.url}
            width={540}
            height={470}
            alt={image.alternativeText ?? ''}
          />
        </S.HeadingImage>
        <S.HeadingTitle>
          <h1>{title}</h1>{' '}
        </S.HeadingTitle>
      </S.HeadingSection>
    </S.HeadingWrapper>
  );
};

export default Heading;
