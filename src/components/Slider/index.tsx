import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import IImage from '../../interfaces/i-image';

import * as S from '../../styles/slider';

interface SliderProps {
  images: IImage[];
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
      {images.map((image: IImage, pos: number) => {
        if (pos < maxImagePosition) {
          return (
            <Image
              key={image.id}
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alternativeText}
            />
          );
        }
      })}
    </S.SliderWrapper>
  );
};

export default Slider;
