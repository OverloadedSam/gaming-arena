import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box
      _hover={{ transform: 'scale(1.03)' }}
      borderRadius={10}
      overflow='hidden'
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
