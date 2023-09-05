import React, { useEffect, useState } from 'react';
import { useSpring } from 'react-spring';
import { FaWhatsapp } from 'react-icons/fa';

import * as S from 'styles/whatsapp';

const Whatsapp = () => {
  const [cancel, setCancel] = useState(false);

  const styles = useSpring({
    loop: { reverse: true },
    config: {
      duration: 1000
    },
    cancel: cancel,
    to: { transform: 'translate(0, -20px)' },
    from: { transform: 'translate(0, 10px)' }
  });

  useEffect(() => {
    setTimeout(() => {
      setCancel(!cancel);
    }, 10000);
  }, [cancel]);

  return (
    <S.WhatsappWrapper style={{ ...styles }}>
      <S.WhasappText>
        <span>Fale com a gente</span>
      </S.WhasappText>
      <S.WhatsappIcon>
        <a
          href='https://api.whatsapp.com/send?phone=5511999706020'
          target='_blank'
          rel='noreferrer'
        >
          <FaWhatsapp size={24} />
        </a>
      </S.WhatsappIcon>
    </S.WhatsappWrapper>
  );
};

export default Whatsapp;
