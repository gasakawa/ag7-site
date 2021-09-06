import React from 'react';
import IServices from '../../../interfaces/i-services';

import * as S from '../../../styles/services';
import TextBox from '../../TextBox';

const Services = (data: IServices) => {
  return (
    <S.ServicesWrapper id='servicios'>
      <S.ServicesSection>
        <S.ServiceTextBlock>
          <TextBox {...data.textBox} />
        </S.ServiceTextBlock>
      </S.ServicesSection>
    </S.ServicesWrapper>
  );
};

export default Services;
