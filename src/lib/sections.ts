import qs from 'qs';
import IAboutUs from '../interfaces/i-about-us';
import IColumn from '../interfaces/i-column';
import IPageImage from '../interfaces/i-page-image';
import ITextBox from '../interfaces/i-textbox';
import api from '../services/api';
import ICardOnlyText from '../interfaces/i-card-only-text';
import ICardWithImageText from '../interfaces/i-card-with-image-text';
import IWhatWeDo from '../interfaces/i-what-we-do';
import ICardWithIcon from '../interfaces/i-card-with-icon';
import IServices from '../interfaces/i-services';
import IClient from '../interfaces/i-client';
import IImageWithLink from '../interfaces/i-image-with-link';

export const getHeadingData = async (name: string): Promise<IPageImage> => {
  const { data } = await api.get(
    `/sections?populate[column][populate]=*&filters[Name][$eq]=${name}`
  );

  const [column] = data[0].columns;

  const headingData = {
    id: column.id,
    title: column.Heading,
    image: {
      id: column.Image.id,
      url: column.Image.url,
      alternativeText: column.Image.alternativeText,
      mime: column.Image.mime,
      width: column.Image.width,
      height: column.Image.height
    }
  } as IPageImage;

  return headingData;
};

export const getAboutUs = async (name: string): Promise<IAboutUs> => {
  const { data } = await api.get(
    `/sections?populate[column][populate]=*&filters[Name][$eq]=${name}`
  );

  const textBlock = data[0].columns
    .filter((col: IColumn) => col.__component === 'page.text-block')
    .shift() as IColumn;

  const cards = data[0].columns.filter(
    (col: IColumn) => col.__component === 'page.card-only-text'
  ) as IColumn[];

  const cardsOnlyText = cards.map(card => ({
    id: card.id,
    title: card.Title,
    description: card.Description
  })) as ICardOnlyText[];

  const textBox = {
    id: textBlock.id,
    title: textBlock.Title,
    subtitle: textBlock.Subtitle,
    name: textBlock.__component,
    description: textBlock.Description
  } as ITextBox;

  return {
    textBox,
    cards: cardsOnlyText
  };
};

export const getWhatWeDo = async (name: string): Promise<IWhatWeDo> => {
  const { data } = await api.get(
    `/sections?populate[column][populate]=*&filters[Name][$eq]=${name}`
  );

  const textBlock = data[0].columns
    .filter((col: IColumn) => col.__component === 'page.text-block')
    .shift() as IColumn;

  const cards = data[0].columns.filter(
    (col: IColumn) => col.__component === 'page.card-with-image-and-text'
  ) as IColumn[];

  const cardsWithImageText = cards.map(card => ({
    id: card.id,
    Image: card.Image,
    Title: card.Title,
    Description: card.Description
  })) as ICardWithImageText[];

  const textBox = {
    id: textBlock.id,
    title: textBlock.Title,
    subtitle: textBlock.Subtitle,
    name: textBlock.__component,
    description: textBlock.Description
  } as ITextBox;

  return {
    textBox,
    cards: cardsWithImageText
  };
};

export const getServices = async (name: string): Promise<IServices> => {
  const query = qs.stringify(
    {
      populate: {
        column: {
          on: {
            'page.text-block': {
              populate: '*'
            },
            'page.card-with-icon': {
              populate: '*'
            }
          }
        }
      },
      filters: {
        Name: {
          $eq: name
        }
      }
    },
    { encodeValuesOnly: true }
  );
  const { data } = await api.get(`/sections?${query}`);

  const textBlock = data[0].columns
    .filter((col: IColumn) => col.__component === 'page.text-block')
    .shift() as IColumn;

  const cards = data[0].columns.filter(
    (col: IColumn) => col.__component === 'page.card-with-icon'
  ) as IColumn[];

  const cardsWithIcon = cards.map(card => ({
    id: card.id,
    Icon: card.Icon,
    Title: card.Title,
    Description: card.Description
  })) as ICardWithIcon[];

  const textBox = {
    id: textBlock.id,
    title: textBlock.Title,
    subtitle: textBlock.Subtitle,
    name: textBlock.__component,
    description: textBlock.Description
  } as ITextBox;

  return {
    textBox,
    cards: cardsWithIcon
  };
};

export const getClients = async (name: string): Promise<IClient> => {
  const { data } = await api.get(
    `/sections?populate[column][populate]=*&filters[Name][$eq]=${name}`
  );

  const textBlock = data[0].columns
    .filter((col: IColumn) => col.__component === 'page.text-block')
    .shift() as IColumn;

  const images = data[0].columns.filter(
    (col: IColumn) => col.__component === 'page.image-with-link'
  ) as IColumn[];

  const textBox = {
    id: textBlock.id,
    title: textBlock.Title,
    subtitle: textBlock.Subtitle,
    name: textBlock.__component,
    description: textBlock.Description
  } as ITextBox;

  const imagesWithLink = images.map(image => ({
    link: image.link,
    image: image.Image
  })) as IImageWithLink[];

  return {
    textBox,
    slider: imagesWithLink
  };
};
