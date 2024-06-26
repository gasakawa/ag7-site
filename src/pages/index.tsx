import React from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Sections/Header";

import IHeader from "../interfaces/i-header";
import {
  getAboutUs,
  getWhatWeDo,
  getServices,
  getClients,
} from "../lib/sections";
import IPageImage from "interfaces/i-page-image";
import Heading from "components/Sections/Heading";
import AboutUs from "components/Sections/AboutUs";
import IAboutUs from "interfaces/i-about-us";
import IWhatWeDo from "interfaces/i-what-we-do";
import WhatWeDo from "components/Sections/WhatWeDo";
import IServices from "interfaces/i-services";
import Services from "components/Sections/Services";
import IClient from "interfaces/i-client";
import Client from "components/Sections/Client";
import { getFooterData } from "lib/footer";
import IFooter from "interfaces/i-footer";
import Footer from "components/Sections/Footer";
import Whatsapp from "components/Whatsapp";
import Burger from "components/Burger";

const Home = ({
  header,
  aboutUs,
  whatWeDo,
  services,
  clients,
  footer,
}: {
  header: IHeader;
  heading: IPageImage;
  aboutUs: IAboutUs;
  whatWeDo: IWhatWeDo;
  services: IServices;
  clients: IClient;
  footer: IFooter;
}) => {
  return (
    <>
      <Header />
      <Burger />
      <Heading />
      <AboutUs {...aboutUs} />
      <WhatWeDo {...whatWeDo} />
      <Services {...services} />
      <Client {...clients} />
      <Footer {...footer} />
      <Whatsapp />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const aboutUs = getAboutUs();
  const whatWeDo = getWhatWeDo();
  const services = getServices();
  const clients = getClients();
  const footer = getFooterData();

  return {
    props: {
      aboutUs,
      whatWeDo,
      services,
      clients,
      footer,
    },
  };
};

export default Home;
