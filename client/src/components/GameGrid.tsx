import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const { isLoading, data, error, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  const fetchedGamesCount = data?.pages.reduce(
    (acc, curr) => acc + curr.results.length,
    0
  );

  if (error) return <Text>{error.message}</Text>;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount ?? 0}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Spinner mt={5} />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={5}
      >
        {isLoading &&
          skeletons.map((n) => (
            <GameCardContainer key={n}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
