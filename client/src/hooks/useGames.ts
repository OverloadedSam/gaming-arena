import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import ApiClient, { FetchDataResponse } from '../services/api-client';
import { Platform } from './usePlatform';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>('/games');

const useGames = (gameQuery: GameQuery | null) =>
  useQuery<FetchDataResponse<Game>, Error>({
    queryKey: ['Games', gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder?.value,
          search: gameQuery?.searchText,
        },
      }),
  });

export default useGames;
