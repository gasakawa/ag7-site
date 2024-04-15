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
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                  <S.WhatWeDoImage>
                    <Image
                      src={card.image.url}
                      width={card.image.width}
                      height={card.image.height}
                      alt={card.image.alternativeText}
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
                      src={card.image.url}
                      width={card.image.width}
                      height={card.image.height}
                      alt={card.image.alternativeText}
                    />
                  </S.WhatWeDoImage>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
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
