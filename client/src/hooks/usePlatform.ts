import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import apiClient from '../services/api-client';
import { FetchDataResponse } from './useData';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['Platforms'],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
