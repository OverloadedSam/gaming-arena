import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import ApiClient, { FetchDataResponse } from '../services/api-client';
import useGameQueryStore from '../store';
import { Game } from '../entities/Game';

const apiClient = new ApiClient<Game>('/games');
const pageSize = 10;

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchDataResponse<Game>, Error>({
    queryKey: ['Games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
          page_size: pageSize,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
};

export default useGames;
