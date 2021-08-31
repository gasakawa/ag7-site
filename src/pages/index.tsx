import type { GetStaticProps } from 'next';
import Header from '../components/Header';

import { getHeaderData } from '../lib/header';
import IHeader from '../interfaces/i-header';

const Home = ({ header }: { header: IHeader }) => {
  return (
    <>
      <Header {...header} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const { locale } = context;
  const header = await getHeaderData(locale);

  return {
    props: {
      header,
    },
  };
};

export default Home;
