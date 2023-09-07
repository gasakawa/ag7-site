export default interface IImage {
  id: string;
  name: string;
  alternativeText?: string;
  mime: string;
  url: string;
  width: number;
  height: number;
}
