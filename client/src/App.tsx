import { ChakraProvider, Grid, GridItem, Show } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import { PlatformSelector } from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const handleSelectGenre = (g: Genre) => setSelectedGenre(g);
  const handleSelectPlatform = (p: Platform) => setSelectedPlatform(p);

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
                selectedGenre={selectedGenre}
              />
            </GridItem>
          </Show>

          <GridItem area='main'>
            <PlatformSelector
              onSelectPlatform={handleSelectPlatform}
              selectedPlatform={selectedPlatform}
            />
            <GameGrid
              selectedGenre={selectedGenre}
              selectedPlatform={selectedPlatform}
            />
          </GridItem>
        </Grid>
      </div>
    </ChakraProvider>
  );
};

export default App;
