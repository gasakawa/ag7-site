import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { Turn as Hamburger } from 'hamburger-react';

import IHeader from '../../interfaces/i-header';

import * as S from '../../styles/header';

const Header = (data: IHeader) => {
  const [isBurgerButtonClicked, setIsBurgerButtonClicked] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <S.HeaderWrapper>
      <S.HeaderMenu>
        <Image
          src={data.logo.url}
          width={100}
          height={48.16}
          alt={data.logo.alt}
          layout={'intrinsic'}
        />
        <S.HeaderMenuNav>
          <ul>
            {data.links.map(link => (
              <S.HeaderMenuItem key={link.id}>
                <Link href={link.url}>
                  <a>{link.label}</a>
                </Link>
              </S.HeaderMenuItem>
            ))}
          </ul>
        </S.HeaderMenuNav>
        <S.HeaderFlags>
          <span>
            <Link href='/'>
              <a>
                <Image src='/es_CO.png' width={18} height={12} alt='Español' />
              </a>
            </Link>
          </span>
          <span>
            <Link href='/pt'>
              <a>
                <Image
                  src='/pt_BR.png'
                  width={18}
                  height={12}
                  alt='Portugues'
                />
              </a>
            </Link>
          </span>
        </S.HeaderFlags>
        <S.HeaderBurgerMenuIcon>
          <Hamburger
            toggle={setOpen}
            toggled={isOpen}
            size={32}
            direction='left'
            duration={0.8}
          />
        </S.HeaderBurgerMenuIcon>
      </S.HeaderMenu>
      {isOpen && (
        <S.HeaderBurgerMenuContent>
          balbaldfsfsfsfsfsfsfsfs
        </S.HeaderBurgerMenuContent>
      )}
    </S.HeaderWrapper>
  );
};

export default Header;
