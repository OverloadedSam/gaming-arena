import { ChakraProvider, Grid, GridItem, Show } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';

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
        >
          <GridItem area='nav'>
            <NavBar />
          </GridItem>

          <Show above='lg'>
            <GridItem area='aside'>Aside</GridItem>
          </Show>

          <GridItem area='main'>
            <GameGrid />
          </GridItem>
        </Grid>
      </div>
    </ChakraProvider>
  );
};

export default App;
