import IImage from './i-image';

export default interface IColumn {
  id: string;
  __component: string;
  Title: string;
  Description: string;
  Subtitle?: string;
  _v: string;
  _id: string;
  Image?: IImage;
  Icon?: IImage;
  heading?: string;
  images?: IImage[];
}
