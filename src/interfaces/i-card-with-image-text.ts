export default interface ICardWithImageText {
  id: string;
  title: string;
  description: string;
  image: {
    name: string;
    alternativeText: string;
    mime: string;
    url: string;
    width: number;
    height: number;
  };
}
