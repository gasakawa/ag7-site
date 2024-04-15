import IFooter from "../interfaces/i-footer";

export const getFooterData = (): IFooter => {
  return {
    id: "1",
    contact: "contacto@ag7digital.com",
    locale: "pt-BR",
    copyright: "© 2020 – AG7 Digital Business – Direitos reservados",
    socialLink: [
      {
        id: "1",
        brand: "Instagram",
        url: "https://www.instagram.com/ag7.digital/",
      },
      {
        id: "2",
        brand: "LinkedIn",
        url: "https://www.linkedin.com/company/ag7-digital-business",
      },
    ],
  };
};
