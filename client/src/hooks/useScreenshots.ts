import { useQuery } from '@tanstack/react-query';
import { Screenshot } from '../entities/Screenshot';
import ApiClient from '../services/api-client';

const useScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ['Screenshots', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
