import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import * as S from '../../styles/slider';
import IImageWithLink from '../../interfaces/i-image-with-link';

interface SliderProps {
  images: IImageWithLink[];
}

const Slider = ({ images }: SliderProps) => {
  const totalImages = images.length;

  const [maxImagePosition, setMaxImagePosition] = useState(4);

  // useEffect(() => {
  //   const nextImages = () => {
  //     if (maxImagePosition >= totalImages) {
  //       setMaxImagePosition(4);
  //     } else {
  //       setMaxImagePosition(maxImagePosition + 4);
  //     }
  //   };

  //   setInterval(() => {
  //     nextImages();
  //   }, 5000);
  // }, []);
  return (
    <S.SliderWrapper>
      {images.map((image: IImageWithLink, pos: number) => {
        if (pos >= 0 && pos < 4) {
          return (
            <Image
              key={image.image.id}
              src={image.image.url}
              width={image.image.width}
              height={image.image.height}
              alt={image.image.alternativeText}
            />
          );
        }
      })}
    </S.SliderWrapper>
  );
};

export default Slider;
