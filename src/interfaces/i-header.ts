import { ILink } from './i-link';
import { ILogo } from './i-logo';

export default interface IHeader {
  id: string;
  locale: string;
  links: ILink[];
  logo: ILogo;
}
