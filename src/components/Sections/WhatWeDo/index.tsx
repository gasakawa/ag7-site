import React from 'react';
import Image from 'next/image';

import IWhatWeDo from 'interfaces/i-what-we-do';
import TextBox from 'components/TextBox';

import * as S from 'styles/what-we-do';
import ICardWithImageText from 'interfaces/i-card-with-image-text';

const WhatWeDo = (data: IWhatWeDo) => {
  return (
    <S.WhatWeDoWrapper>
      <S.WhatWeDoSection>
        <TextBox {...data.textBox} />
        <S.WhatWeDoColumns>
          {data.cards.map((card: ICardWithImageText, pos: number) => {
            if (pos == 1) {
              return (
                <S.WhatWeDoCard key={card.id}>
                  <h2>{card.Title}</h2>
                  <p>{card.Description}</p>
                  <S.WhatWeDoImage>
                    <Image
                      src={card.Image.url}
                      width={card.Image.width}
                      height={card.Image.height}
                      alt={card.Image.alternativeText}
                    />
                  </S.WhatWeDoImage>
                  <hr />
                </S.WhatWeDoCard>
              );
            } else {
              return (
                <S.WhatWeDoCard key={card.id}>
                  <S.WhatWeDoImage>
                    <Image
                      src={card.Image.url}
                      width={card.Image.width}
                      height={card.Image.height}
                      alt={card.Image.alternativeText}
                    />
                  </S.WhatWeDoImage>
                  <h2>{card.Title}</h2>
                  <p>{card.Description}</p>
                  <hr />
                </S.WhatWeDoCard>
              );
            }
          })}
        </S.WhatWeDoColumns>
      </S.WhatWeDoSection>
    </S.WhatWeDoWrapper>
  );
};

export default WhatWeDo;
