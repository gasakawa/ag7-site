import React from 'react';

import IClient from '../../../interfaces/i-client';
import TextBox from '../../TextBox';

import * as S from '../../../styles/client';
import Gallery from '../../Gallery';

const Client = (data: IClient) => {
  return (
    <>
      <S.ClientWrapper>
        <S.ClientTextBoxSection>
          <TextBox {...data.textBox} />
        </S.ClientTextBoxSection>
      </S.ClientWrapper>

      <Gallery images={data.slider} />
    </>
  );
};

export default Client;
