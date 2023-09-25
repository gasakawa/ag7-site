import ISocialLink from './i-social-link';

export default interface IFooter {
  id: string;
  locale: string;
  contact: string;
  copyright: string;
  socialLink: ISocialLink[];
}
