export default interface ICardWithIcon {
  id: string;
  Title: string;
  Description: string;
  Icon: {
    name?: string;
    alternativeText: string;
    mime?: string;
    url: string;
    width?: number;
    height?: number;
  };
}
