import React from 'react';
import TextBox from '../Sections/TextBox';

import * as S from '../../styles/about-us';
import IAboutUs from '../../interfaces/i-about-us';

const AboutUs = (data: IAboutUs) => {
  return (
    <S.AboutUsWrapper id='somos'>
      <S.AboutUsSection>
        <TextBox {...data.textBox} />
        <TextBox {...data.textBox} />
      </S.AboutUsSection>
    </S.AboutUsWrapper>
  );
};

export default AboutUs;
