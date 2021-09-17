import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { HeaderFlags } from 'styles/flags';

const Flags = () => {
  return (
    <HeaderFlags>
      <span>
        <Link href='/'>
          <a>
            <Image
              src='/es_CO.png'
              width={18}
              height={12}
              alt='Español'
              title='Español'
            />
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
              title='Portugues'
            />
          </a>
        </Link>
      </span>
    </HeaderFlags>
  );
};

export default Flags;
