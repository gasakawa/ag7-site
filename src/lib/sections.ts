import IPageImage from '../interfaces/i-page-image';
import api from '../services/api';

export const getHeadingData = async (
  locale: string = 'es',
): Promise<IPageImage> => {
  const { data } = await api.get(
    `/sections?_Name=first-section&_locale=${locale}`,
  );

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
