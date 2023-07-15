import {
  Box,
  ChakraProvider,
  Flex,
  Grid,
  GridItem,
  Show,
} from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import { PlatformSelector } from './components/PlatformSelector';
import { Platform } from './hooks/usePlatform';
import SortSelector, { SortOrder } from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: SortOrder | null;
  searchText: string | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectGenre = (genre: Genre) =>
    setGameQuery({ ...gameQuery, genreId: genre.id });
  const handleSelectPlatform = (platform: Platform) =>
    setGameQuery({ ...gameQuery, platformId: platform.id });
  const handleSelectSort = (sortOrder: SortOrder) =>
    setGameQuery({ ...gameQuery, sortOrder });
  const handleSearch = (searchText: string) =>
    setGameQuery({ ...gameQuery, searchText });

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <div className='app'>
        <Grid
          templateAreas={{
            base: `'nav' 'main'`,
            lg: `'nav nav' 'aside main'`,
          }}
          templateColumns={{
            base: '1fr',
            lg: '200px 1fr',
          }}
        >
          <GridItem area='nav'>
            <NavBar onSearch={handleSearch} />
          </GridItem>

          <Show above='lg'>
            <GridItem area='aside' paddingX={5}>
              <GenreList
                onSelectGenre={handleSelectGenre}
                selectedGenreId={gameQuery.genreId}
              />
            </GridItem>
          </Show>

          <GridItem area='main'>
            <Box paddingLeft={5}>
              <GameHeading gameQuery={gameQuery} />
              <Flex>
                <Box marginRight={5}>
                  <PlatformSelector
                    onSelectPlatform={handleSelectPlatform}
                    selectedPlatformId={gameQuery.platformId}
                  />
                </Box>
                <SortSelector
                  onSelectSort={handleSelectSort}
                  selectedSort={gameQuery.sortOrder}
                />
              </Flex>
            </Box>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      </div>
    </ChakraProvider>
  );
};

export default App;
