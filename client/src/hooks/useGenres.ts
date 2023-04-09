import genres from '../data/genres';

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

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
