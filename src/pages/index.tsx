import React from 'react';
import type { GetStaticProps } from 'next';
import Header from '../components/Sections/Header';

import { getHeaderData } from '../lib/header';
import IHeader from '../interfaces/i-header';
import {
  getHeadingData,
  getAboutUs,
  getWhatWeDo,
  getServices,
  getClients,
} from '../lib/sections';
import IPageImage from '../interfaces/i-page-image';
import Heading from '../components/Sections/Heading';
import AboutUs from '../components/Sections/AboutUs';
import IAboutUs from '../interfaces/i-about-us';
import IWhatWeDo from '../interfaces/i-what-we-do';
import WhatWeDo from '../components/Sections/WhatWeDo';
import IServices from '../interfaces/i-services';
import Services from '../components/Sections/Services';
import IClient from '../interfaces/i-client';
import Client from '../components/Sections/Client';
import { getFooterData } from '../lib/footer';
import IFooter from '../interfaces/i-footer';
import Footer from '../components/Sections/Footer';
import Whatsapp from '../components/Whatsapp';
import Burger from '../components/Burger';

const Home = ({
  header,
  heading,
  aboutUs,
  whatWeDo,
  services,
  clients,
  footer,
  locale,
}: {
  header: IHeader;
  heading: IPageImage;
  aboutUs: IAboutUs;
  whatWeDo: IWhatWeDo;
  services: IServices;
  clients: IClient;
  footer: IFooter;
  locale: string;
}) => {
  return (
    <>
      <Header {...header} />
      <Burger {...header} />
      <Heading {...heading} />
      <AboutUs {...aboutUs} />
      <WhatWeDo {...whatWeDo} />
      <Services {...services} />
      <Client {...clients} />
      <Footer {...footer} />
      <Whatsapp locale={locale} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const { locale } = context;
  const header = await getHeaderData(locale);
  const heading = await getHeadingData('first-section', locale);
  const aboutUs = await getAboutUs('about-us', locale);
  const whatWeDo = await getWhatWeDo('what-we-do', locale);
  const services = await getServices('services', locale);
  const clients = await getClients('clients', locale);
  const footer = await getFooterData(locale);

  return {
    props: {
      header,
      heading,
      aboutUs,
      whatWeDo,
      services,
      clients,
      footer,
      locale,
    },
  };
};

export default Home;
