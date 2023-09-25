import React from 'react';
import IFooter from 'interfaces/i-footer';

import * as S from 'styles/footer';

import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

interface ISocialIcon {
  [key: string]: Object;
}

const Footer = (data: IFooter) => {
  const icons = {
    Instagram: <FaInstagram />,
    LinkedIn: <FaLinkedin />
  } as any;
  return (
    <S.FooterWrapper>
      <S.FooterContact>
        <p>{data.contact}</p>
        <S.FooterSocialIcons>
          {data.socialLink.map(icon => (
            <Link
              href={icon.url}
              key={icon.id}
              target='_blank'
              rel='norefferer noreferrer'
            >
              {icons[icon.brand]}
            </Link>
          ))}
        </S.FooterSocialIcons>
      </S.FooterContact>
      <S.FooterCopyright>
        <p>{data.copyright}</p>
      </S.FooterCopyright>
    </S.FooterWrapper>
  );
};

export default Footer;
