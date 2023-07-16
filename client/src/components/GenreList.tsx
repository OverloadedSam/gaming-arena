import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
  const { isLoading, data: genres } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize='32px'
                objectFit='cover'
                borderRadius={8}
              />
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                textAlign='left'
                whiteSpace='normal'
                fontSize='lg'
                variant='link'
                fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
