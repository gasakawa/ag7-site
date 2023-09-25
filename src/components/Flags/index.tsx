import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { HeaderFlags } from 'styles/flags';

const Flags = () => {
  return (
    <HeaderFlags>
      <span>
        <Link href='/' passHref>
          <Image
            src='/es_CO.png'
            width={18}
            height={12}
            alt='Español'
            title='Español'
          />
        </Link>
      </span>
      <span>
        <Link href='/pt' passHref>
          <Image
            src='/pt_BR.png'
            width={18}
            height={12}
            alt='Portugues'
            title='Portugues'
          />
        </Link>
      </span>
    </HeaderFlags>
  );
};

export default Flags;
