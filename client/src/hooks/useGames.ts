import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import apiClient, { FetchDataResponse } from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery | null) =>
  useQuery<FetchDataResponse<Game>, Error>({
    queryKey: ['Games', gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Game>>('/games', {
          params: {
            genres: gameQuery?.genre?.id,
            parent_platforms: gameQuery?.platform?.id,
            ordering: gameQuery?.sortOrder?.value,
            search: gameQuery?.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
