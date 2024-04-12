import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

import * as S from 'styles/menu';

const links = [
  {id: 1, label: 'Inicio', url: '/'},
  {id: 2, label: 'Sobre', url: '/#somos'},
  {id: 3, label: 'Serviços', url: '/#servicios'},
] 


const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <S.MenuWrapper>
      <S.MenuNav>
        <ul>
          {links.map(link => (
            <li key={link.id}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </S.MenuNav>
    </S.MenuWrapper>
  );
};

export default Menu;
