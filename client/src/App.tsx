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
import { Platform } from './hooks/useGames';
import SortSelector, { SortOrder } from './components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: SortOrder | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectGenre = (genre: Genre) =>
    setGameQuery({ ...gameQuery, genre });
  const handleSelectPlatform = (platform: Platform) =>
    setGameQuery({ ...gameQuery, platform });
  const handleSelectSort = (sortOrder: SortOrder) =>
    setGameQuery({ ...gameQuery, sortOrder });

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
            <NavBar />
          </GridItem>

          <Show above='lg'>
            <GridItem area='aside' paddingX={5}>
              <GenreList
                onSelectGenre={handleSelectGenre}
                selectedGenre={gameQuery.genre}
              />
            </GridItem>
          </Show>

          <GridItem area='main'>
            <Flex paddingLeft={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  onSelectPlatform={handleSelectPlatform}
                  selectedPlatform={gameQuery.platform}
                />
              </Box>
              <SortSelector
                onSelectSort={handleSelectSort}
                selectedSort={gameQuery.sortOrder}
              />
            </Flex>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      </div>
    </ChakraProvider>
  );
};

export default App;
