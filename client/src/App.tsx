import { Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <div className='app'>
        <Button colorScheme='blue'>Button</Button>
      </div>
    </ChakraProvider>
  );
};

export default App;
