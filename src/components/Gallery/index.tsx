import React from 'react';
import Image from 'next/image';

import IImageWithLink from 'interfaces/i-image-with-link';

import * as S from 'styles/gallery';

interface GalleryProps {
  images: IImageWithLink[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <S.GalleryWrapper>
      <S.GalleryItems>
        {images.map((image: IImageWithLink, pos: number) => {
          return (
            <S.GalleryItem
              key={image.image.id}
              $maxHeight={`${image.image.height}px`}
              $maxWidth={`${image.image.width}px`}
            >
              <a href={image.link} target='_blank' rel='noreferrer'>
                <Image
                  src={image.image.url}
                  width={image.image.width}
                  height={image.image.height}
                  alt={image.image.alternativeText ?? ''}
                  priority={true}
                />
              </a>
            </S.GalleryItem>
          );
        })}
      </S.GalleryItems>
    </S.GalleryWrapper>
  );
};

export default Gallery;
