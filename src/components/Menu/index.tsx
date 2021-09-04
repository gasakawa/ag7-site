import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import IHeader from '../../interfaces/i-header';

import * as S from '../../styles/menu';

const Menu = (data: IHeader) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <S.MenuWrapper>
      <S.MenuNav>
        <ul>
          {data.links.map(link => (
            <li key={link.id}>
              <Link href={link.url}>
                <a>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </S.MenuNav>
    </S.MenuWrapper>
  );
};

export default Menu;
