import type { GetStaticProps } from 'next';
import Header from '../components/Header';

import { getHeaderData } from '../lib/header';
import IHeader from '../interfaces/i-header';
import { getHeadingData, getAboutUs } from '../lib/sections';
import IPageImage from '../interfaces/i-page-image';
import React from 'react';
import Heading from '../components/Sections/Heading';
import AboutUs from '../components/AboutUs';
import IAboutUs from '../interfaces/i-about-us';

const Home = ({
  header,
  heading,
  aboutUs,
}: {
  header: IHeader;
  heading: IPageImage;
  aboutUs: IAboutUs;
}) => {
  return (
    <>
      <Header {...header} />
      {/* <Burger {...header} /> */}
      <Heading {...heading} />
      <AboutUs {...aboutUs} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const { locale } = context;
  const header = await getHeaderData(locale);
  const heading = await getHeadingData('first-section', locale);
  const aboutUs = await getAboutUs('about-us', locale);

  return {
    props: {
      header,
      heading,
      aboutUs,
    },
  };
};

export default Home;
