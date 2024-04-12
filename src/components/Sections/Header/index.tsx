import React from 'react';
import Image from 'next/image';

import Menu from '../../Menu';

import * as S from '../../../styles/header';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderMenu>
        <Image
          src="https://ag7digital-site.s3.amazonaws.com/logo_blanco_2c1d6b1c69.png"
          width={100}
          height={48.16}
          alt="Logo AG7 Digital Business"
        />
        <Menu />
      </S.HeaderMenu>
    </S.HeaderWrapper>
  );
};

export default Header;
