export default interface IColumn {
  id: string;
  __component: string;
  Title: string;
  Description: string;
  Subtitle?: string;
  _v: string;
  _id: string;
  Image?: {
    _id: string;
    name: string;
    url: string;
    mime: string;
    size: number;
    width: number;
    height: number;
    id: string;
    alternativeText?: string;
  };
  heading?: string;
}
