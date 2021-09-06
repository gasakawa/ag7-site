import ICardWithIcon from './i-card-with-icon';
import ITextBox from './i-textbox';

export default interface IServices {
  textBox: ITextBox;
  cards: ICardWithIcon[];
}
