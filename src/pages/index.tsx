import type { GetStaticProps } from 'next';
import Header from '../components/Header';

import { getHeaderData } from '../lib/header';
import IHeader from '../interfaces/i-header';
import Burger from '../components/Burger';
import { getColumnWithImage, getTextBox } from '../lib/sections';
import IPageImage from '../interfaces/i-page-image';
import React from 'react';
import Heading from '../components/Sections/Heading';
import ITextBox from '../interfaces/i-textbox';

const Home = ({
  header,
  heading,
  aboutUs,
}: {
  header: IHeader;
  heading: IPageImage;
  aboutUs: ITextBox;
}) => {
  return (
    <>
      <Header {...header} />
      {/* <Burger {...header} /> */}
      <Heading {...heading} />
      <pre>{JSON.stringify(aboutUs)}</pre>
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const { locale } = context;
  const header = await getHeaderData(locale);
  const heading = await getColumnWithImage('first-section', locale);
  const aboutUs = await getTextBox('about-us', locale);

  return {
    props: {
      header,
      heading,
      aboutUs,
    },
  };
};

export default Home;
