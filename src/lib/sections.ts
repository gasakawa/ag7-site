import IPageImage from '../interfaces/i-page-image';
import ITextBox from '../interfaces/i-textbox';
import api from '../services/api';

export const getColumnWithImage = async (
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

export const getTextBox = async (
  name: string,
  locale: string = 'es',
): Promise<ITextBox> => {
  const { data } = await api.get(`/sections?_Name=${name}&_locale=${locale}`);

  const [column] = data[0].columns;

  const headingData = {
    id: column.id,
    title: column.Title,
    subtitle: column.Subtitle,
    name: column.__component,
    description: column.Description,
  } as ITextBox;

  return headingData;
};
