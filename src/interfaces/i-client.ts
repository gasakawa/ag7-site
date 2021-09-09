import IImageWithLink from './i-image-with-link';
import ITextBox from './i-textbox';

export default interface IClient {
  textBox: ITextBox;
  slider: IImageWithLink[];
}
