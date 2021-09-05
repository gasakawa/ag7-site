import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Hamburger from 'hamburger-react';

import IHeader from '../../interfaces/i-header';
import * as S from '../../styles/burger';

const Burger = (data: IHeader) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <S.BurgerWrapper>
        <Hamburger
          toggle={setOpen}
          toggled={isOpen}
          size={24}
          duration={0.4}
          distance='sm'
          color='#fff'
          easing='ease-in'
          rounded
          label='Menu'
        />
      </S.BurgerWrapper>

      <S.BurgerMenu isOpen={isOpen}>
        <ul>
          {data.links.map(link => (
            <li key={link.id}>
              <Link href={link.url}>
                <a onClick={() => setOpen(false)}>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </S.BurgerMenu>
    </>
  );
};

export default Burger;
