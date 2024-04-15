import IAboutUs from "../interfaces/i-about-us";
import ITextBox from "../interfaces/i-textbox";
import ICardOnlyText from "../interfaces/i-card-only-text";
import ICardWithImageText from "../interfaces/i-card-with-image-text";
import IWhatWeDo from "../interfaces/i-what-we-do";
import ICardWithIcon from "../interfaces/i-card-with-icon";
import IServices from "../interfaces/i-services";
import IClient from "../interfaces/i-client";
import IImageWithLink from "../interfaces/i-image-with-link";

export const getAboutUs = (): IAboutUs => {
  const textBlock = {
    title: "Time de profissionais apaixonados pelo que fazemos",
    description:
      "Acreditamos que nossos clientes possuem **objetivos** e **necessidades** diferentes, por este motivo nossa proposta de serviço é personalizada. Adaptamos nossos serviços de encontro com a melhor estratégia digital que eleve seu negócio.",
    subtitle: "Sobre nós",
  };

  const cards: ICardOnlyText[] = [
    {
      id: "1",
      title: "SEO otimizado",
      description:
        "Obtenha mais tráfego orgânico, para posicionar melhor o seu negócio na internet.",
    },
    {
      id: "2",
      title: "Estratégia de anúncios",
      description:
        "Alcance um número maior de possíveis clientes, a través de anúncios pagos (Facebook Ads, Google Ads)",
    },
    {
      id: "3",
      title: "Desenvolvimento de aplicações web",
      description: "Desenvolvemos aplicações web sob medida.",
    },
    {
      id: "4",
      title: "Web sites",
      description:
        "Posicione sua marca o negócio na internet, com páginas web modernas e adaptadas a qualquer dispositivo.",
    },
  ];

  const textBox = {
    title: textBlock.title,
    subtitle: textBlock.subtitle,
    description: textBlock.description,
  } as ITextBox;

  return {
    textBox,
    cards: cards,
  } as IAboutUs;
};

export const getWhatWeDo = (): IWhatWeDo => {
  const textBox: ITextBox = {
    title: "Porque nos contratar?",
    description:
      "Estamos totalmente comprometidos em levar nossos clientes a novas alturas.",
    subtitle: "O que fazemos",
  };

  const cards: ICardWithImageText[] = [
    {
      id: "7",
      title: "Entendimento do seu negócio.",
      description:
        "Nosso foco é entender seu negócio, para definir melhor os objetivos de uma estratégia digital mais efetiva e com melhores resultados.",
      image: {
        name: "img_front_01_n.png",
        alternativeText: "",
        width: 435,
        height: 411,
        mime: "image/png",
        url: "https://ag7digital-site.s3.amazonaws.com/img_front_01_n_59ce48fc48.png",
      },
    },
    {
      id: "8",
      title: "Melhores práticas e inovações.",
      description:
        "Utilizamos as melhores práticas do mercado, unificando estratégia com tecnologia, desta forma seu negócio está atualizado.",
      image: {
        name: "img_front_02_n.png",
        alternativeText: "",
        width: 427,
        height: 415,

        mime: "image/png",
        url: "https://ag7digital-site.s3.amazonaws.com/img_front_02_n_0c5589e192.png",
      },
    },
    {
      id: "9",
      title: "Transparência e trabalho em equipe.",
      description:
        "Somos transparentes nas nossas estratégias, trabalhando sempre em conjunto com nossos clientes.",
      image: {
        name: "img_front_03_n.png",
        alternativeText: "",
        width: 511,
        height: 366,
        mime: "image/png",
        url: "https://ag7digital-site.s3.amazonaws.com/img_front_03_n_7809ace091.png",
      },
    },
  ];

  // const cardsWithImageText = cards.map(card => ({
  //   id: card.id,
  //   Image: card.Image,
  //   Title: card.Title,
  //   Description: card.Description
  // })) as ICardWithImageText[];

  return {
    textBox,
    cards: cards,
  };
};

export const getServices = (): IServices => {
  const cards = [
    {
      id: "7",
      Title: "Identidade Visual",
      Description:
        "Ajudamos a criar a identidade visual para seu negócio, que transmita os conceitos e valores da sua marca, criando recordação e seus clientes se identifiquem com ela.",
      Icon: {
        url: "https://ag7digital-site.s3.amazonaws.com/polygon_11bcbdf2a1.png",
        alternativeText: "",
      },
    },
    {
      id: "8",
      Title: "Tráfego Pago",
      Description:
        "Elaboramos estratégias de anúncios focadas nos objetivos dos nossos clientes, aproveitando ao máximo as características das ferramentas de tráfego pago (Meta Ads / Google Ads).",
      Icon: {
        url: "https://ag7digital-site.s3.amazonaws.com/ads_4aa02bf133.png",
        alternativeText: "",
      },
    },
    {
      id: "9",
      Title: "Design Web",
      Description:
        "Desenhamos seu site moderno, escalável e compatível com dispositivos móveis, otimizado para SEO, facilitando que seus potenciais clientes encontrem seu negócio de uma forma mais rápida.",
      Icon: {
        url: "https://ag7digital-site.s3.amazonaws.com/window_f8e9fb8448.png",
        alternativeText: "",
      },
    },
  ] as ICardWithIcon[];

  const textBox = {
    title: "Como podemos ajudar?",
    subtitle: "Nossos serviços",
    description:
      "Dentro das nossas estratégias digitais, temos um conjunto de serviços que podem ajudar a melhorar seu negócio.",
  } as ITextBox;

  return {
    textBox,
    cards,
  };
};

export const getClients = (): IClient => {
  const textBox = {
    id: "22",
    title: "Ajudamos",
    subtitle: "clientes",
    description: "Clientes que confiaram em nosso trabalho",
  } as ITextBox;

  const images = [
    {
      link: "https://somosviernes.com/",
      image: {
        id: "20",
        name: "viernes.png",
        alternativeText: "Viernes Studio",
        caption: "",
        width: 179,
        height: 179,
        mime: "image/png",
        url: "https://ag7digital-site.s3.amazonaws.com/viernes_66b33768ba.png",
      },
    },
    {
      link: "https://buscacredi.com",
      image: {
        id: "24",
        name: "buscacredi-logo.png",
        alternativeText: "Buscacredi",
        width: 300,
        height: 110,
        mime: "image/png",
        url: "https://ag7digital-site.s3.amazonaws.com/buscacredi_logo_8a98e3a3c5.png",
      },
    },
    {
      link: "https://dicoar.com.co/",
      image: {
        id: "27",
        name: "logo-dicoar.png",
        alternativeText: null,
        width: 182,
        height: 156,
        mime: "image/png",
        url: "https://ag7digital-site.s3.amazonaws.com/logo_dicoar_9dd8a05409.png",
      },
    },
    {
      link: "https://somoscuidame.com",
      image: {
        id: "19",
        name: "cuidame.png",
        alternativeText: "Cuidame",
        width: 283,
        height: 190,
        mime: "image/png",
        url: "https://ag7digital-site.s3.amazonaws.com/cuidame_079ce118c3.png",
      },
    },
    {
      link: "https://intuximagenes.com",
      image: {
        id: "25",
        name: "intux-logo.svg",
        alternativeText: "Intux Imágenes Diagnosticas",
        width: 256,
        height: 78,
        mime: "image/svg+xml",
        url: "https://ag7digital-site.s3.amazonaws.com/intux_logo_a299f9401e.svg",
      },
    },
    {
      link: "https://www.biolabdiagnostica.com/",
      image: {
        id: "23",
        name: "biolab-logo.png",
        alternativeText: "Biolab",
        width: 280,
        height: 97,
        mime: "image/png",
        url: "https://ag7digital-site.s3.amazonaws.com/biolab_logo_1ff4cc4ad8.png",
      },
    },
    {
      link: "https://endocenter.co",
      image: {
        id: "18",
        name: "endocenter.png",
        alternativeText: "Endocenter",
        width: 258,
        height: 120,
        mime: "image/png",
        url: "https://ag7digital-site.s3.amazonaws.com/endocenter_3814afc32c.png",
      },
    },
  ] as IImageWithLink[];

  return {
    textBox,
    slider: images,
  };
};
