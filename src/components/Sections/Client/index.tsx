import React from 'react';

import IClient from '../../../interfaces/i-client';
import TextBox from '../../TextBox';

import * as S from '../../../styles/client';
import Slider from '../../Slider';

const Client = (data: IClient) => {
  const urls = data.slider.map(slide => slide.url);
  return (
    <S.ClientWrapper>
      <S.ClientSection>
        <TextBox {...data.textBox} />
        <Slider images={data.slider} />
      </S.ClientSection>
    </S.ClientWrapper>
  );
};

export default Client;
