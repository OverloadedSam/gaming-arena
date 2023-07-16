import {
  Box,
  ChakraProvider,
  ColorModeScript,
  Flex,
  Grid,
  GridItem,
  Show,
} from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import { PlatformSelector } from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import theme from './theme';

const App = () => {
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
              <GenreList />
            </GridItem>
          </Show>

          <GridItem area='main'>
            <Box paddingLeft={5}>
              <GameHeading />
              <Flex>
                <Box marginRight={5}>
                  <PlatformSelector />
                </Box>
                <SortSelector />
              </Flex>
            </Box>
            <GameGrid />
          </GridItem>
        </Grid>
      </div>
    </ChakraProvider>
  );
};

export default App;
