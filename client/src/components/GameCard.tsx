import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import notFound from '../assets/not-found.jpg';
import { Game } from '../entities/Game';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image
        src={
          game.background_image
            ? getCroppedImageUrl(game.background_image)
            : notFound
        }
      />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
