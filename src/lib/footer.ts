import IFooter from '../interfaces/i-footer';
import api from '../services/api';

export const getFooterData = async (): Promise<IFooter> => {
  const { data } = await api.get<IFooter>(`/footer?populate=*`);
  return data;
};
