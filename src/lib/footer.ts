import IFooter from '../interfaces/i-footer';
import api from '../services/api';

export const getFooterData = async (
  locale: string = 'es',
): Promise<IFooter> => {
  const { data } = await api.get<IFooter>(`/footer?_locale=${locale}`);
  return data;
};
