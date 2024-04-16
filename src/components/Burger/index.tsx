import React from "react";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "hamburger-react";

import * as S from "styles/burger";

const links = [
  { id: 1, label: "Inicio", url: "/" },
  { id: 2, label: "Sobre", url: "/#about" },
  { id: 3, label: "Serviços", url: "/#services" },
  { id: 4, label: "Clientes", url: "/#clients" },
];

const Burger = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <S.BurgerWrapper>
        <Hamburger
          toggle={setOpen}
          toggled={isOpen}
          size={24}
          duration={0.4}
          distance="sm"
          color="#fff"
          easing="ease-in"
          rounded
          label="Menu"
        />
      </S.BurgerWrapper>

      <S.BurgerMenu $isOpen={isOpen}>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.url} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </S.BurgerMenu>
    </>
  );
};

export default Burger;
