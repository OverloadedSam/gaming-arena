import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import apiClient, { FetchDataResponse } from '../services/api-client';

export interface Platform {
  id: string;
  name: string;
  slug: string;
}
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ['Genres'],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Genre>>('/genres')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
