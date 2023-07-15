import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface GenreListProps {
  onSelectGenre: (g: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: GenreListProps) => {
  const { isLoading, data: genres } = useGenres();

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
                onClick={() => onSelectGenre(genre)}
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
