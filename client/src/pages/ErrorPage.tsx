import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='100vh'
        flexDirection='column'
      >
        <Heading as='h1' size='2xl' mb={3}>
          {isRouteErrorResponse(error) ? 'Oops!' : 'Ah, Snap!'}
        </Heading>
        <Heading as='h2' size='lg' mb={6}>
          {isRouteErrorResponse(error)
            ? 'Page Not Found'
            : 'Something went wrong'}
        </Heading>
        <Text fontSize='xl' mb={4}>
          {isRouteErrorResponse(error)
            ? "The page you're looking for does not exist."
            : 'An unexpected error occurred while loading the page.'}
        </Text>
        <Text fontSize='xl' mb={4}>
          Please check the URL or navigate back to the home page.
        </Text>
        {/* Additional error handling or navigation options can be added here */}
      </Box>
    </>
  );
};

export default ErrorPage;
