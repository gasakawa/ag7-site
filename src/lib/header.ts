import IHeader from '../interfaces/i-header';
import api from '../services/api';

export const getHeaderData = async (
  locale: string = 'es',
): Promise<IHeader> => {
  const { data } = await api.get<IHeader>(`/menu?_locale=${locale}`);

  return data;
};
