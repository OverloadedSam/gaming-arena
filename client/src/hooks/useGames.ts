import { GameQuery } from '../App';
import useData from './useData';

export interface Platform {
  id: string;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery | null) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sortOrder?.value,
        search: gameQuery?.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
