export default interface ICardWithImageText {
  id: string;
  Title: string;
  Description: string;
  Image: {
    name: string;
    alternativeText: string;
    mime: string;
    url: string;
    width: number;
    height: number;
  };
}
