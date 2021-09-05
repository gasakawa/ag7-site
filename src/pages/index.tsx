import type { GetStaticProps } from 'next';
import Header from '../components/Header';

import { getHeaderData } from '../lib/header';
import IHeader from '../interfaces/i-header';
import Burger from '../components/Burger';
import { getHeadingData } from '../lib/sections';
import IPageImage from '../interfaces/i-page-image';
import React from 'react';
import Heading from '../components/Sections/Heading';

const Home = ({
  header,
  heading,
}: {
  header: IHeader;
  heading: IPageImage;
}) => {
  return (
    <>
      <Header {...header} />
      {/* <Burger {...header} /> */}
      <Heading {...heading} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const { locale } = context;
  const header = await getHeaderData(locale);
  const heading = await getHeadingData(locale);

  return {
    props: {
      header,
      heading,
    },
  };
};

export default Home;
