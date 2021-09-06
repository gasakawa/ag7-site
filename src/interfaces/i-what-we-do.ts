import ICardWithImageText from './i-card-with-image-text';
import ITextBox from './i-textbox';

export default interface IWhatWeDo {
  textBox: ITextBox;
  cards: ICardWithImageText[];
}
