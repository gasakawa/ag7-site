import React from 'react';
import Image from 'next/image';

import IHeader from '../../../interfaces/i-header';
import Menu from '../../Menu';

import * as S from '../../../styles/header';
import Flags from 'components/Flags';

const Header = (data: IHeader) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderMenu>
        <Image
          src={data.logo.url}
          width={100}
          height={48.16}
          alt={data.logo.alt}
        />
        <Menu {...data} />
      </S.HeaderMenu>
    </S.HeaderWrapper>
  );
};

export default Header;
