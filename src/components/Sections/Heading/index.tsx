import React from 'react';
import Image from 'next/image';


import * as S from 'styles/heading';

const Heading = () => {

  return (
    <S.HeadingWrapper>
      <S.HeadingSection>
        <S.HeadingImage>
          <Image 
            src="https://ag7digital-site.s3.amazonaws.com/img_top_01_9460ac5be9.png"
            width={540}
            height={470}
            alt="Guru Meditando"
          />
        </S.HeadingImage>
        <S.HeadingTitle>
          <h1>Estratégias digitais para elevar seu negócio</h1>
        </S.HeadingTitle>
      </S.HeadingSection>
    </S.HeadingWrapper>
  );
};

export default Heading;
