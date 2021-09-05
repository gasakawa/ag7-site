import React from 'react';
import ITextBox from '../../interfaces/i-textbox';
import TextBox from '../Sections/TextBox';

import * as S from '../../styles/about-us';

const AboutUs = (data: ITextBox) => {
  return (
    <S.AboutUsWrapper id='somos'>
      <S.AboutUsSection>
        <TextBox {...data} />
        <TextBox {...data} />
      </S.AboutUsSection>
    </S.AboutUsWrapper>
  );
};

export default AboutUs;
