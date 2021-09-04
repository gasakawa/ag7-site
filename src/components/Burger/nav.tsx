import Link from 'next/link';
import React from 'react';
import IHeader from '../../interfaces/i-header';

import * as S from '../../styles/nav';

const BurgerNav = (isOpen: boolean, data: IHeader) => {
  return (
    <S.BurgerNavWrapper>
      <ul>
        {data.links.map(link => (
          <li key={link.id}>
            <Link href={link.url}>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </S.BurgerNavWrapper>
  );
};

export default BurgerNav;
