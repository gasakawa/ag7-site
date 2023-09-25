import IHeader from '../interfaces/i-header';
import api from '../services/api';

export const getHeaderData = async (): Promise<IHeader> => {
  const { data } = await api.get<IHeader>(`/menu?populate=*`);

  return data;
};
