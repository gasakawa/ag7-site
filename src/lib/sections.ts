import IAboutUs from '../interfaces/i-about-us';
import IColumn from '../interfaces/i-column';
import IPageImage from '../interfaces/i-page-image';
import ITextBlock from '../interfaces/i-text-block';
import ITextBox from '../interfaces/i-textbox';
import api from '../services/api';
import ICardOnlyText from '../styles/i-card-only-text';

export const getHeadingData = async (
  name: string,
  locale: string = 'es',
): Promise<IPageImage> => {
  const { data } = await api.get(`/sections?_Name=${name}&_locale=${locale}`);

  const [column] = data[0].columns;

  const headingData = {
    id: column.id,
    title: column.heading,
    image: {
      id: column.image.id,
      url: column.image.url,
      alternativeText: column.image.alternativeText,
      mime: column.image.mime,
      width: column.image.width,
      height: column.image.height,
    },
  } as IPageImage;

  return headingData;
};

export const getAboutUs = async (
  name: string,
  locale: string = 'es',
): Promise<IAboutUs> => {
  const { data } = await api.get(`/sections?_Name=${name}&_locale=${locale}`);

  const textBlock = data[0].columns
    .filter((col: IColumn) => col.__component === 'page.text-block')
    .shift() as IColumn;

  const cards = data[0].columns.filter(
    (col: IColumn) => col.__component === 'page.card-only-text',
  ) as IColumn[];

  const cardsOnlyText = cards.map(card => ({
    id: card.id,
    title: card.Title,
    description: card.Description,
  })) as ICardOnlyText[];

  const textBox = {
    id: textBlock.id,
    title: textBlock.Title,
    subtitle: textBlock.Subtitle,
    name: textBlock.__component,
    description: textBlock.Description,
  } as ITextBox;

  return {
    textBox,
    cards: cardsOnlyText,
  };
};
